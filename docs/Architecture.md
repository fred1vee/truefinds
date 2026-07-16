# TrueFinds Architecture

## Purpose

This document defines the target frontend architecture for the TrueFinds MVP and its approved future expansion. It is an implementation guide, not a declaration that every described directory or integration already exists.

The architecture supports the documented product areas:

- Home
- Spreadsheet
- Tools
- Favorites
- Tutorial
- Profile
- Admin Panel

It must preserve a premium, minimal, mobile-first experience in Azerbaijani, Russian, and English while remaining ready for a future production backend.

## 1. Folder Architecture

TrueFinds uses the Next.js App Router and organizes code by route, feature, and reuse boundary.

```text
.
├── app/
│   ├── [locale]/
│   │   ├── (platform)/
│   │   │   ├── favorites/
│   │   │   ├── profile/
│   │   │   ├── spreadsheet/
│   │   │   ├── tools/
│   │   │   ├── tutorial/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── admin/
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── layout/
│   ├── shared/
│   └── ui/
├── features/
│   ├── admin/
│   ├── favorites/
│   ├── home/
│   ├── profile/
│   ├── spreadsheet/
│   ├── tools/
│   └── tutorial/
├── hooks/
├── i18n/
├── lib/
│   ├── data/
│   ├── validation/
│   └── utils/
├── public/
├── types/
└── docs/
```

Directories should be introduced only when required by implemented scope. Empty placeholder folders must not be created.

Folder responsibilities:

- `app/` owns routing, route layouts, metadata, loading states, error boundaries, and page composition.
- `features/` owns domain-specific presentation, logic, types, and data access contracts.
- `components/ui/` contains low-level reusable interface primitives.
- `components/shared/` contains reusable product-aware components used by multiple features.
- `components/layout/` contains application shell components such as navigation and page structure.
- `hooks/` contains genuinely cross-feature React hooks.
- `i18n/` contains locale configuration, translation loading, and shared language utilities.
- `lib/` contains framework-independent utilities, validation, and data-access infrastructure.
- `types/` contains shared types only; feature-specific types remain within their feature.
- `public/` contains optimized static assets that do not require module imports.
- `docs/` contains approved technical documentation.

## 2. Component Architecture

Components follow a layered model:

```text
Route page
  → Feature composition
    → Shared product components
      → UI primitives
```

### Route components

Route files should remain thin. They coordinate route parameters, metadata, server-side data loading, and feature composition. Business rules and substantial UI structures must not live in `page.tsx` or `layout.tsx`.

### Feature components

Feature components implement one documented product area. They may use shared components and UI primitives but must not import internals from another feature.

### Shared product components

Components such as navigation, language switching, product cards, tool cards, statistic cards, empty states, and section layouts belong in `components/shared/` when they serve more than one feature.

### UI primitives

Buttons, inputs, cards, modals, badges, and similar primitives belong in `components/ui/`. They must be reusable, accessible, typed, and visually consistent. Variants should be explicit rather than duplicated through one-off class strings.

Server Components are the default. Client Components are used only when browser APIs, event handling, local interactive state, or animation libraries require them. The `"use client"` boundary should be placed as low in the component tree as practical.

## 3. Feature Architecture

Each feature is independently organized and exposes a small public API.

```text
features/<feature>/
├── components/
├── data/
├── hooks/
├── schemas/
├── types/
├── utils/
└── index.ts
```

Only required folders should be added. A feature with one component does not need the complete structure.

Feature boundaries correspond only to approved areas: `home`, `spreadsheet`, `tools`, `favorites`, `tutorial`, `profile`, and `admin`.

Rules:

- Feature-specific code stays inside its feature.
- A feature exports supported entry points through its root `index.ts`.
- Internal feature files are not imported directly from outside the feature.
- Code shared by two or more features moves to an appropriate shared layer only when its behavior is genuinely generic.
- Features must not depend on route folder internals.
- Circular dependencies between features or shared layers are prohibited.
- Admin code remains isolated so it does not unnecessarily increase the public application bundle.

## 4. Routing Architecture

Routes use the Next.js App Router.

```text
/:locale                         Home
/:locale/spreadsheet             Spreadsheet
/:locale/tools                   Tools
/:locale/favorites               Favorites
/:locale/tutorial                Tutorial
/:locale/profile                 Profile
/:locale/admin                   Admin Panel
```

`locale` represents the approved Azerbaijani, Russian, and English interfaces. Locale validation and translation loading occur at the locale layout boundary. The language switcher must remain visible in the application interface and preserve the current destination when changing languages where possible.

The `(platform)` route group may share the public application shell without affecting URLs. The Admin Panel uses a separate route boundary so its layout and future access controls can evolve independently. Access-control behavior must be defined by approved backend requirements before implementation.

Each route should provide appropriate metadata and, when needed, colocated `loading.tsx`, `error.tsx`, and `not-found.tsx` boundaries. Route-level code splitting should be preserved, especially for animation-heavy or admin functionality.

## 5. State Management Strategy

State should live at the narrowest appropriate scope.

1. **Server state:** Data originating from a future backend is loaded in Server Components or server-side data modules. It must not be duplicated into global client state without a concrete interaction requirement.
2. **URL state:** Shareable navigation state, such as a selected locale or route-relevant view state, belongs in path segments or search parameters.
3. **Local component state:** Temporary interaction state belongs in the component that owns the interaction.
4. **Form state:** React Hook Form and Zod are used for complex form state and validation when forms are introduced.
5. **Cross-tree UI state:** React Context is reserved for stable, low-frequency concerns that must cross component boundaries.

No additional global state library should be introduced until an implemented requirement demonstrates that React, the URL, and server-side data ownership are insufficient. Derived state should be computed rather than stored, and duplicated sources of truth must be avoided.

## 6. Data Flow

The preferred data flow is unidirectional:

```text
External source
  → Server-only data adapter
    → Validation and domain mapping
      → Server Component or route handler
        → Typed component props
          → User interaction
            → Validated server mutation
              → Cache revalidation and refreshed UI
```

Until the production backend is approved and implemented, feature data must be accessed behind typed interfaces so presentation components do not depend on temporary storage details.

Data-flow rules:

- Validate untrusted input at the server boundary.
- Convert database or storage records into domain types before rendering.
- Keep secrets and privileged operations in server-only modules.
- Pass the minimum serializable data required into Client Components.
- Use explicit loading, empty, error, and success states.
- Centralize cache and revalidation decisions in the data layer rather than individual visual components.
- Keep animations and visual state independent from persisted domain data.

## 7. Naming Conventions

- Use `PascalCase` for React components and exported TypeScript types.
- Use `camelCase` for variables, functions, hooks, and object properties.
- Prefix hooks with `use`.
- Use `kebab-case` for route segments and general-purpose file names.
- Use descriptive component file names that match the component they export.
- Use `*.schema.ts` for validation schemas, `*.types.ts` for grouped types, and `*.test.ts` or `*.test.tsx` for tests when introduced.
- Use plural names for collections and singular names for individual entities.
- Name handlers by intent, such as `handleLanguageChange`, rather than by implementation detail.
- Avoid abbreviations unless they are established project terminology.
- Boolean names should communicate a condition, such as `isLoading`, `hasError`, or `canEdit`.

## 8. Import Rules

Use the `@/` alias for imports across top-level project directories. Use relative imports only within the same small module or feature subtree.

Dependency direction:

```text
app
  → features
    → components/shared
      → components/ui
        → lib
```

Additional rules:

- Shared layers must not import from `app/` or feature internals.
- Features must not import from other features' internal files.
- Client modules must not import server-only data access.
- Type-only dependencies should use `import type`.
- Public feature exports should be imported through the feature entry point.
- Avoid broad barrel files for unrelated modules because they obscure dependencies and can increase bundle size.
- Dynamic imports should be considered for large, non-critical client-only modules.
- Import ordering should remain consistent: framework and packages, project aliases, then relative imports.

## 9. Shared Components Strategy

A component becomes shared when it has a stable responsibility and is required by more than one feature, or when it is a foundational design-system primitive.

Shared components must:

- have a focused, typed API;
- support composition instead of feature-specific conditionals;
- use Tailwind CSS without inline styles;
- follow accessible interaction patterns;
- expose intentional visual variants;
- preserve consistent spacing, radii, typography, and motion;
- avoid direct data fetching and feature-specific business rules;
- optimize images and client-side rendering;
- remain usable across mobile and larger viewports.

Premature abstraction should be avoided. Similar-looking components should remain feature-local until their behavior and API are demonstrably shared.

## 10. Future Backend Integration

The approved future infrastructure is Neon PostgreSQL for relational data and Cloudflare R2 for object storage. These services must be integrated behind server-only adapters.

```text
Feature
  → Repository interface
    → Server-side service
      ├── Neon PostgreSQL adapter
      └── Cloudflare R2 adapter
```

Integration principles:

- UI components never communicate directly with the database or object storage.
- Database queries, storage operations, credentials, and privileged logic remain server-only.
- Repository interfaces isolate feature logic from infrastructure vendors.
- Input and output are validated at system boundaries.
- Schema changes use a controlled migration process once the backend technology is implemented.
- R2 stores binary assets; persistent relational metadata belongs in PostgreSQL.
- Server Actions or Route Handlers may expose approved operations, with the choice based on the consuming interface.
- Future authorization, analytics, and AI capabilities must be added through explicit service boundaries after their requirements are approved.
- Environment-specific configuration is read through a validated server-side configuration module.

## 11. Scalability Strategy

TrueFinds scales through clear boundaries rather than speculative infrastructure.

- **Feature isolation:** Product areas can evolve without coupling unrelated screens.
- **Server-first rendering:** Minimize client JavaScript and preserve fast initial rendering.
- **Route-level splitting:** Keep public, feature-specific, and admin bundles independent.
- **Stable shared layers:** Centralize durable UI and utility behavior without creating a monolithic component library.
- **Typed contracts:** Keep data sources replaceable and catch integration errors during development.
- **Backend adapters:** Allow Neon PostgreSQL and Cloudflare R2 to evolve without leaking infrastructure details into the UI.
- **Internationalization boundary:** Keep locale validation and translation loading centralized while allowing feature-owned translation content.
- **Performance ownership:** Optimize images, rendering, bundle size, and animations as part of each feature's acceptance criteria.
- **Incremental adoption:** Add caching, global state, analytics, AI services, and advanced admin capabilities only alongside approved requirements.
- **Quality gates:** Require linting, production builds, diff review, and focused code review before deployment.

Changes to these architectural boundaries require documentation and approval before implementation.
