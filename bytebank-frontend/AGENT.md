# Frontend Agent Guidelines

## Scope

You are responsible for the **ByteBank Frontend** (`bytebank-frontend/`), a React + TypeScript + Tailwind CSS landing page.

**Your Responsibilities:**
- Build and maintain the landing page
- Create new pages and components
- Integrate with backend APIs
- Optimize for performance and SEO
- Maintain responsive design
- Handle styling and UI/UX

**Never:**
- Modify backend code
- Change backend configuration
- Create API endpoints (let backend agent handle)
- Modify database models

---

## Project Structure

```
app/
├── src/
│   ├── components/
│   │   ├── landing/       # Landing page sections
│   │   ├── Layout.tsx     # Main layout wrapper
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Landing.tsx    # Landing page root
│   ├── App.tsx            # Router and main app
│   ├── main.tsx           # React entry
│   └── index.css          # Tailwind + base
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .gitignore
```

---

## Design System

**Color Palette:**
- **Background**: `bg-slate-950` (primary), `bg-slate-900` (secondary)
- **Primary Action**: `bg-blue-600 hover:bg-blue-500`
- **Borders**: `border-slate-800`
- **Text**: `text-white` (headings), `text-slate-300` (body), `text-slate-400` (secondary)
- **Accent**: `bg-blue-500/10`, `border-blue-500/30`, `text-blue-400`

**Typography:**
- Headings: Bold, large sizes (h1: `text-6xl`, h2: `text-4xl`, h3: `text-xl`)
- Body: `text-slate-300`
- Secondary: `text-slate-400`

**Spacing:**
- Sections: `py-20 sm:py-32`
- Content padding: `px-4 sm:px-6 lg:px-8`
- Max width: `max-w-7xl`

**Components:**
- Cards: `rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900 p-8`
- Buttons: `px-8 py-4 rounded-lg font-semibold transition-colors`
- Forms: Use native inputs with Tailwind styling

---

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes**: Edit components in `src/`
3. **Test locally**: Browser automatically reloads
4. **Type check**: TypeScript runs automatically
5. **Build**: `npm run build` when ready

---

## Landing Page Sections

### Hero
- Grid background
- Badge with status
- Headline and subheading
- Dual CTAs
- Stats section

### Features
- 6 feature cards in grid
- Icon, title, description
- Hover effects

### How It Works
- 4-step flow
- Visual indicators
- Code example

### Benefits
- 5 checkmark benefits
- Left/right layout
- Visual placeholder

### Pricing
- 3 pricing tiers
- Feature lists
- "Most Popular" badge

### CTA
- Final conversion section
- Headline and subheading
- Dual CTAs

---

## Common Tasks

### Add a New Section

1. Create component in `src/components/landing/NewSection.tsx`
2. Import in `src/pages/Landing.tsx`
3. Add to component tree in Landing
4. Style with Tailwind, use existing design system

Example:
```tsx
export default function NewSection() {
  return (
    <section className="py-20 sm:py-32 bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Content */}
      </div>
    </section>
  )
}
```

### Update Colors

- Headings: Change `text-white` to new color
- Backgrounds: Change `bg-slate-*` classes
- Buttons: Update `bg-blue-*` classes
- Borders: Update `border-slate-*` or `border-blue-*`

Search and replace across components.

### Add New Routes

1. Create new page in `src/pages/`
2. Create components in `src/components/`
3. Import in `src/App.tsx`
4. Add route: `<Route path="/new" element={<NewPage />} />`
5. Update navbar navigation if needed

### Connect API

Example:
```tsx
const handleSignup = async () => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
  const data = await response.json()
  // Handle response
}
```

---

## Performance

- **Dev server**: Hot reload with Vite (< 100ms)
- **Build time**: < 1s for development, optimized for production
- **Bundle**: 277 KB total, 85 KB gzipped
- **Images**: Use emoji or SVG, optimize large images
- **Fonts**: System fonts only (no external font downloads)

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers

Always test responsive design on small screens.

---

## Accessibility

- Use semantic HTML (`<button>`, `<a>`, `<h1>`, etc.)
- Color contrast: WCAG AA minimum
- Alt text for images
- Keyboard navigation for buttons
- Focus states visible

---

## Git and Deployment

- Always work on a feature branch
- Commit frequently with clear messages
- Push to remote when ready
- CI/CD runs TypeScript check and build
- Deploy from `dist/` directory

---

## Important

- Keep landing page focused on core message
- Don't add unnecessary complexity
- Test on mobile devices
- Maintain fast load times
- Use CSS-only animations (no JS animations unless critical)

**The frontend must be fast, clean, and conversion-focused.**
