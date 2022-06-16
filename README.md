# stylelint-config

用于练习 scss less 样式文件的 stylelint 规则，理解 stylelint 的配置项和规则

## pnpm workspace([工作空间](https://pnpm.io/zh/workspaces))

通过 pnpm 工作空间的特性，我们可以在本地链接到对应的包来验证配置是否生效。发布之后 workspace 会自动转换成发布的版本包

1.配置 pnpm-workspace.yaml 或者 .npmrc 文件来指定工作空间的目录 <br />
2.在 package.json 文件中以 workspace:* 来引用对应的包
