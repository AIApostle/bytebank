# Quick Start Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation & Setup

```bash
cd /home/ai-apostle/Projects/bytebank/bytebank-frontend/app
npm install
```

## Development

```bash
npm run dev
```

Opens at: `http://localhost:5173`

The browser will automatically reload when you make changes.

## Build for Production

```bash
npm run build
```

Output: `dist/` directory ready for deployment.

## Project Overview

**ByteBank Landing Page** - Financial infrastructure for AI agents

### What You Get

1. **Hero Section**
   - Eye-catching headline
   - Value proposition
   - Call-to-action buttons
   - Key statistics

2. **Features** (6 capabilities)
   - Agent Wallets
   - Programmable Payments
   - Spending Controls
   - Real-Time Settlement
   - Audit Trail
   - API-First

3. **How It Works**
   - 4-step integration flow
   - Code example
   - Visual progression

4. **Benefits**
   - 5 key advantages
   - Checkmarks for clarity
   - Visual element

5. **Pricing**
   - 3 tiers
   - Testnet (Free)
   - Production (Pay-as-you-go)
   - Enterprise (Custom)

6. **Call-to-Action**
   - Final conversion section
   - Dual buttons

## File Structure

```
src/
├── pages/Landing.tsx          # Landing page
├── components/
│   ├── Layout.tsx             # Page wrapper
│   ├── Navbar.tsx             # Top nav
│   ├── Footer.tsx             # Bottom footer
│   └── landing/               # Landing sections
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── Benefits.tsx
│       ├── Pricing.tsx
│       └── CTA.tsx
├── App.tsx                    # Main app & routing
├── main.tsx                   # Entry point
└── index.css                  # Styles
```

## Styling

Uses **Tailwind CSS** for all styling. No additional CSS files needed.

Key colors:
- **Dark background**: `bg-slate-950`, `bg-slate-900`
- **Primary CTA**: `bg-blue-600 hover:bg-blue-500`
- **Text**: `text-white`, `text-slate-300`, `text-slate-400`

## Customization

### Change Colors

Edit color classes in components:
```tsx
// Change from blue to purple
bg-blue-600 → bg-purple-600
text-blue-400 → text-purple-400
```

### Edit Content

Each section is a separate component. Edit text, links, and CTAs directly in files.

### Add New Sections

1. Create `src/components/landing/MySection.tsx`
2. Import in `src/pages/Landing.tsx`
3. Add to component list

Example:
```tsx
export default function MySection() {
  return (
    <section className="py-20 sm:py-32 bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Your content */}
      </div>
    </section>
  )
}
```

## Deployment

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Option 3: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### Option 4: Traditional Web Server

```bash
npm run build
# Upload contents of dist/ to your web server
```

## Environment Variables

Currently none required. If you add API calls, create `.env.local`:

```
VITE_API_URL=https://api.bytebank.com
```

Access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL
```

## Performance

- **Build time**: < 1 second
- **Bundle size**: 277 KB (85 KB gzipped)
- **First contentful paint**: < 1s
- **Time to interactive**: < 2s

## Next Steps

1. **Connect Backend**: Wire CTA buttons to API endpoints
2. **Add Forms**: Implement signup/contact forms
3. **Analytics**: Add Google Analytics or Plausible
4. **Domain**: Point domain to deployed site
5. **SSL**: Enable HTTPS

## Support

Refer to:
- `README.md` - Project overview
- `AGENT.md` - Developer guidelines
- Tailwind docs: https://tailwindcss.com
- React docs: https://react.dev
- Vite docs: https://vitejs.dev

## Troubleshooting

**Port 5173 already in use:**
```bash
npm run dev -- --port 3000
```

**TypeScript errors:**
```bash
npx tsc -b
```

**Clear cache:**
```bash
rm -rf node_modules dist
npm install
```

---

**Ready to go!** Questions? Check the README or AGENT.md files.
