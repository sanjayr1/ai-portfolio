# AI Portfolio – Personal Website

> **Purpose** – A modern, content-driven portfolio & blog built with Next.js.  The site showcases projects, publishes MDX articles, and serves as a living demo of full-stack skills.

---

## ✨ Key Features

- **Next.js 15 App Router** with TypeScript for type-safe, high-performance pages
- **Contentlayer** for typed content from local MDX files
- **Tailwind CSS + shadcn/ui** component system (Radix primitives under the hood)
- **Blog & Projects** sections with automatic route generation
- **CI / CD** via GitHub Actions → Vercel (preview & production)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language  | TypeScript 5 |
| Styling   | Tailwind CSS 4 + shadcn/ui |
| CMS       | Contentlayer 0.3 (local MDX) |
| CI / CD   | GitHub Actions → Vercel |
| Tooling   | ESLint 9 • Prettier 3 • Husky 9 • pnpm 9 |

---

## ⚡ Quick Start

```bash
# 1. Clone repository (SSH or HTTPS)
$ git clone <your-fork-or-repo-url> ai-portfolio && cd ai-portfolio

# 2. Install dependencies (pnpm is recommended)
$ pnpm install

# 3. Start local dev server
$ pnpm run dev

# 4. Open http://localhost:3000
```

> **Node 20+ is required.** See `engines` field in `package.json`.

### Environment Variables

If you add API keys (e.g. OpenAI) create `.env.local`:

```
OPENAI_API_KEY=your_key
```

No secrets are committed; Vercel manages production variables in **Project Settings → Environment Variables**.

---

## 📜 Available Scripts

| Script | Purpose |
|--------|---------|
| `pnpm dev`   | Start Next.js in development mode |
| `pnpm build` | Build production assets |
| `pnpm start` | Start production server locally |
| `pnpm lint`  | Run ESLint + TypeScript rules |
| `pnpm format`| Format all supported files via Prettier |

---

## 📂 Project Structure (excerpt)

```
src/
  app/                # Next.js App Router pages
  components/         # Reusable & UI components (shadcn/ui based)
  content/            # Local MDX posts & project case studies
  lib/                # Utility & helper functions
public/               # Static assets (SVG, images)
.github/workflows/    # CI pipeline definitions
scripts/              # Taskmaster example PRD & utilities
```

---

## 🚀 Deployment (Vercel)

1. **Import Project** on Vercel, connect GitHub repo.
2. Build Command → `pnpm run build`
3. Output Dir → `.next`
4. Set environment variables as needed.
5. Push to `main` → production deploy.  Pull Request branches get preview URLs automatically.

---

## ✅ CI Status

![CI](https://github.com/<your-github-username>/ai-portfolio/actions/workflows/ci.yml/badge.svg)

The `CI` workflow lints, builds, and type-checks every commit.

---

## 📄 License

This project is licensed under the **MIT License**.  See [LICENSE](LICENSE) for details.

---

## 🙋‍♂️ Contributing

Contributions are welcome!  A full guide will live in **CONTRIBUTING.md**.  In the meantime:

1. Fork → feature branch (`feat/my-new-feature`).
2. Ensure `pnpm lint` & `pnpm build` pass locally.
3. Open a Pull Request with a clear description & screenshots/GIF if UI related.

Please abide by our forthcoming Code of Conduct.

---

## 📫 Contact

- Email: sanjayroberts1@gmail.com

Feel free to reach out for collaboration, consultancy, or just to say hi!

---

> _Generated with ❤️ & Taskmaster AI to assist future coding agents.  Happy hacking!_