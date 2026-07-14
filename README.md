# Pawan Kumar Tripathi — Portfolio

A professional portfolio website for Pawan Kumar Tripathi, a Steel Fixer with 5+ years of reinforcement construction experience across India and Israel.

**Live site:** https://[your-vercel-link].vercel.app

## About

This site showcases professional experience, core trade skills, and contact details for a construction/reinforcement steel fixer, presented with an industrial dark theme and smooth scroll animations.

## Tech Stack

- **React 18** + **TypeScript** — component structure and type safety
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — utility-first styling with a custom steel/safety-orange theme
- **Framer Motion** — scroll-triggered animations
- **Lucide React** — icon set
- **Vercel** — hosting and deployment

## Sections

- Hero — name, title, primary CTA
- Highlights — key stats (experience, countries, safety record)
- About — professional summary
- Experience — timeline of roles at Solel Boneh (Israel) and prior contractor work (India)
- Skills — core trade competencies
- Education — academic background
- Contact — phone, email, WhatsApp direct link

## Running Locally

\`\`\`bash
git clone https://github.com/vanruuu/Portfolio.git
cd Portfolio
npm install
npm run dev
\`\`\`

Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Building for Production

\`\`\`bash
npm run build
\`\`\`

Output goes to the `dist/` folder, ready for static hosting.

## Deployment

Deployed on [Vercel](https://vercel.com), auto-deploying on every push to `main`.

## Editing Content

All personal/professional information lives in a single file: `src/data/profile.ts`. Update name, experience, skills, or contact details there — no need to touch component files.

## License

Personal project. All rights reserved.