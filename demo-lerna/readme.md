## Lerna的使用

1. 执行命令

> lerna exec -- scope mytool -- node bin\mytool.js

> lerna exec --scope mytool-cli -- node bin\cli.js

2. 添加所有的依赖

> lerna bootstrap