# AGENTS.md - React PWA Template

This file provides essential information for AI coding agents working on this project.

## Project Overview

This is a **React.js Progressive Web App (PWA) Template** built with Vite. It provides a minimal, modern setup for building installable web applications with offline support, using React 19 and modern tooling.

The project fetches and displays data from the [xkcd](https://xkcd.com/) API as a demo feature.

## Technology Stack

| Category      | Technology           | Version |
| ------------- | -------------------- | ------- |
| Framework     | React                | 19.x    |
| Build Tool    | Vite                 | 7.x     |
| Styling       | Tailwind CSS         | 4.x     |
| UI Components | DaisyUI              | 5.x     |
| Data Fetching | TanStack React Query | 5.x     |
| HTTP Client   | Axios                | 1.7.x   |
| Analytics     | React GA4            | 2.x     |
| PWA           | vite-plugin-pwa      | 1.x     |

## Project Structure

```
.
├── public/                 # Static assets (PWA icons, favicon, etc.)
├── src/
│   ├── api/               # API client functions
│   │   └── demoApi.js     # xkcd API integration
│   ├── components/        # React components
│   │   └── AppContent.jsx # Main content component with data fetching
│   ├── utils/             # Utility functions
│   │   ├── ErrorBoundary.jsx    # React error boundary with GA reporting
│   │   └── errorTracking.js     # Global error tracking setup
│   ├── App.jsx            # Root App component
│   ├── main.jsx           # Application entry point
│   ├── App.css            # App-specific styles (currently empty)
│   └── index.css          # Global styles (Tailwind import)
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration with PWA setup
├── tailwind.config.js     # Tailwind CSS configuration
├── eslint.config.js       # ESLint configuration
└── package.json           # Dependencies and scripts
```

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Generate PWA assets (icons, manifest)
# First update public/logo.svg, then run:
npm run generate-pwa-assets
```

## Key Configuration Details

### Vite Configuration (`vite.config.js`)

- **Dev Server Proxy**: `/api/*` routes are proxied to `https://xkcd.com/`
- **PWA Plugin**: Configured with app manifest, icons, and service worker
- **SWC Plugin**: Used for fast React compilation
- **Tailwind Plugin**: Integrated for CSS processing

### Environment Variables

The project uses `.env.local` for local environment variables:

| Variable                 | Description                       |
| ------------------------ | --------------------------------- |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID |

### Tailwind CSS

- Uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax
- DaisyUI v5 plugin enabled for pre-built components
- Configuration in `tailwind.config.js`

## Code Style Guidelines

### File Organization

- Use `.jsx` extension for React components
- ES modules only (`"type": "module"` in package.json)
- Components use PascalCase filenames
- Utilities use camelCase filenames

### React Patterns

- Functional components with hooks (no class components except ErrorBoundary)
- Use React Query for all server state management
- Wrap components with ErrorBoundary for error isolation
- Props validation: PropTypes are disabled (configured in ESLint)

### Styling Conventions

- Use Tailwind CSS utility classes
- DaisyUI classes available for common UI patterns
- Component-scoped styles go in `App.css` or co-located CSS modules

### API Layer

- All API calls centralized in `src/api/`
- Use Axios for HTTP requests
- React Query hooks for data fetching in components

## Testing

**Note**: No testing framework is currently configured. Consider adding:

- Vitest for unit testing (aligns with Vite)
- React Testing Library for component tests
- Playwright or Cypress for E2E tests

## PWA Assets

PWA icons and manifests are in `public/`:

- `logo.svg` - Source file for generating icons
- `favicon.ico`, `apple-touch-icon-180x180.png`, `maskable-icon-512x512.png`
- `pwa-192x192.png`, `pwa-512x512.png`, `pwa-64x64.png`

To regenerate: Update `public/logo.svg` and run `npm run generate-pwa-assets`.

## Deployment Notes

- Production build outputs to `dist/` (gitignored)
- `_redirects` file in `public/` configures Netlify-style redirects
- API proxy is for dev only; production requires CORS or server-side proxy

## Dependency Management

Renovate is configured (`.github/renovate.json`) with:

- Daily update checks
- Auto-merge for minor and patch updates
- Dependency dashboard enabled

## Security Considerations

1. **Google Analytics**: GA4 is initialized with measurement ID from env variable
2. **Error Tracking**: All errors are reported to GA4 via ErrorBoundary and global handlers
3. **CORS**: Dev proxy bypasses CORS; production deployment needs proper handling
4. **No sensitive data should be committed** - use `.env.local` (already gitignored)

## Common Tasks

### Adding a New API Endpoint

1. Add function to `src/api/demoApi.js` or create new file in `src/api/`
2. Use React Query's `useQuery` or `useMutation` in components
3. Follow existing patterns for error handling

### Adding a New Component

1. Create file in `src/components/ComponentName.jsx`
2. Use functional component pattern
3. Import and use in parent component
4. Wrap with ErrorBoundary if it has async operations

### Adding Environment Variables

1. Add to `.env.local` with `VITE_` prefix (required for Vite exposure)
2. Access via `import.meta.env.VITE_VARIABLE_NAME`
