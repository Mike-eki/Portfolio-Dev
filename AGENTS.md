# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```bash
# Install dependencies
pnpm install

# Start development server (localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run Astro CLI commands
pnpm astro <command>
```

### Testing
Currently, there are no automated tests in this project. The portfolio is tested manually through the development server.

## Architecture Overview

### Tech Stack
- **Framework**: Astro 5.x (Static Site Generator with Islands architecture)
- **Styling**: Tailwind CSS 3.x with custom configuration
- **Language**: TypeScript (strict mode)
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages (configured in `.github/workflows/deploy.yml`)

### Project Structure

```
src/
├── components/           # Reusable Astro components
│   ├── icons/           # SVG icon components (GitHub, Email, etc.)
│   ├── sections/        # Page sections (Hero, Projects, Contact)
│   ├── KeyboardGuide.astro   # Keyboard shortcuts banner
│   └── Navigation.astro      # Fixed top navigation
├── i18n/                # Internationalization
│   ├── en.ts           # English translations
│   ├── es.ts           # Spanish translations
│   └── i18n.ts         # i18n utilities and types
├── keyboard/            # Keyboard navigation system
│   ├── keyboardController.ts  # Navigation logic
│   └── focusMap.ts            # Section/focus type definitions
├── layouts/             # Page layouts
│   └── BaseLayout.astro       # Base HTML structure
├── pages/               # Routes (file-based routing)
│   ├── index.astro            # Main single-page portfolio
│   ├── en/index.astro         # Legacy English route (can be removed)
│   └── es/index.astro         # Legacy Spanish route (can be removed)
├── styles/              # Global styles
│   └── global.css             # Tailwind directives + custom CSS
└── utils/               # Utility modules
    └── languageSwitcher.ts    # Client-side language switching
```

## Key Architectural Decisions

### Single-Page Language Switching
The portfolio uses **client-side language switching** without page reloads:
- All translations are bundled in the initial page load
- `LanguageSwitcher` class handles DOM updates
- User preference saved in `localStorage`
- Keyboard shortcut (`L` key) for instant switching
- No separate routes needed for languages

**Why**: Better UX (instant switching), preserves scroll position, no network requests

### Keyboard Navigation System
Custom keyboard navigation for accessibility and power users:
- `↑`/`↓`: Navigate between sections
- `←`/`→`: Navigate between elements within a section
- `1-9`: Jump directly to numbered sections
- `L`: Toggle language
- `Enter`: Activate focused element

**Implementation**: 
- Controller in `src/keyboard/keyboardController.ts`
- Detects touch vs keyboard devices
- Respects user input contexts (doesn't interfere with form typing)

### Component Organization
Components are organized by function:
- **Icons**: Atomic SVG components with consistent props interface
- **Sections**: Self-contained page sections (Hero, Projects, Contact)
- **Utilities**: Shared components (Navigation, KeyboardGuide)

**Props Pattern**: Each component accepts i18n text objects, avoiding prop drilling

### Styling Approach
- Tailwind utility-first with custom design tokens
- Dark theme as primary (bg-slate-950, text-slate-50)
- Consistent color palette: Sky (accent), Slate (neutral)
- Focus states always visible (sky-300 ring)
- Responsive breakpoints: sm (640px), lg (1024px), xl (1280px)

## Important Implementation Details

### Focus Management
Project cards are focusable (`tabindex="0"`):
- Pressing `Enter` on a card focuses its first button
- Enables pure keyboard navigation through projects
- Visual focus ring (sky-400) for accessibility

### Navigation Active State
Uses Intersection Observer to track visible section:
- Updates nav link highlighting automatically
- Smooth scroll with nav height offset
- No manual scroll event listeners

### Modal System
Project details modal:
- Opens with `data-project-modal-open` buttons
- Closes with Escape key or backdrop click
- Returns focus to trigger element on close
- All case study data passed via data attributes

### Language Switcher Button
Located in navigation (top-right):
- Shows opposite language (EN when Spanish, ES when English)
- Updates ARIA label based on current language
- Works with both click and `L` keyboard shortcut

## Development Guidelines

### Adding New Icons
1. Create new `.astro` file in `src/components/icons/`
2. Use this template:
```astro
---
interface Props {
  class?: string;
}
const { class: className = "h-4 w-4" } = Astro.props;
---
<svg viewBox="0 0 24 24" aria-hidden="true" class={className}>
  <path fill="currentColor" d="..." />
</svg>
```

### Adding Translations
1. Add key to `src/i18n/en.ts`
2. Add same key to `src/i18n/es.ts`
3. Update `LanguageSwitcher` if it's a dynamic text element
4. Use in components: `{t.section.key}`

### Modifying Keyboard Navigation
- Edit `src/keyboard/keyboardController.ts`
- Update keyboard guide shortcuts in i18n files
- Test with both keyboard and touch devices

### Styling Conventions
- Use Tailwind utilities first
- Extract to components/styles only when repeated 3+ times
- Follow mobile-first responsive design
- Maintain dark theme consistency
- Always include focus-visible states

## Common Tasks

### Update Project Content
1. Edit `src/i18n/en.ts` and `src/i18n/es.ts`
2. Update `projects.cards` array
3. Add project images to `public/images/projects/`
4. Translations update automatically via `LanguageSwitcher`

### Add New Section
1. Create component in `src/components/sections/`
2. Add translations to i18n files
3. Import and add to `src/pages/index.astro`
4. Update navigation items in i18n
5. Add keyboard navigation support if needed

### Modify Color Scheme
1. Update Tailwind config in `tailwind.config.mjs`
2. Update global CSS in `src/styles/global.css`
3. Search and replace color classes in components
4. Test contrast ratios for accessibility

## Performance Considerations

- Astro builds to static HTML (no client-side hydration by default)
- Language switcher uses `define:vars` to inline translations
- Icons are inline SVG (no external requests)
- Images should be optimized before adding to `public/`
- Tailwind purges unused CSS in production

## Accessibility

- All interactive elements keyboard accessible
- Focus states always visible
- Semantic HTML throughout
- ARIA labels on icon-only buttons
- Smooth scroll respects `prefers-reduced-motion`
- Color contrast meets WCAG AA standards

## Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features
- CSS Grid and Flexbox
- Intersection Observer API
- LocalStorage API

## Deployment

Automatic deployment via GitHub Actions:
- Triggers on push to `main` branch
- Uses `withastro/action@v3`
- Deploys to GitHub Pages
- Site URL configured in `astro.config.mjs`

## Notes

- The `/en/` and `/es/` routes are legacy and can be removed
- `index-new.astro` was the prototype for current `index.astro`
- Focus map in `keyboard/focusMap.ts` is minimal (system uses dynamic queries)
- Experience section exists in components but not used in current pages
