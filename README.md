# yourvajl Portfolio

A responsive portfolio for John Lloyd Laxamana, built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Cloudflare Pages

Connect this Git repository in the Cloudflare dashboard under **Workers & Pages** → **Create** → **Pages** → **Connect to Git**. Use these build settings:

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

No environment variables are required. Each push to the production branch will trigger a new deployment; pull requests can use Cloudflare preview deployments.

## Update portfolio content

- Projects, descriptions, and project samples: `src/data/projects.js`, `public/project-logos/`, and `public/project-samples/`
- Services: `src/data/services.js`
- Tools: `src/data/tools.js`
- Profile photo: `public/profile.jpg`
- Social links: `src/components/Sidebar.jsx`
- The contact section links to `yourva.jl@gmail.com`.
- The responsive `yourvajl` intro lives in `src/components/Intro.jsx` and `src/intro.css`.
