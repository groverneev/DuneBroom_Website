# DuneBroom — Autonomous Beach-Cleaning Robot

Welcome to the codebase for **[dunebroom.com](https://dunebroom.com)** — the digital home for **DuneBroom**, a student-led robotics initiative using autonomous edge-AI to clean beaches.

---

## About DuneBroom

DuneBroom is a youth-driven robotics project dedicated to combating beach pollution through **autonomous robots powered by edge AI**. We design, build, and prototype machines that help protect our beaches and environment while inspiring the next generation of innovators.

---

## About Me

**[Neev Grover](https://neevgrover.com)** is a Sophomore at the Harker School passionate about Computer Science, Chess, and Music. He enjoys building projects, playing competitive chess, and writing about technology on his **[blog](https://techunpacked.substack.com)**.

---

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** + inline styles with CSS variables
- **Formspree** for contact form submissions

## Getting Started

```bash
npm install
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Website Structure

```
app/
├── layout.tsx                       # Root layout (Navbar, Footer, ThemeProvider)
├── globals.css                      # CSS variables, Tailwind, custom classes
├── page.tsx                         # Homepage (hero, overview, nav cards)
├── system-logic/page.tsx            # System Logic
├── technical-architecture/page.tsx  # Technical Architecture
├── about_us/page.tsx                # About Us
├── contact/page.tsx                 # Contact form + social links
components/
├── Navbar.tsx                       # Sticky navbar + mobile drawer
├── Footer.tsx                       # Site footer
├── ThemeProvider.tsx                 # Dark/light theme context
public/                              # Static assets (images, icons)
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero section, project overview, explore cards |
| `/system-logic` | How DuneBroom detects, navigates, and collects debris |
| `/technical-architecture` | Hardware design, sensors, and software stack |
| `/about_us` | The team behind DuneBroom |
| `/contact` | Contact form and social links |
