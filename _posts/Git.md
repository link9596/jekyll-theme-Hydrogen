参考[《Pro Git》](https://git-scm.com/book/en/v2)，以下仅是个人记的笔记，用来帮助自己理解而已，没有学习参考的价值。

获取Git命令使用手册

```
$ git help <verb> 
# 如:$ git help config
$ git <verb> --help
$ man git-<verb>
```

## 配置命令

用户信息

```
$ git config --global user.name "genjie"
$ git config --global user.email "genjie@xx.com"
#使用--global选项，代表这台机器所有的Git仓库都会使用这个配置
```

检查配置信息

使用`git config --list`命令列出所有能找到的命令

```
$ git config --list
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
color.branch=auto
...
```

通过输入`git config <key>`来检查Git的某一项配置

```
$ git config user.name
yanggenjie
```

## 开始工作

当你想用Git来管理你的项目时，进入到那个项目目录输入以下命令，初始化仓库：

```
$ git init #inti是initialize（初始化）缩写
```

