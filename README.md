# GEPCO Tools Hub

A React + Vite dashboard for launching multiple standalone HTML/JavaScript tools from one website.

## Requirements

- Node.js 18+ recommended
- VS Code or another code editor

## Install

Open a terminal in this folder:

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Vite will show a local URL, normally:

```text
http://localhost:5173/
```

## Add an existing HTML app

Suppose your existing app is called CP-99.

Create:

```text
public/apps/cp99/
```

Put the entire existing app inside it:

```text
public/apps/cp99/
├── index.html
├── script.js
├── style.css
└── any-other-files...
```

Then open:

```text
http://localhost:5173/apps/cp99/
```

## Add the card

Open:

```text
src/data/apps.js
```

Add:

```js
{
  id: "cp99",
  name: "CP-99 Generator",
  description: "Generate daily CP-99 cash memo documents.",
  category: "Revenue",
  icon: "🧾",
  path: "/apps/cp99/",
  tags: ["cp99", "cash memo", "revenue"]
}
```

The dashboard will automatically create the card.

## Build for hosting

```bash
npm run build
```

The production files will be generated in:

```text
dist/
```

## Important note about existing HTML apps

This project does NOT rewrite your existing apps. They remain standalone HTML/JS/CSS applications.

That means you can gradually improve or convert individual tools to React later without rebuilding the whole hub.

## Deployment

The project is configured with a relative Vite base (`./`) so that the generated site can be hosted in common static hosting environments.

For Netlify, Vercel, GitHub Pages, or another host, use:

Build command:

```text
npm run build
```

Publish/output directory:

```text
dist
```
