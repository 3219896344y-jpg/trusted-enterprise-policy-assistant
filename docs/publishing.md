# GitHub发布交接

发布日期：2026-10-01。产品最终版为 V1.1；本次仅公开作品资料与现有静态 Demo。

- [公开仓库](https://github.com/3219896344y-jpg/trusted-enterprise-policy-assistant)
- [在线静态 Demo](https://3219896344y-jpg.github.io/trusted-enterprise-policy-assistant/demo/index.html)
- [Pages 部署记录](https://github.com/3219896344y-jpg/trusted-enterprise-policy-assistant/actions)

## 发布范围

仅推送经过审计的 release-ready 精选仓库，未推送原私有开发仓库及其历史。公开分支为 main。GitHub Pages 从 main 根目录发布，使用 `.nojekyll` 保留静态资源，根目录 `index.html` 跳转到 `demo/index.html`。

首次 Pages 构建 [36858291593](https://github.com/3219896344y-jpg/trusted-enterprise-policy-assistant/actions/runs/36858291593) 在提交 `335def52ea52f45a3132360380d1656a8fddd5df` 上成功，在线 Demo 匿名访问返回 HTTP 200 后，才加入 README 入口。最终发布提交可在仓库 main 历史中查看。

没有部署 AnythingLLM 后端，没有连接模型 API，没有修改产品逻辑、实验输出、评分标准或冻结数据。Demo 是已保存结果的静态历史回放，保留失败、退化与待复核项，不能理解成实时问答或生产可靠性证明。

## 仓库信息

Description：

> AI Product Portfolio | Trusted enterprise policy RAG agent with evidence governance, evaluation and bad-case driven iteration.

Topics：ai-product、rag、agent、llm、evaluation、anythingllm、deepseek、product-management。

## 可复核检查

- [公开审计快照](public_release_audit.md)
- [公开内容及全部 Git 对象扫描脚本](../scripts/scan_public.py)
- [链接、冻结资产与文件检查脚本](../scripts/verify_portfolio.py)
- [公开评分复算脚本](../scripts/check_scores.py)

公开包不包含运行目录、数据库、凭据或私有会话数据。发布后仍应避免把本机运行环境加入公开仓库。作品集保留合成制度、单次实验和单评审初标的结论边界。
