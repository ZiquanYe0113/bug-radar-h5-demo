# GitHub Pages 部署说明

这个项目是纯静态 H5，可以直接用 GitHub Pages 从 `main` 分支根目录部署。

## 1. 创建 GitHub 仓库

在 GitHub 新建一个仓库，例如：

```text
bug-radar-h5-demo
```

建议先设为 Private，确认没有敏感资料后再决定是否 Public。

## 2. 添加远程仓库

在本项目目录执行：

```bash
git remote add origin https://github.com/<your-account>/bug-radar-h5-demo.git
```

如果 remote 已存在，则改用：

```bash
git remote set-url origin https://github.com/<your-account>/bug-radar-h5-demo.git
```

## 3. 推送 main 分支

```bash
git push -u origin main
```

## 4. 开启 GitHub Pages

进入 GitHub 仓库：

```text
Settings -> Pages
```

选择：

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

保存后等待 1-2 分钟，GitHub 会生成访问地址：

```text
https://<your-account>.github.io/bug-radar-h5-demo/
```

## 5. 部署文件说明

GitHub Pages 需要这些文件：

- `index.html`
- `styles.css`
- `app.js`
- `assets/`
- `.nojekyll`

说明文档：

- `README.md`
- `DEMO_SCRIPT.md`
- `DEPLOY_GITHUB_PAGES.md`

原始 PRD、知识库和 Excel 文件可以保留在仓库里作为项目资料；如果仓库要公开，建议先确认这些文件是否适合公开。
