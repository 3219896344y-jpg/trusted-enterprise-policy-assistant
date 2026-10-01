# 公开发布审计

审计日期：2026-10-01。范围为此次精选公开包与其完整本地Git对象库。产品最终版仍为V1.1，没有重新调用模型、调参或改变冻结标准。

## 检查范围与方式

- 私有来源仓库：688个已跟踪文件；Git全部对象中773个blob、21个commit、142个tree。扫描包括不可达对象、commit/tag元数据，而不只HEAD。
- 公开包：文本与二进制文件、全部Git对象、提交身份；检查密钥格式、Bearer、凭据赋值、Cookie/Authorization、JWT、私钥、个人邮箱、手机号、代理配置、本机用户目录与用户名。
- 文件清单排除.env、runtime、storage、SQLite、LanceDB、浏览器profile/session、私有配置、隐藏模型草稿与不必要原始日志。
- 图片逐张目视检查；链接/资产SHA/逐例分数与引用身份离线检查。没有访问用户API Key、账户或账单。

## 发现与处理

私有仓库当前5个文件包含本机用户绝对路径，历史共有6个对应blob版本。路径值不在报告中复述。涉及：

1. `docs/baseline_b_report.md`
2. `docs/initialization_report.md`
3. `evidence/baseline_b/run_1.0.1/deployment_verification.json`
4. `evidence/baseline_b/run_1.0.1/upload_order.txt`
5. `scripts/write_baseline_b_reports.py`

没有仅修改HEAD掩盖历史。采取**独立精选导出 + 全新公开Git历史**：保留私有开发仓库、历史失败实验和所有原始证据；上述文件不进入公开包，必要说明重写为相对路径及通用部署边界。公开包不继承私有父提交或对象库。发布时必须使用此干净仓库，**不得推送原私有开发仓库**。

来源仓库模式扫描未发现密钥命中；这不是密钥不存在的数学证明。当前公开包增强扫描未发现私人邮箱、手机号、Windows用户名、个人路径、代理值或会话凭据。Git提交使用非个人通用身份。

## 导出真实性

- B和V1.1各80题，所有尝试、失败轮与多轮输入均保留。
- `visible_answer`与实际来源`text`逐字保留；移除thread/chat/invocation标识、浏览器事件、隐藏草稿与私有运行字段。不是选择性删除Bad Case。
- 评分保留原单评审标签、分母、N/A、错误、待复核理由与来源全文。程序重新汇总六指标并校验引用片段身份，未重新裁决争议。
- 14份制度、registry、80题测试集、28题Dev Set、V1.1治理代码/补丁保持原字节；[发布清单](../evaluation/publication_manifest.json)和[冻结身份](../evaluation/v1_1_release_identity.json)保留SHA。
- 01/02/02b截图来自V1.1真实已有会话；03–06是实际记录的只读回放，页面明确标记；07是评分图。未伪造运行界面，未改模型原始输出。
- 私有commit只作为出处身份，公开新历史不伪装成原始开发提交链。

## License与归属

保留根MIT、上游Mintplex Labs MIT原文、[THIRD_PARTY_NOTICES](../THIRD_PARTY_NOTICES.md)。没有发布完整AnythingLLM源码、依赖包或镜像。README区分原版能力与个人产品/治理贡献。许可证文件与私有归档副本字节一致。本项是仓库分发材料检查，不是法律意见。

## 当前结论

公开内容扫描未发现阻断问题；公开Git对象扫描及全新clone复核结果见本报告下方最终验收。私有仓库仍有原始路径，故它本身**不适合直接公开**；已通过独立公开历史隔离，而非删除私有证据。

现有评分争议和两题治理失败已披露，不作为此次作品集公开的阻断。新机器完整部署未验证，也不属于本次验收范围。未创建GitHub remote，未push。

## 复查命令

在公开仓库根目录运行，均离线，不访问模型或私有runtime：

```sh
python scripts/scan_public.py .
python scripts/verify_portfolio.py
python scripts/check_scores.py
python scripts/build_figures.py
```

扫描只返回相对文件名、规则名与对象SHA，不输出可能的秘密值。模式扫描不能保证发现所有秘密；图片和上下文仍需人工判断。
