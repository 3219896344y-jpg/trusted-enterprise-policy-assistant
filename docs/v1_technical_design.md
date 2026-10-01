# V1.1：证据治理、回答边界与异常隔离

## 产品取舍

B 的核心回答已较准确，首版重点减少无关来源和无依据业务推断。保留 AnythingLLM 的上传解析、Embedding、LanceDB、automatic 工具循环、历史存储与 Web 界面。新增独立证据治理模块，单个原版文件的小补丁把它接在最终输出前；不重写 RAG。

## 已阅读的 v1.16.2 路径

- `server/utils/agents/aibitat/plugins/memory.js`：rag-memory.search 调用相似检索，使用 workspace topN，contextTexts 进入工具结果，sources 加入 pending citations。
- `plugins/summarize.js`：document-summarizer 读取完整文档，原文加入 citations，小文档直接返回，大文档摘要。只治理向量检索会漏掉这条路径。
- `aibitat/index.js`：reply 用原版角色和真实对话构造消息；handleAsyncExecution 递归调用工具并生成草稿；flushCitations 发送来源。V1 在这里增加最终核对，阻止草稿文字先流到用户。
- `plugins/chat-history.js`：最终消息及 pending citations 保存到 SQLite。V1 替换二者后仍走原版保存路径，因此刷新和追问看到相同治理结果。
- `providers/deepseek.js`：复用已有 provider 实例调用相同模型；本模块从不获取 API Key。累计 token 包含新增调用。

## 数据流

用户问题与真实历史 → 原版 automatic 搜索/读文档 → 实际候选片段 → 相同 DeepSeek 模型的结构化证据回答 → 程序验证原文引句、来源身份、日期区间和部门标签 → 最终答复与保留的原始来源片段 → 原版 UI/聊天数据库。原版草稿仅留作审计，不传给治理调用，避免继承草稿中的越界结论。

治理层只能看到本轮原版取得的候选资料及 registry，不能额外查询 gold 或测试说明。不补检索、不改 Top-K/Chunk。registry 不包含测试答案。主体适用性、相关性与语义蕴含由治理调用判断；日期、部门字段和引句存在性由程序校验。后者不等于形式化证明答案受证据支持。

四种输出行为：ANSWER、PARTIAL_ANSWER、CLARIFY、NO_EVIDENCE。事实逐项绑定真实 source 和连续原文；未知部分和澄清另列。来源不设固定数量上限，并保留原始完整片段，不裁剪成漂亮的命中句。旧制度留在库内；仅允许带有效历史日期、明确历史用途的证据。

## 可维护性与限制

新增 `src/governance/gate.cjs`、`rules.txt`、从 registry 派生的 JSON 和一个可重复生成的 patch。补丁生成器断言原版锚点，版本不符即停止。完整上游源码不放进公开仓库。

每轮额外一次同模型调用，增加延迟和费用；候选本身缺失时无法凭空补证，可能导致过度拒答。传输使用 DeepSeek JSON-object 模式与平行 facts/supports 数组，避免嵌套对象生成错层；JSON模式仍不保证业务正确。程序只作确定性结构还原，不补写证据。JSON/引句校验失败是 operational error，不能算正确拒答。V1.1 使用有界 JSON 解析和严格 Schema：拒绝缺字段、意外字段、错误类型与超限响应，不猜测修补模型内容。失败返回 governance_status=failed，清空未经治理的引用，并隔离回调/Promise 异常。语义核对仍可能漏判或误判，尤其复杂部分回答、主体变化和历史比较；必须由独立 Dev Set 与冻结复测检验。当前只验证固定 DeepSeek streaming automatic 路径，其他 provider/普通聊天不在支持范围。

审计保留候选、保留/排除理由、原版草稿及治理结果；私有运行日志不公开。tool_trace_complete 仍为 false，治理层日志不能冒充完整内部工具链。


## 展示边界

回答中的方括号编号由最终片段顺序生成，用于审计映射，不是新开发的可点击条款锚点。原版 Sources 按文档聚合显示，用户仍通过该面板查看片段；逐事实引句与来源ID另在治理记录中保存。当前不把这一实现称为完整的逐句交互证据链。V1沿用克隆Workspace的slug以保留向量命名空间；实例身份以独立V1.1端口、容器及存储为准。

## 冻结实现入口

[治理入口](../src/governance/gate.cjs)、[Schema](../src/governance/schema.cjs)、[有界解析](../src/governance/parse.cjs)、[可靠性边界](../src/governance/reliability.cjs)、[原版扩展补丁](../deployment/anythingllm-v1-1.patch)。代码与 V1.1 冻结版一致，本次公开整理未改产品行为。
