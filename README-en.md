# Hydrogen For Jekyll

> Lightweight, clean · Follow her lead and start your blogging journey

Hydrogen is a minimalist static blog theme built on [Jekyll](https://jekyllrb.com).

Tired of endless loading and cluttered page content? Then you're in luck — you've found Hydrogen.

We avoid the complex and render everything you see on screen with **lightweight modules**. Once you've used it, you'll know she brings you far more than just a clean, blazing-fast reading experience.

<p align="center">
  <img src="/theme/logo-h.svg" alt="Hydrogen Logo" width="200" />
</p>

**[Live Demo](https://atlinker.cn)** · [简体中文](README.md) | English

![GitHub repo size](https://img.shields.io/github/repo-size/link9596/jekyll-theme-Hydrogen?color=%23F8BBD0)
![GitHub release](https://img.shields.io/github/release/link9596/jekyll-theme-Hydrogen?color=%235C6BC0&label=Version)

---

## ✨ Features

- **Ultra-lightweight**: no heavy frameworks — lightweight modules render every element, making pages load fast and smooth
- **PJAX no-refresh navigation**: InstantClick built-in, delivering an SPA-like seamless experience (toggleable)
- **MathJax support**: built-in math formula rendering, ready out of the box for technical blogs (toggleable)
- **Emoji support**: powered by `jemoji`, just write `:smile:` in your posts
- **Pin posts**: one line in the Front Matter is all it takes to pin an article
- **Friend links**: easily manage links through `_data/friends.yml`
- **Tag system**: automatically aggregates post tags with a dedicated tag page
- **SEO-friendly**: keywords, social share meta tags, canonical links, and RSS feed all included
- **Custom theme color**: freely configure the top bar color (rgba)
- **Changeable home background**: switch the homepage hero image with a single config line
- **Site age auto-calc**: fill in your site's founding timestamp and the footer automatically shows how many days your blog has accompanied you
- **Playful title interaction**: the browser tab title changes when you switch tabs (copy customizable)
- **Responsive design**: perfect on both desktop and mobile

## 📦 Requirements

- Ruby >= 2.7
- Bundler
- Jekyll ~> 4.3 (declared in the gemspec)

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/link9596/jekyll-theme-Hydrogen.git
cd jekyll-theme-Hydrogen
```

### 2. Install dependencies

```bash
bundle install
```

### 3. Preview locally

```bash
bundle exec jekyll serve
```

Then open <http://localhost:4000> to preview.

### 4. Start writing

Create a Markdown file under `_posts`, named `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: Hello, Hydrogen
tags: [essay, life]
stickie: true
---

Your content goes here...
```

## ⚙️ Configuration

Open `_config.yml` in the theme root and modify as needed:

| Option | Description |
| --- | --- |
| `title` | Your blog's name |
| `description` | Your blog's description |
| `keywords` | Blog keywords (SEO-related) |
| `author` | Author name |
| `hide` / `show` | Playful texts shown in the tab title when switching browser tabs |
| `baseurl` | Subdirectory of your blog (e.g. `/blog`); leave empty for root. **A wrong value may break your styles!** |
| `url` | Your domain, e.g. `atlinker.cn` (no `http/https://` prefix) |
| `buildtime` | Timestamp of when your blog was founded; the footer then auto-calculates days online. Convert a date with the [date-to-timestamp tool](https://tool.lu/timestamp/) |
| `PJAX` | Enable PJAX no-refresh loading (boolean) |
| `paginate` | Max number of posts per page on the homepage; excess posts go to the next page |
| `paginate_path` | Pagination path format |
| `background` | Path to the homepage hero image |
| `theme_color` | Top bar color — fill in an rgba color code (**HEX values with `#` are NOT supported**) |
| `MathJax` | Enable MathJax (boolean) |
| `hydrogen-blog.date_format` | Date display format for posts (Liquid syntax) |

> Developer option: `PJAX` no-refresh loading — enable it for an SPA-like experience.

## 📝 Common Usage

### Pin a post

Add `stickie: true` to the Front Matter:

```markdown
---
layout: post
title: Hi
stickie: true
---
```

### Add friend links

Open `_data/friends.yml` and add new entries following the template in the file.

### Configure comments

The theme ships with a Valine comment system built on LeanCloud (scripts live in the `comment/` directory). Fill in your LeanCloud application info to enable it, or replace it with any comment solution you prefer.

### Use a custom domain

Edit the `CNAME` file in the root with your own domain, then add the corresponding DNS record at your provider.

### Deploy

Recommended hosting: GitHub Pages, Netlify, or any static hosting platform:

```bash
bundle exec jekyll build
```

Deploy the contents of `_site` (or just push the repository) to your hosting platform.

## 📁 Directory Structure

```
jekyll-theme-Hydrogen/
├── _config.yml           # Site configuration
├── _data/
│   └── friends.yml       # Friend link data
├── _includes/            # Page components (header, tag list, etc.)
├── _layouts/             # Layouts (default / home / page / post / tags / config)
├── _posts/               # Blog posts
├── _sass/                # SCSS source styles
├── assets/               # Static assets (CSS / JS / fonts)
├── avatar/               # Avatar & favicon
├── comment/              # Comment system scripts (Valine)
├── config/               # Theme configuration pages
├── feed/                 # RSS Feed
├── pages/                # Standalone pages (about, links, tags, 404, etc.)
├── script/               # Helper scripts
├── theme/                # Theme assets (Logo, etc.)
├── update/               # Changelog page
├── CNAME                 # Custom domain
├── Gemfile               # Dependency declaration (jekyll / webrick / jemoji / jekyll-paginate)
├── Hydrogen-blog.gemspec # Theme packaging (usable as a Gem)
└── LICENSE               # MIT License
```

## 🤝 Contributing

Feel free to open [Issues](https://github.com/link9596/jekyll-theme-Hydrogen/issues) for bugs and suggestions, and pull requests are always welcome.

## 📄 License

This project is open source under the [MIT License](LICENSE).

## 🙏 A Final Note

Please take 10 minutes to **carefully** read the documentation. If anything is still unclear, open an [Issue](https://github.com/link9596/jekyll-theme-Hydrogen/issues) and I'll do my best to help. Any tricky bugs you encounter are also welcome as Issues.

Last but not least — if you like it, please give the project a Star ⭐!
