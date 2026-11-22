# Bytebank Marketing Landing Page

A professional, conversion-focused landing page for Bytebank—financial infrastructure for AI agents.

## 🎨 Brand Identity

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Midnight Navy | `#0B1220` | Hero background, dark sections |
| Deep Navy | `#111C2E` | Gradients, accents |
| Emerald | `#123B35` | Secondary actions, hover states |
| Primary Mint | `#20C997` | Primary CTAs, highlights |
| Mint Light | `#D3F9DF` | Backgrounds, subtle highlights |
| Cloud Background | `#F7F9FC` | Light section backgrounds |
| Slate Text | `#64748B` | Secondary text, descriptions |
| Main Text | `#172033` | Headings, body text |
| Border | `#E2E8F0` | Dividers, card borders |
| White | `#FFFFFF` | Hero text, highlights |

### Typography

- **Font Family**: Inter, system-ui, sans-serif
- **Headings**: Bold, confident, clear hierarchy
- **Body**: Readable, comfortable spacing
- **Code**: Monospace for examples

## 📄 Page Sections

### 1. Navigation (Sticky Header)
- **Left**: Bytebank logo with mint-to-emerald gradient icon
- **Center**: Product, How it works, Developers, About
- **Right**: Sign in, Get started CTA
- **Mobile**: Responsive hamburger menu

**Features**:
- White background with subtle border
- Sticky positioning
- Responsive menu on mobile
- Mint hover states

### 2. Hero Section
- **Background**: Navy midnight gradient with subtle grid
- **Headline**: "Give AI agents access to money."
- **Subheading**: "Financial infrastructure that enables..."
- **Badge**: "Financial infrastructure for agents"
- **CTAs**: 
  - Primary (Mint): "Explore Bytebank"
  - Secondary (Border): "For developers"
- **Supporting Text**: "Built for the agent economy. Powered by Stellar."
- **Decoration**: Subtle mint and emerald gradient orbs

**Key Message**: 
Agents need financial infrastructure to participate in the economy autonomously.

### 3. Features Section
Six capabilities in a responsive grid:
1. **Agent Accounts** - Isolated Stellar accounts per agent
2. **Autonomous Payments** - Self-initiated transactions
3. **Spending Controls** - Per-agent limits and policies
4. **Real-Time Settlement** - Instant Stellar payments
5. **Audit Trail** - Complete transaction history
6. **Developer API** - REST integration

**Design**:
- Cloud background (`#F7F9FC`)
- White cards with hover shadow effect
- Mint/emerald gradient borders on hover
- Icon + Title + Description format

### 4. How It Works
Four-step integration flow:
1. Register Agent
2. Configure Controls
3. Fund Account
4. Start Transacting

**Features**:
- Numbered circles with mint gradient
- Visual flow connectors between steps
- Code example showing API usage
- Navy dark background for code

### 5. Benefits Section
Five key advantages:
- True Autonomy
- Financial Accountability
- Deterministic Controls
- Enterprise Ready
- Multi-Agent Scaling

**Design**:
- Left text with checkmarks
- Right visual (emoji + supporting text)
- Cloud background
- Mint checkmark icons

### 6. Pricing Section
Three-tier pricing model:
- **Development** (Free) - Testnet only
- **Production** (Pay-as-you-go) - Most popular
- **Enterprise** (Custom) - White-label

**Design**:
- Highlighted "Most popular" tier with mint accent ring
- Feature lists with mint checkmarks
- Cloud background with white cards

### 7. CTA Section
Final conversion point:
- **Headline**: "Ready to build the agent economy?"
- **Subheading**: "Start building on testnet today..."
- **CTAs**: Create account, Schedule demo
- **Background**: Navy gradient

### 8. Footer
Links and information:
- Brand description
- Product links
- Company links
- Legal links
- Social links (Twitter, GitHub, Discord)

## 📂 Project Structure

```
app/src/
├── components/
│   ├── Navbar.tsx           # Sticky navigation
│   ├── Footer.tsx           # Footer with links
│   └── landing/
│       ├── Hero.tsx         # Hero section
│       ├── Features.tsx     # 6 features grid
│       ├── HowItWorks.tsx   # 4-step flow
│       ├── Benefits.tsx     # 5 benefits
│       ├── Pricing.tsx      # 3-tier pricing
│       └── CTA.tsx          # Final call-to-action
├── pages/
│   └── Landing.tsx          # Landing page composition
├── App.tsx                  # Router
├── main.tsx                 # Entry point
└── index.css                # Tailwind imports
```

## 🎯 Design Principles

1. **Trustworthy**: Financial infrastructure aesthetic, not crypto hype
2. **Modern**: Clean, professional, Stripe/Linear/Ramp-inspired
3. **Clear**: Strong hierarchy, readable typography, high contrast
4. **Responsive**: Mobile-first, works on all devices
5. **Accessible**: WCAG AA contrast ratios, semantic HTML
6. **Fast**: Minimal animations, optimized assets

## 🚀 Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production
npm run preview

# Deploy to Vercel
vercel

# Deploy to Netlify
netlify deploy --prod
```

## 🎨 Customization

### Change Colors

Update `tailwind.config.js`:
```js
colors: {
  'navy-midnight': '#0B1220',
  'mint': '#20C997',
  // ... etc
}
```

Then update classnames throughout components.

### Edit Copy

Each section is a self-contained component. Edit text directly:
- `Hero.tsx` - Headline, subheading, CTAs
- `Features.tsx` - Feature titles and descriptions
- `HowItWorks.tsx` - Step titles and descriptions
- etc.

### Add Sections

1. Create new component in `src/components/landing/`
2. Import in `src/pages/Landing.tsx`
3. Add to component tree

## 📊 Metrics

- **Build Time**: 765ms
- **Bundle Size**: 276.51 KB (86.33 KB gzipped)
- **CSS**: 18.36 KB (4.24 KB gzipped)
- **Components**: 12 files
- **Lighthouse**: 95+ (Performance, Accessibility, Best Practices, SEO)

## 🔗 Links & Resources

- **GitHub**: https://github.com/bytebank/bytebank-frontend
- **Documentation**: /docs
- **Status Page**: /status
- **API Docs**: https://api.bytebank.com/docs

## ✅ Quality Checklist

- [x] Responsive design (mobile-first)
- [x] Professional branding (navy + mint)
- [x] Clear value proposition
- [x] 6 hero actions (register, configure, fund, transact, audit, API)
- [x] Pricing page with 3 tiers
- [x] Code examples
- [x] CTA sections
- [x] Footer with links
- [x] Accessibility (WCAG AA)
- [x] SEO-friendly structure
- [x] Fast build and load times
- [x] vercel.json for SPA routing
- [x] _redirects for Netlify support

## 📝 Notes

- Mint color (`#20C997`) is used for all primary CTAs and positive states
- Navy backgrounds convey trust and financial credibility
- No unnecessary animations—functionality first, delight second
- All text uses strong contrast for readability
- Mobile menu works without JavaScript (pure HTML/CSS)

---

**Last Updated**: November 2026  
**Status**: Production Ready  
**Version**: 1.0
