### generators 的文件结构

```
generators
└── app
    ├── index.js
    └── templates
        ├── _.gitignore
        ├── _README.md
        ├── _package.json
        ├── index.js
        └── main.js
```


- `templates` 是模版文件夹
- `index.js` 是核心文件
- `templates/index`, `templates/main.js`, `templates/_README.md`, `templates/_package.json`, `templates/.gitignore.json` 是模版文件



### core 的设计

- initializing 一次性初始化
- prompting 命令交互
- writing 模版写入
- install 安装依赖
- end 结束

通过 `templatePath` 方法编译模版文件，且优先使用 yarn。