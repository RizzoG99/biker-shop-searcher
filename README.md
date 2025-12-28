# Biker Shop Searcher

A searching engine that helps users find the perfect products for their biker life. Discover gear, build your outfit, and ride with confidence.

## Technology Stack

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context + useReducer
- **Component Variants**: [Class Variance Authority (CVA)](https://cva.style/)
- **Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- **Component Documentation**: [Storybook 8](https://storybook.js.org/)
- **Fonts**: Space Grotesk (display), Noto Sans (body)
- **Icons**: Material Symbols Outlined

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository (if you haven't already):
   ```bash
   git clone <repository-url>
   cd biker-shop-searcher
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run type-check` - Run TypeScript compiler to check types
- `npm test` - Run Vitest tests in watch mode
- `npm run test:run` - Run Vitest tests once
- `npm run test:ui` - Run Vitest with UI interface
- `npm run storybook` - Start Storybook component documentation
- `npm run build-storybook` - Build Storybook for production

## Features

### ✅ Phase 1: Foundation (Complete)
- [x] Project initialization with Next.js and TypeScript
- [x] Design system implementation with Tailwind CSS
- [x] Atomic design component architecture
- [x] Comprehensive testing infrastructure (Vitest + RTL)
- [x] Storybook component documentation
- [x] Static Outfit Builder mockup

### ✅ Phase 2: Interactive Outfit Builder (Complete)
- [x] Sophisticated filtering engine with weighted scoring algorithm
- [x] Interactive filter modal with draft state pattern
- [x] Real-time outfit generation across 3 budget tiers
- [x] State management with React Context + useReducer
- [x] 11 new components (5 atoms, 1 organism, FilterModal)
- [x] 274 comprehensive unit tests (271 passing, 3 skipped)
- [x] WCAG 2.2 Level AA accessibility compliance
- [x] Mobile-first responsive design
- [x] Performance optimizations (memoization, debouncing, lazy loading)
- [x] Complete Storybook documentation

### 🚧 Phase 3: Enhanced Features (Planned)
- [ ] URL state persistence (shareable filter URLs)
- [ ] Backend API integration
- [ ] Product database with real inventory
- [ ] User authentication and profiles
- [ ] Saved outfits and favorites
- [ ] Gear search with autocomplete
- [ ] Deals and recommendations engine
- [ ] My Garage (user's equipment collection)

## Project Structure

```
biker-shop-searcher/
├── app/                           # Next.js App Router directory
│   ├── outfit-builder/           # Outfit Builder feature page
│   │   └── page.tsx              # Interactive filtering with state management
│   ├── globals.css               # Global styles and Tailwind directives
│   ├── layout.tsx                # Root layout with fonts and metadata
│   └── page.tsx                  # Home page
├── components/                    # React components (Atomic Design)
│   ├── ui/
│   │   ├── atoms/                # 10 atomic components
│   │   │   ├── Badge/           # Status badges (certifications)
│   │   │   ├── Button/          # Primary/secondary/ghost buttons
│   │   │   ├── Checkbox/        # Checkbox with card variant
│   │   │   ├── Input/           # Text input with validation
│   │   │   ├── Modal/           # Dialog with focus trap & portal
│   │   │   ├── Radio/           # Radio with icon-card variant
│   │   │   ├── RangeSlider/     # Slider with debouncing
│   │   │   └── ...
│   │   └── molecules/            # Composite components
│   │       └── Card/            # Product card component
│   ├── outfit-builder/           # Feature-specific components
│   │   ├── FilterModal/         # Filter editing organism
│   │   ├── FilterTags/          # Active filter chips
│   │   └── OutfitCard/          # Outfit display card
│   └── Header.tsx                # Global header with navigation
├── lib/                          # Business logic and utilities
│   ├── contexts/                 # React Context providers
│   │   └── OutfitBuilderContext.tsx  # State management
│   ├── filtering/                # Filtering engine
│   │   ├── filterEngine.ts      # Sophisticated scoring algorithm
│   │   └── filterEngine.test.ts # Comprehensive filtering tests
│   ├── hooks/                    # Custom React hooks
│   │   └── useDebounce.ts       # Performance optimization hook
│   ├── data/                     # Mock data and constants
│   │   ├── mock/products.ts     # 12 products with metadata
│   │   └── constants/           # Filter options and configs
│   ├── types/                    # TypeScript type definitions
│   └── utils.ts                  # Utility functions (cn, etc.)
├── docs/                         # Documentation
│   ├── ACCESSIBILITY_AUDIT.md   # WCAG 2.2 AA compliance report
│   ├── RESPONSIVE_DESIGN_AUDIT.md  # Mobile-first design audit
│   ├── PERFORMANCE_OPTIMIZATION.md # Performance analysis
│   ├── COLOR_CONTRAST_VALIDATION.md # Color accessibility
│   └── mockup/                  # HTML/CSS design prototypes
├── .storybook/                   # Storybook configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── vitest.config.ts              # Vitest testing configuration
└── next.config.js                # Next.js configuration
```

## Outfit Builder Feature

The **Outfit Builder** is an intelligent gear recommendation system that curates complete motorcycle outfits based on user preferences.

### How It Works

1. **User Input**: Users specify their preferences through an interactive filter modal:
   - **Riding Style**: Adventure, Sport Touring, Street, Track, Cruiser
   - **Budget Range**: $0 - $3,000 (adjustable slider)
   - **Color Preference**: Black, White, Red, Blue, Lime
   - **Weather Conditions**: All-Weather, Summer, Winter, Rain
   - **Usage Context**: City Commute, Long Trip, Off-road, Track Day

2. **Intelligent Filtering**: The sophisticated scoring algorithm evaluates products based on:
   - **Color Match** (20 points): Exact color preference matching
   - **Riding Style Match** (30 points): Product suitability for selected style
   - **Usage Context Match** (25 points): Alignment with intended use cases
   - **Certification Quality** (15 points): Safety ratings (FIM, SNELL, CE2, DOT, CE)
   - **Weather Appropriateness** (10 points): Material and feature matching

3. **Three-Tier Results**: Generates optimized outfits for different budgets:
   - **Entry Spec** (40% of max budget): Value-focused recommendations
   - **Rider's Choice** (100% of max budget): Best match for criteria ⭐
   - **Pro Spec** (200% of max budget): Premium tier recommendations

4. **Complete Outfits**: Each tier includes:
   - Helmet
   - Jacket
   - Gloves
   - Boots
   - Total price calculation
   - Safety certification badges

### Key Features

- ✅ **Real-time Filtering**: Instant outfit updates when preferences change
- ✅ **Draft State**: Edit filters without affecting results until "Apply"
- ✅ **Smart Defaults**: Pre-populated with sensible starting preferences
- ✅ **Restart Builder**: One-click reset to default filters
- ✅ **No Duplicate Products**: Each tier gets unique product recommendations
- ✅ **Accessible**: WCAG 2.2 Level AA compliant with full keyboard navigation
- ✅ **Responsive**: Mobile-first design from 320px to 1536px+
- ✅ **Performant**: Memoized filtering, debounced inputs, lazy-loaded modal

## Design System

The application uses a custom dark-mode design system with:

### Color Palette
- **Primary**: `#f26c0d` (Burnt Orange) - CTAs and brand identity
- **Accent**: `#6d28d9` (Deep Purple) - Accents and tags
- **Background Dark**: `#181411` (Near Black) - Main background
- **Card Dark**: `#27201b` / `#392f28` (Dark Graphite) - Card backgrounds and borders
- **Text Secondary**: `#baa89c` / `#6B7280` (Beige/Steel Gray) - Secondary text
- **White**: `#ffffff` - Primary text
- **Background Light**: `#F8F7F5` (Off White) - Future light mode support

### Typography
- **Display Font**: Space Grotesk - Headlines and bold statements
- **Body Font**: Noto Sans - Body text and UI elements
- **Size Scale**: Tailwind default scale with responsive sizing

### Component Variants
Components use CVA (Class Variance Authority) for type-safe variant management:
```typescript
// Example: Button variants
variant: 'primary' | 'secondary' | 'ghost'
size: 'sm' | 'md' | 'lg'
```

### Design Files
View the design mockups in the `docs/mockup/` directory:
- `outfit-builder/` - Outfit builder feature prototype
- `designSystem/` - Design system documentation

## Testing

The project has comprehensive test coverage across all components and business logic.

### Test Statistics
- **Total Tests**: 274
- **Passing**: 271 (98.9%)
- **Skipped**: 3 (jsdom timing edge cases)
- **Coverage Target**: 80%+

### Running Tests

```bash
# Watch mode (recommended for development)
npm test

# Run once (CI/CD)
npm run test:run

# UI interface
npm run test:ui

# Coverage report
npm run test:coverage
```

### Test Structure
- **Unit Tests**: Every component has corresponding `.test.tsx` file
- **Integration Tests**: FilterModal, OutfitBuilderContext
- **Accessibility Tests**: ARIA attributes, keyboard navigation
- **Business Logic Tests**: Filtering engine with 28 test cases

### Example Test Coverage
- ✅ **filterEngine.ts**: 28 tests (scoring, budget distribution, edge cases)
- ✅ **OutfitBuilderContext**: 31 tests (all actions, state transitions)
- ✅ **Modal**: 27 tests (focus trap, ESC key, backdrop)
- ✅ **Radio**: 29 tests (selection, keyboard navigation)
- ✅ **FilterModal**: 22 tests (draft state, form submission)

## Storybook

Interactive component documentation with visual examples and controls.

### Viewing Storybook

```bash
# Start Storybook dev server
npm run storybook

# Open http://localhost:6006
```

### Available Stories
- **Atoms**: Badge, Button, Checkbox, Input, Modal, Radio, RangeSlider
- **Molecules**: Card
- **Organisms**: FilterModal
- **Feature Components**: OutfitCard, FilterTags

Each story includes:
- **Multiple variants**: Visual examples of all component states
- **Interactive controls**: Adjust props in real-time
- **Documentation**: Usage examples and prop descriptions
- **Accessibility**: Built-in a11y addon for WCAG compliance checks

## Accessibility

The Outfit Builder meets **WCAG 2.2 Level AA** standards.

### Key Features
- ✅ **Keyboard Navigation**: Full keyboard support for all interactions
- ✅ **Screen Reader Support**: Proper ARIA labels and semantic HTML
- ✅ **Focus Management**: Visible focus indicators and logical tab order
- ✅ **Color Contrast**: 4.5:1 minimum for text, 3:1 for UI components
- ✅ **Touch Targets**: 44x44px minimum for mobile interactions
- ✅ **Focus Trap**: Modal prevents focus escape
- ✅ **Auto-focus**: Modal focuses first input on open

### Keyboard Shortcuts
- **Tab/Shift+Tab**: Navigate between elements
- **Arrow Keys**: Navigate radio groups, adjust sliders
- **Space/Enter**: Activate buttons, toggle checkboxes
- **ESC**: Close modal
- **Home/End**: Jump to slider min/max values

See `docs/ACCESSIBILITY_AUDIT.md` for detailed compliance report.

## Performance

The application is optimized for production with comprehensive performance improvements.

### Optimizations
1. **Memoization**: Cached outfit generation with `useMemo` (95% reduction in unnecessary calculations)
2. **Debouncing**: 300ms debounce on slider input (99.5% reduction in re-renders)
3. **Code Splitting**: Lazy-loaded FilterModal with `React.lazy` (15KB bundle reduction)

### Performance Metrics
- **Slider Interaction**: 2.3s → <0.1s (23x faster)
- **Initial Bundle**: -15KB (FilterModal lazy loaded)
- **Outfit Generation**: 3 calls → 1 call per filter change
- **Slider onChange**: 200+ calls → 1 call per drag

See `docs/PERFORMANCE_OPTIMIZATION.md` for detailed analysis.

## Responsive Design

Mobile-first responsive design with comprehensive device support.

### Breakpoints
```
sm:  640px  (Small tablets, landscape phones)
md:  768px  (Tablets)
lg:  1024px (Laptops, desktops)
xl:  1280px (Large desktops)
2xl: 1536px (Extra large screens)
```

### Responsive Features
- **FilterModal Grids**: 2 → 3 → 5 columns (riding style)
- **Outfit Grid**: 1 column mobile, 3 columns desktop
- **Modal Sizing**: Full width mobile, constrained desktop
- **Typography**: Responsive scaling (text-4xl lg:text-5xl)
- **Touch Targets**: 44x44px minimum on mobile

See `docs/RESPONSIVE_DESIGN_AUDIT.md` for detailed audit.

## Development

### Component Architecture
This project follows **Atomic Design** principles:

1. **Atoms**: Basic building blocks (Button, Input, Badge)
2. **Molecules**: Combinations of atoms (Card)
3. **Organisms**: Complex components (FilterModal)
4. **Features**: Page-level components (OutfitCard, FilterTags)

### Adding a New Component

1. Create component directory:
   ```bash
   mkdir -p components/ui/atoms/MyComponent
   ```

2. Add component files:
   ```typescript
   // MyComponent.tsx
   export function MyComponent() { ... }

   // MyComponent.types.ts
   export interface MyComponentProps { ... }

   // MyComponent.test.tsx
   describe('MyComponent', () => { ... })

   // MyComponent.stories.tsx
   export default { component: MyComponent }

   // index.ts
   export { MyComponent } from './MyComponent'
   ```

3. Add tests and stories
4. Document in Storybook

### State Management Pattern
The Outfit Builder uses React Context + useReducer for predictable state updates:

```typescript
// Context provides:
interface OutfitBuilderContextValue {
  state: OutfitBuilderState
  openModal: () => void
  closeModal: () => void
  updateFilters: (filters: Partial<FilterCriteria>) => void
  setOutfitResults: (results: OutfitBuilderResult) => void
  resetBuilder: () => void
}

// Actions:
type OutfitBuilderAction =
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' }
  | { type: 'UPDATE_FILTERS'; payload: Partial<FilterCriteria> }
  | { type: 'SET_OUTFIT_RESULTS'; payload: OutfitBuilderResult }
  | { type: 'RESET_BUILDER' }
```

### Best Practices
- **Always read files before editing**: Use the Read tool to understand existing code
- **Write tests**: Every component should have unit tests
- **Document in Storybook**: Create visual examples for reusable components
- **Follow accessibility guidelines**: WCAG 2.2 Level AA minimum
- **Mobile-first**: Design for mobile, enhance for desktop
- **Performance**: Memoize expensive operations, debounce rapid inputs

## Documentation

Comprehensive documentation is available in the `docs/` directory:

- **ACCESSIBILITY_AUDIT.md**: WCAG 2.2 AA compliance report (540 lines)
- **RESPONSIVE_DESIGN_AUDIT.md**: Mobile-first design verification (437 lines)
- **PERFORMANCE_OPTIMIZATION.md**: Performance analysis and improvements (641 lines)
- **COLOR_CONTRAST_VALIDATION.md**: Color palette WCAG validation

## Learn More

### Framework & Libraries
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vitest Documentation](https://vitest.dev/)
- [Storybook Documentation](https://storybook.js.org/docs)

### Accessibility
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Axe DevTools](https://www.deque.com/axe/devtools/)

### Performance
- [Web Vitals](https://web.dev/vitals/)
- [React DevTools Profiler](https://react.dev/learn/react-developer-tools)

## Project Timeline

- **Week 1** (Days 1-5): State management, types, filtering engine foundation
- **Week 2** (Days 6-10): Atomic components (Modal, Radio, Checkbox, RangeSlider)
- **Week 3** (Days 11-17): FilterModal organism, mock data, page integration
- **Week 4** (Days 18-22): Accessibility, responsive design, performance, documentation

**Total Development Time**: 22 days
**Total Tests**: 274
**Total Components**: 11 new components
**Total Documentation**: ~2,000 lines

## Contributing

This is a private project. For questions or suggestions, please contact the development team.

## License

This project is private and proprietary.

---

**Built with ❤️ for bikers, by developers who ride.**
