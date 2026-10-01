# 运行边界

本仓库默认用于阅读作品集和回放已有实验，不包含运行存储或凭据。打开 README 或 demo/index.html 不需模型服务。

固定上游：AnythingLLM v1.16.2，commit `ad97bc8dfcb6919f34f7d6d0c722efdda64d66d9`。
固定镜像：`ghcr.io/mintplex-labs/anything-llm@sha256:903f8beb86bf167ec3fba0a886b72db5eec4b8b6dbcc8660de45ab223969a937`。

原实验：DeepSeek/deepseek-flash，Xenova/all-MiniLM-L6-v2，LanceDB，automatic；Chunk1000、Overlap20、Top-K4、threshold0.25、Rerank关闭、history20、memory关闭。V1.1代码见src/governance及本目录patch。

如自行复现实验，需另行获取官方源码/镜像、建立独立私有storage、手动配置合法API、应用对应补丁并挂载治理模块、导入14份制度，先验证环境。不可复用他人的数据库或凭据。本公开包不声称已完成全新机器的一键部署验证；没有携带私有镜像。此次仅验证全新clone可阅读所有作品材料及离线资产/分数校验。

scripts/test_v1_1_faults.cjs 为原始离线故障测试源码，依赖已应用补丁的AnythingLLM容器路径与ws包，不是零依赖本地脚本；其已保存结果见evidence/v1_1。
