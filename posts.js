// Published journal articles. Account data stays local.
window.YYG_POSTS = [
  {
    "id": "ccride-v0.3.8",
    "title": "ccrIDE v0.3.8: background work and cancellable downloads",
    "category": "Code & Projects",
    "excerpt": "Background search and header models, cancellable plugin downloads, Release builds and clearer toolbar labels.",
    "body": [
      "ccrIDE v0.3.8 is now available for Windows x64. This update focuses on keeping editing responsive and making background work easier to stop.\n\n## What changed\n\n- Workspace search runs in the background, with file/match counts and cancellation. New queries discard old results.\n- Compiler include discovery and header models run off the UI thread. Pending completion refreshes when ready; indexing can be cancelled from the status bar.\n- Marketplace downloads use a managed worker process, with cancellation, shutdown cleanup, deadlines and resource limits. SHA-256 and manifest checks remain enabled.\n- Release is the default build configuration. Toolbar text labels are configurable and collapse in narrow windows.\n- Chinese/English, draggable docking and F10/F11/F12 shortcuts remain available.\n\n## Downloads\n\n- [Offline installer with GCC/GDB](https://github.com/yunyugong/ccrIDE/releases/download/v0.3.8/ccrIDE-Setup-v0.3.8.exe)\n- [Portable ZIP with GCC/GDB](https://github.com/yunyugong/ccrIDE/releases/download/v0.3.8/ccrIDE-v0.3.8-win64-with-GCC.zip)\n- [Release notes, optional plugins and SHA-256 files](https://github.com/yunyugong/ccrIDE/releases/tag/v0.3.8)\n\nOptional plugins are AI Assistant 1.2.2, clangd 1.2.2 and Completion Documentation 1.0.2. Basic completion remains built in. Requirements: Windows x64 and OpenGL 3.3. Upgrade into a new writable directory to preserve previous versions and settings.\n\n## Verification and limits\n\nAll 11 test suites passed, including 646 core checks and 85 marketplace checks. Chinese/English rendering and relocated offline compile/run/GDB checks passed. Download isolation does not make native third-party DLL plugins a full sandbox. File-system cancellation remains cooperative. [Implementation notes](https://github.com/yunyugong/ccrIDE/blob/main/docs/responsiveness-0.3.8.md) describe these boundaries; [performance records](https://github.com/yunyugong/ccrIDE/blob/main/docs/performance.md) cover a synthetic core workload, not overall IDE speed.\n\n[Project and source code](https://github.com/yunyugong/ccrIDE)\n"
    ],
    "format": "markdown",
    "sample": false,
    "date": "2026-11-13",
    "author": "yungyugong",
    "language": "en",
    "translations": {
      "en": {
        "title": "ccrIDE v0.3.8: background work and cancellable downloads",
        "excerpt": "Background search and header models, cancellable plugin downloads, Release builds and clearer toolbar labels.",
        "body": [
          "ccrIDE v0.3.8 is now available for Windows x64. This update focuses on keeping editing responsive and making background work easier to stop.\n\n## What changed\n\n- Workspace search runs in the background, with file/match counts and cancellation. New queries discard old results.\n- Compiler include discovery and header models run off the UI thread. Pending completion refreshes when ready; indexing can be cancelled from the status bar.\n- Marketplace downloads use a managed worker process, with cancellation, shutdown cleanup, deadlines and resource limits. SHA-256 and manifest checks remain enabled.\n- Release is the default build configuration. Toolbar text labels are configurable and collapse in narrow windows.\n- Chinese/English, draggable docking and F10/F11/F12 shortcuts remain available.\n\n## Downloads\n\n- [Offline installer with GCC/GDB](https://github.com/yunyugong/ccrIDE/releases/download/v0.3.8/ccrIDE-Setup-v0.3.8.exe)\n- [Portable ZIP with GCC/GDB](https://github.com/yunyugong/ccrIDE/releases/download/v0.3.8/ccrIDE-v0.3.8-win64-with-GCC.zip)\n- [Release notes, optional plugins and SHA-256 files](https://github.com/yunyugong/ccrIDE/releases/tag/v0.3.8)\n\nOptional plugins are AI Assistant 1.2.2, clangd 1.2.2 and Completion Documentation 1.0.2. Basic completion remains built in. Requirements: Windows x64 and OpenGL 3.3. Upgrade into a new writable directory to preserve previous versions and settings.\n\n## Verification and limits\n\nAll 11 test suites passed, including 646 core checks and 85 marketplace checks. Chinese/English rendering and relocated offline compile/run/GDB checks passed. Download isolation does not make native third-party DLL plugins a full sandbox. File-system cancellation remains cooperative. [Implementation notes](https://github.com/yunyugong/ccrIDE/blob/main/docs/responsiveness-0.3.8.md) describe these boundaries; [performance records](https://github.com/yunyugong/ccrIDE/blob/main/docs/performance.md) cover a synthetic core workload, not overall IDE speed.\n\n[Project and source code](https://github.com/yunyugong/ccrIDE)\n"
        ],
        "format": "markdown"
      },
      "zh-Hans": {
        "title": "ccrIDE v0.3.8：后台工作与可取消下载",
        "excerpt": "后台搜索与头文件模型、可取消的插件下载、Release 构建和更清晰的工具栏标签。",
        "body": [
          "ccrIDE v0.3.8 已发布，面向 Windows x64。本次主要改善后台工作的响应和取消体验。\n\n## 更新内容\n\n- 全局搜索移到后台，显示文件数与结果数，支持取消；新搜索不会混入旧结果。\n- 编译器 include 路径查询与头文件模型构建移出界面线程；补全就绪后自动刷新，可从状态栏取消索引。\n- 插件市场下载采用独立工作进程，支持取消、退出清理、超时与资源限制；继续校验 SHA-256 和插件清单。\n- 默认使用 Release 构建；工具栏文字标签可配置，窄窗口自动收起。\n- 保留中英文、拖动停靠以及 F10/F11/F12 快捷键。\n\n## 下载\n\n- [离线安装程序，内含 GCC/GDB](https://github.com/yunyugong/ccrIDE/releases/download/v0.3.8/ccrIDE-Setup-v0.3.8.exe)\n- [便携 ZIP，内含 GCC/GDB](https://github.com/yunyugong/ccrIDE/releases/download/v0.3.8/ccrIDE-v0.3.8-win64-with-GCC.zip)\n- [发布说明、独立插件与 SHA-256 校验文件](https://github.com/yunyugong/ccrIDE/releases/tag/v0.3.8)\n\n可选插件为 AI 助手 1.2.2、clangd 1.2.2 和补全注释 1.0.2。普通代码补全仍内置。需要 Windows x64 和 OpenGL 3.3；升级时请选择新的可写目录，保留旧版与已有设置。\n\n## 验证与边界\n\n11 组测试全部通过，包含 646 项核心检查和 85 项插件市场检查；中英文界面、换目录后的离线编译运行与 GDB 验证通过。下载进程隔离不代表第三方 DLL 已全面沙箱化，文件系统取消仍是协作式。[改进说明](https://github.com/yunyugong/ccrIDE/blob/main/docs/responsiveness-0.3.8.md)记录了具体边界，[性能记录](https://github.com/yunyugong/ccrIDE/blob/main/docs/performance.md)只覆盖合成核心工作负载，不代表整个 IDE 的速度。\n\n[项目与源码](https://github.com/yunyugong/ccrIDE)\n"
        ],
        "format": "markdown"
      }
    }
  },
  {
    "id": "805751ef-e42d-4d52-a19b-7a685bebf11e",
    "title": "hello world",
    "category": "Life",
    "excerpt": "Every blog starts with \"Hello, World!\"",
    "body": [
      "Welcome to **YYG Blog**.\n\n**Programming:** I will post solutions to problems from platforms like Luogu.\n\n**Academics:** I might post about this occasionally (though rarely).\n\n**Projects:** I will share updates and news regarding my own projects (hosted on GitHub).\n\n**Life:** I might post about this, but very infrequently.\n\n**Other:** Maybe—who knows?\n\nAlright, that’s about it!"
    ],
    "format": "markdown",
    "sample": false,
    "date": "2026-11-07",
    "author": "yungyugong",
    "language": "en",
    "translations": {
      "en": {
        "title": "hello world",
        "excerpt": "Every blog starts with \"Hello, World!\"",
        "body": [
          "Welcome to **YYG Blog**.\n\n**Programming:** I will post solutions to problems from platforms like Luogu.\n\n**Academics:** I might post about this occasionally (though rarely).\n\n**Projects:** I will share updates and news regarding my own projects (hosted on GitHub).\n\n**Life:** I might post about this, but very infrequently.\n\n**Other:** Maybe—who knows?\n\nAlright, that’s about it!"
        ],
        "format": "markdown"
      },
      "zh-Hans": {
        "title": "hello world",
        "excerpt": "每个博客都从hello world开始。",
        "body": [
          "欢迎来到 **YYG Blog**。\n\n**关于编程** 这个博客我会发一些有关luogu等做题平台的题解。\n\n**关于文化课** 我有时也会发（很少的）\n\n**关于项目** 我自己的项目（托管在github上），会发一下更新等动态\n\n**关于生活** 会发，但很少\n\n**其他** 可能把\n\nok，就这些吧"
        ],
        "format": "markdown"
      }
    }
  }
];
