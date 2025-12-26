# Biker Shop Searcher

A searching engine that helps users find the perfect products for their biker life. Discover gear, build your outfit, and ride with confidence.

## Technology Stack

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
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

## Project Structure

```
biker-shop-searcher/
├── app/                    # Next.js App Router directory
│   ├── globals.css        # Global styles and Tailwind directives
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Home page (hello world)
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── Header.tsx        # Header component with navigation
├── lib/                  # Utility functions and constants
├── public/               # Static assets
├── docs/                 # Design mockups and documentation
│   └── mockup/          # HTML/CSS design prototypes
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Design System

The application uses a custom dark-mode design system with:

### Color Palette
- **Primary**: `#f26c0d` (Burnt Orange) - CTAs and brand
- **Accent**: `#6d28d9` (Deep Purple) - Accents and tags
- **Background Dark**: `#181411` - Main background
- **Card Dark**: `#27201b` / `#392f28` - Card backgrounds
- **Text Secondary**: `#baa89c` / `#6B7280` - Secondary text

### Typography
- **Display Font**: Space Grotesk - Headlines and bold statements
- **Body Font**: Noto Sans - Body text and UI elements

### Design Files
View the design mockups in the `docs/mockup/` directory:
- `outfit-builder/` - Outfit builder feature prototype
- `designSystem/` - Design system documentation

## Features (Roadmap)

- [x] Project initialization with Next.js and TypeScript
- [x] Design system implementation
- [x] Hello world landing page
- [ ] Gear search functionality
- [ ] Outfit builder with budget/style filtering
- [ ] Product catalog
- [ ] User authentication
- [ ] My Garage (saved items)
- [ ] Deals and recommendations

## Development

This project uses the Next.js App Router with TypeScript for type safety. Start by exploring:

1. `app/page.tsx` - Main landing page
2. `components/Header.tsx` - Reusable header component
3. `tailwind.config.ts` - Custom design tokens

To add new pages, create files in the `app/` directory following Next.js App Router conventions.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This project is private and proprietary.
