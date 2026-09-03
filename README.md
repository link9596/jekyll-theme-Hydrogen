# Hydrogen For Jekyll

> 轻盈、干净 · 跟随她的脚步，开始你的博客之旅

Hydrogen 是一款基于 [Jekyll](https://jekyllrb.com) 的极简风格静态博客主题。

厌倦了无止境的加载以及繁杂的页面内容？那你很幸运，因为发现了 Hydrogen。

我们避免繁杂，用**轻量化的模块**渲染屏幕上展示的一切——当你使用过后就会知道，她带给你的，不仅仅只有简洁极速的阅读体验。

<p align="center">
  <img src="/theme/logo-h.svg" alt="Hydrogen Logo" width="200" />
</p>

**[在线演示 Demo](https://jekyll-theme-hydrogen.netlify.app/)** · 简体中文 | [English](README-en.md)

![GitHub repo size](https://img.shields.io/github/repo-size/link9596/jekyll-theme-Hydrogen?color=%23F8BBD0)
![GitHub release](https://img.shields.io/github/release/link9596/jekyll-theme-Hydrogen?color=%235C6BC0&label=Version)

---

## ✨ 特性

- **极致轻量**：无重型框架依赖，轻量化模块渲染，页面加载快速流畅
- **PJAX 无刷新加载**：内置 InstantClick，带来 SPA 单页应用般的顺滑体验（可开关）
- **MathJax 数学公式**：内置支持，技术类博客开箱即用（可开关）
- **Emoji 表情**：基于 `jemoji`，写作时直接使用 `:smile:` 语法
- **文章置顶**：Front Matter 中一行配置即可置顶文章
- **友链系统**：通过 `_data/friends.yml` 轻松管理友链
- **标签系统**：自动聚合文章标签，支持标签页浏览
- **SEO 友好**：keywords、社交分享元信息、canonical 链接、RSS Feed 一应俱全
- **自定义主题色**：顶部栏颜色随心配置（rgba）
- **可换首页背景**：一行配置切换首页主题图
- **建站天数自动计算**：填写建站时间戳，页脚自动展示博客已陪伴你的天数
- **标题交互**：切换浏览器标签页时，标题自动变化
- **响应式设计**：完美适配桌面端与移动端

## 📦 环境要求

- Ruby >= 2.7
- Bundler
- Jekyll ~> 4.3（已在 gemspec 中声明）

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/link9596/jekyll-theme-Hydrogen.git
cd jekyll-theme-Hydrogen
```

### 2. 安装依赖

```bash
bundle install
```

### 3. 本地预览

```bash
bundle exec jekyll serve
```

打开 <http://localhost:4000> 即可预览。

### 4. 开始写作

在 `_posts` 目录下新建 Markdown 文件，命名为 `YYYY-MM-DD-标题.md`：

```markdown
---
layout: post
title: 你好，Hydrogen
tags: [随笔, 生活]
stickie: true
---

这里是正文……
```

## ⚙️ 配置说明

打开主题根目录下的 `_config.yml`，根据需求修改：

| 配置项 | 说明 |
| --- | --- |
| `title` | 博客名称 |
| `description` | 博客描述 |
| `keywords` | 博客关键词（SEO 相关） |
| `author` | 作者名 |
| `hide` / `show` | 切换浏览器标签页时标题栏显示的趣味文案 |
| `baseurl` | 博客所在子目录（如 `/blog`）；根目录请留空。**填写错误可能会导致样式丢失！** |
| `url` | 你的域名，如 `atlinker.cn`（无需加 `http/https://`） |
| `buildtime` | 博客建站时间戳，填写后页脚自动计算博客已运行天数。可用[日期转时间戳工具](https://tool.lu/timestamp/)转换 |
| `PJAX` | 是否开启 PJAX 无刷新加载（布尔值） |
| `paginate` | 主页每页显示的最大文章数，超过自动归入下一页 |
| `paginate_path` | 分页路径格式 |
| `background` | 博客首页背景图片路径 |
| `theme_color` | 顶部栏颜色，填 rgba 颜色代码（**不支持带 `#` 的 HEX 值**） |
| `MathJax` | 是否开启 MathJax（布尔值） |
| `hydrogen-blog.date_format` | 文章日期显示格式（Liquid 语法） |

> 开发者选项：`PJAX` 无刷新加载，开启后获得 SPA 单页应用体验。

## 📝 常用功能

### 文章置顶

在文章 Front Matter 中加入 `stickie: true` 即可：

```markdown
---
layout: post
title: Hi
stickie: true
---
```

### 添加友链

打开 `_data` 目录下的 `friends.yml`，根据文件中的模板新增即可。

### 自定义域名

修改根目录下的 `CNAME` 文件为你自己的域名，再到 DNS 服务商处添加解析即可。

### 部署

推荐部署到 GitHub Pages / Netlify 等静态托管平台：

```bash
bundle exec jekyll build
```

将 `_site` 目录内容（或直接推送仓库）部署到你的托管平台即可。

## 📁 目录结构

```
jekyll-theme-Hydrogen/
├── _config.yml           # 站点配置
├── _data/
│   └── friends.yml       # 友链数据
├── _includes/            # 页面组件（页头、标签列表等）
├── _layouts/             # 页面布局（default / home / page / post / tags / config）
├── _posts/               # 博客文章
├── _sass/                # SCSS 样式源码
├── assets/               # 静态资源（CSS / JS / 字体）
├── avatar/               # 头像与 favicon
├── comment/              # 评论系统脚本（Valine）
├── config/               # 主题配置页
├── feed/                 # RSS Feed
├── pages/                # 关于、友链、标签、404 等独立页面
├── script/               # 辅助脚本
├── theme/                # 主题素材（Logo 等）
├── update/               # 更新说明页
├── CNAME                 # 自定义域名
├── Gemfile               # 依赖声明（jekyll / webrick / jemoji / jekyll-paginate）
├── Hydrogen-blog.gemspec # 主题打包（作为 Gem 使用）
└── LICENSE               # MIT 许可证
```

## 🤝 参与贡献

欢迎提交 [Issues](https://github.com/link9596/jekyll-theme-Hydrogen/issues) 反馈问题与建议，也欢迎通过 Pull Request 贡献代码。

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

## 🙏 写在最后

请花 10 分钟**认真**阅读文档，如还有疑难之处，欢迎提 [Issues](https://github.com/link9596/jekyll-theme-Hydrogen/issues)，我会尽力帮忙；使用过程中遇到的任何疑难 Bug，也请提出 Issues。

最后，如果喜欢，请给项目点个 Star ⭐——点 Star 的大佬都超级靓的！
