# CLAUDE.md — DuneBroom Website

## Project Overview
DuneBroom is a Next.js website for an autonomous beach-cleaning robot project. Live at [dunebroom.com](https://dunebroom.com).

## Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Inline styles with CSS variables + Tailwind CSS v4
- **Font:** Inter (Google Fonts)
- **Theme:** Light/dark mode via `ThemeProvider` (toggles `html.dark` class)
- **Form:** Formspree endpoint for contact submissions

## Commands
- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — ESLint

## Project Structure
```
app/
├── layout.tsx              # Root layout (Navbar + Footer + ThemeProvider)
├── globals.css             # CSS variables, Tailwind import, custom classes
├── page.tsx                # Homepage (hero + overview + outreach section + recognition)
├── system-logic/page.tsx   # System Logic detail page
├── technical-architecture/page.tsx  # Technical Architecture detail page
├── outreach/page.tsx       # Outreach & Impact (grassroots education, book, art competition)
├── about_us/page.tsx       # About Us detail page
├── contact/page.tsx        # Contact form (Formspree) + social links
components/
├── Navbar.tsx              # Sticky nav, mobile hamburger drawer
├── Footer.tsx              # Site footer
├── ThemeProvider.tsx        # Dark/light theme context
├── PrivacyPolicy.tsx       # Privacy policy component (unused)
```

## Styling Conventions
- Most pages use **inline styles** with `var()` CSS variables for theme support
- Contact page uses **Tailwind utility classes** + custom `.card` / `.form-input` classes defined in `globals.css`
- CSS variables defined in `:root` (light) and `html.dark` (dark) in `globals.css`
- Key variables: `--background`, `--foreground`, `--muted`, `--subtle`, `--border`, `--surface`, `--accent`, `--card-bg`

## Routes
| Route | Page |
|-------|------|
| `/` | Homepage (hero, overview, explore cards) |
| `/system-logic` | System Logic |
| `/technical-architecture` | Technical Architecture |
| `/outreach` | Outreach & Impact (grassroots education + drawing competitions, Adventures of Sunbeam, Earth Day Art Competition) |
| `/about_us` | About Us |
| `/contact` | Contact form + info |

## Important Notes
- `globals.css`: Google Fonts `@import` must come **before** `@import "tailwindcss"` (CSS spec requirement)
- Homepage (`app/page.tsx`) is a client component (uses `onMouseEnter`/`onMouseLeave` hover effects)
- Contact form submits to `https://formspree.io/f/xnnvbrzq`
- Nav links are defined in `components/Navbar.tsx` — update the `navLinks` array when adding/removing pages
- Outreach images live in `/public/outreach/` — placeholder boxes are in the UI until real photos are added. Current expected files: `schools-outreach.jpg`, `drawing-competition.jpg`

## Post-Edit Instructions
Whenever you make major changes to the codebase — adding/removing pages, changing routes, modifying the tech stack, altering styling conventions, or restructuring files — you MUST update this CLAUDE.md to reflect the current state. This includes updating the project structure, routes table, styling conventions, and any other affected sections.
