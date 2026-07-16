# TrueFinds

TrueFinds is a premium educational and product discovery platform for users in Azerbaijan who want to learn how to source products from Pinduoduo and resell them successfully.

The project is currently in MVP development. Its planned product areas include Home, Spreadsheet, Tools, Favorites, Tutorial, Profile, and Admin Panel experiences, with support for Azerbaijani, Russian, and English.

## Vision

TrueFinds aims to become the best platform in Azerbaijan for learning product sourcing, discovering profitable products, understanding the buying process, and simplifying resale. The experience is designed to be premium, minimal, modern, fast, mobile-first, and easy to navigate.

## Tech Stack

- Next.js and React
- TypeScript
- Tailwind CSS
- Base UI and shadcn
- Framer Motion, GSAP, and Lenis
- ESLint
- Vercel for deployment
- GitHub for source control

Planned production infrastructure includes Neon PostgreSQL and Cloudflare R2.

## Repository Structure

```text
.
├── app/                  # Next.js App Router pages, layout, and global styles
├── components/
│   └── ui/               # Reusable UI components
├── lib/                  # Shared utilities
├── public/               # Static assets
├── AGENTS.md             # Engineering and design rules
├── PROJECT_CONTEXT.md    # Project scope and technical context
├── TRUEFINDS_PRD.md      # Approved product requirements
├── components.json       # UI component configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies and npm scripts
```

## Development Workflow

Before making changes:

1. Read `AGENTS.md`, `PROJECT_CONTEXT.md`, and `TRUEFINDS_PRD.md`.
2. Review the relevant existing code and preserve the approved architecture.
3. Implement focused, reusable, production-ready changes.
4. Run linting and a production build when appropriate.
5. Review the diff before opening a pull request.

Available checks:

```bash
npm run lint
npm run build
```

## Documentation Files

- `AGENTS.md` defines mandatory engineering, design, styling, performance, and Git rules.
- `PROJECT_CONTEXT.md` summarizes the product goal, audience, pages, technology choices, and current stage.
- `TRUEFINDS_PRD.md` is the source of truth for approved product requirements and roadmap.

Architecture and product requirements must not be changed without approval.

## Installation

Clone the repository and install the locked dependencies:

```bash
git clone git@github.com:fred1vee/truefinds.git
cd truefinds
npm ci
```

## Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To run the production build locally:

```bash
npm run build
npm run start
```

## Git Workflow

- Start work from the latest `main` branch.
- Use a focused branch for each change.
- Keep commits scoped and descriptive.
- Do not modify Git configuration, remove project files, or rename folders unless explicitly requested.
- Run the relevant checks and review the diff before submitting changes through GitHub.

## Deployment

TrueFinds is deployed with Vercel. Production deployments should use a successful `npm run build` and the approved project configuration. Any future database or object-storage integration must follow the documented architecture.

## Coding Principles

- Use TypeScript and functional React components.
- Build reusable components and avoid duplicated code.
- Keep files and responsibilities focused.
- Use Tailwind CSS; do not use inline styles.
- Maintain consistent spacing, rounded corners, and a premium minimal interface.
- Preserve mobile-first behavior and smooth animations.
- Optimize images, rendering, bundle size, and animation performance.
- Prioritize scalability, production readiness, and quality.

## Future Roadmap

The approved roadmap includes:

- Production backend
- Mobile optimization
- Advanced admin panel
- Analytics
- AI features
- Neon PostgreSQL database integration
- Cloudflare R2 storage integration
