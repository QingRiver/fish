# fish

## install

> 首先确定当前环境的 node 版本 > 14.0

### 安装 yarn

[安装 yarn](https://classic.yarnpkg.com/latest.msi)
安装完成后测试能否正常调用

```bash
npm
yarn -v
```

### 安装依赖

修改 yarn 为国内的源

```bash
yarn config set registry https://registry.npm.taobao.org/
yarn #安装依赖
yarn lint #测试lint是否正常工作
yarn test #测试jest是否正常工作
```

### 安装字体

[下载字体包](https://github.com/tonsky/FiraCode/releases)
框选所有 ttf 文件夹下的字体,右键安装

## debug

直接在当前文件夹下 F5 即可进行 debug
