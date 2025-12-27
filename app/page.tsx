import Link from 'next/link'
import { Button } from '@/components/ui/atoms/Button'
import { Input } from '@/components/ui/atoms/Input'
import { Badge } from '@/components/ui/atoms/Badge'
import { Card } from '@/components/ui/molecules/Card'

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark px-6 py-4 lg:px-10 bg-background-dark sticky top-0 z-50">
        <div className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] font-display">
            Biker Shop Searcher
          </h2>
        </div>
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="#"
            >
              Gear Search
            </a>
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="/outfit-builder"
            >
              Outfit Builder
            </a>
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="#"
            >
              Deals
            </a>
            <a
              className="text-white hover:text-primary transition-colors text-sm font-medium leading-normal"
              href="#"
            >
              My Garage
            </a>
          </nav>
        </div>
        <div className="lg:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background-dark via-card-dark to-background-dark py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <h1 className="text-white text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] font-display">
                    Find Your Perfect Ride Gear
                  </h1>
                  <p className="text-text-secondary text-xl font-normal leading-relaxed font-body">
                    Discover motorcycle gear trusted by 50,000+ riders worldwide
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/outfit-builder">
                    <Button variant="primary" size="lg" leftIcon="sports_motorsports">
                      Build Your Outfit
                    </Button>
                  </Link>
                  <Link href="/outfit-builder">
                    <Button variant="secondary" size="lg" leftIcon="search">
                      Browse Gear
                    </Button>
                  </Link>
                </div>

                {/* Optional Search Bar */}
                <div className="max-w-2xl">
                  <Input
                    variant="search"
                    inputSize="lg"
                    leftIcon="search"
                    placeholder="Search for helmets, jackets, gloves..."
                  />
                </div>
              </div>

              {/* Right Column - Decorative Icon */}
              <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                  <span className="material-symbols-outlined text-primary text-9xl relative">
                    sports_motorsports
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-white text-4xl font-black font-display mb-4">
                Why Choose Biker Shop Searcher
              </h2>
              <p className="text-text-secondary text-lg font-body max-w-3xl mx-auto">
                Everything you need to find the perfect motorcycle gear
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1: Smart Search */}
              <Card variant="feature" padding="md">
                <div className="flex flex-col gap-3">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    search
                  </span>
                  <h3 className="text-white text-xl font-bold font-display">Smart Search</h3>
                  <p className="text-text-secondary text-sm font-body">
                    Find exactly what you need with our advanced search engine designed for riders
                  </p>
                </div>
              </Card>

              {/* Feature 2: Expert Curation */}
              <Card variant="feature" padding="md">
                <div className="flex flex-col gap-3">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    verified
                  </span>
                  <h3 className="text-white text-xl font-bold font-display">Expert Curation</h3>
                  <p className="text-text-secondary text-sm font-body">
                    Handpicked products by experienced riders and safety professionals
                  </p>
                </div>
              </Card>

              {/* Feature 3: Outfit Builder - Recommended */}
              <Card variant="feature" padding="md" isRecommended>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      apps
                    </span>
                    <Badge variant="primary" size="sm">Popular</Badge>
                  </div>
                  <h3 className="text-white text-xl font-bold font-display">Outfit Builder</h3>
                  <p className="text-text-secondary text-sm font-body">
                    Create complete gear setups matched to your riding style and budget
                  </p>
                </div>
              </Card>

              {/* Feature 4: Price Comparison */}
              <Card variant="feature" padding="md">
                <div className="flex flex-col gap-3">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    attach_money
                  </span>
                  <h3 className="text-white text-xl font-bold font-display">Price Comparison</h3>
                  <p className="text-text-secondary text-sm font-body">
                    Compare prices across retailers to get the best deal on quality gear
                  </p>
                </div>
              </Card>

              {/* Feature 5: Safety First */}
              <Card variant="feature" padding="md">
                <div className="flex flex-col gap-3">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    shield
                  </span>
                  <h3 className="text-white text-xl font-bold font-display">Safety First</h3>
                  <p className="text-text-secondary text-sm font-body">
                    All gear vetted for DOT, SNELL, and CE safety certifications
                  </p>
                </div>
              </Card>

              {/* Feature 6: Community Reviews */}
              <Card variant="feature" padding="md">
                <div className="flex flex-col gap-3">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    reviews
                  </span>
                  <h3 className="text-white text-xl font-bold font-display">Community Reviews</h3>
                  <p className="text-text-secondary text-sm font-body">
                    Read real experiences from riders just like you
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="bg-card-header py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Stat 1: Products */}
              <Card variant="elevated" padding="md">
                <div className="flex flex-col items-center text-center gap-3">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    inventory_2
                  </span>
                  <div className="text-4xl font-black text-primary font-display">10,000+</div>
                  <div className="text-text-secondary text-sm font-body">Verified Products</div>
                </div>
              </Card>

              {/* Stat 2: Brands */}
              <Card variant="elevated" padding="md">
                <div className="flex flex-col items-center text-center gap-3">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    verified_user
                  </span>
                  <div className="text-4xl font-black text-primary font-display">150+</div>
                  <div className="text-text-secondary text-sm font-body">Trusted Brands</div>
                </div>
              </Card>

              {/* Stat 3: Riders */}
              <Card variant="elevated" padding="md">
                <div className="flex flex-col items-center text-center gap-3">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    groups
                  </span>
                  <div className="text-4xl font-black text-primary font-display">50,000+</div>
                  <div className="text-text-secondary text-sm font-body">Active Riders</div>
                </div>
              </Card>

              {/* Stat 4: Reviews */}
              <Card variant="elevated" padding="md">
                <div className="flex flex-col items-center text-center gap-3">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    star
                  </span>
                  <div className="text-4xl font-black text-primary font-display">100%</div>
                  <div className="text-text-secondary text-sm font-body">Verified Reviews</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety Certifications Section */}
        <section className="py-16 lg:py-24 bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-white text-4xl font-black font-display mb-4">
                Safety Certifications Explained
              </h2>
              <p className="text-text-secondary text-lg font-body max-w-3xl mx-auto">
                Understanding the standards that keep you protected
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* SNELL Certification */}
              <Card variant="feature" padding="lg">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-5xl">
                      shield
                    </span>
                    <Badge variant="certification" size="md">SNELL</Badge>
                  </div>
                  <h3 className="text-white text-lg font-bold font-display">SNELL Certified</h3>
                  <p className="text-text-secondary text-sm font-body">
                    The gold standard in helmet safety testing, exceeding DOT requirements with rigorous impact testing
                  </p>
                </div>
              </Card>

              {/* DOT Certification */}
              <Card variant="feature" padding="lg">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-5xl">
                      verified
                    </span>
                    <Badge variant="certification" size="md">DOT</Badge>
                  </div>
                  <h3 className="text-white text-lg font-bold font-display">DOT Approved</h3>
                  <p className="text-text-secondary text-sm font-body">
                    Department of Transportation standard ensuring minimum safety requirements for all road-legal helmets
                  </p>
                </div>
              </Card>

              {/* CE Certification */}
              <Card variant="feature" padding="lg">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-5xl">
                      check_circle
                    </span>
                    <Badge variant="certification" size="md">CE</Badge>
                  </div>
                  <h3 className="text-white text-lg font-bold font-display">CE Certified</h3>
                  <p className="text-text-secondary text-sm font-body">
                    European standard for protective gear with multiple levels (CE Level 1 and CE Level 2)
                  </p>
                </div>
              </Card>

              {/* FIM Certification */}
              <Card variant="feature" padding="lg">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-5xl">
                      workspace_premium
                    </span>
                    <Badge variant="certification" size="md">FIM</Badge>
                  </div>
                  <h3 className="text-white text-lg font-bold font-display">FIM Homologated</h3>
                  <p className="text-text-secondary text-sm font-body">
                    Federation Internationale de Motocyclisme racing standard for professional-grade protection
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 lg:py-24 bg-card-header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-white text-4xl font-black font-display mb-4">
                Featured Products
              </h2>
              <p className="text-text-secondary text-lg font-body max-w-3xl mx-auto">
                Top-rated gear from trusted brands
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product 1: AGV K6 Helmet */}
              <Card variant="product">
                <div className="aspect-square bg-gradient-to-br from-card-graphite to-card-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-text-secondary">
                    sports_motorsports
                  </span>
                </div>
                <Card.Body>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-bold font-display">AGV K6 Helmet</h3>
                    <Badge variant="certification" size="sm">SNELL</Badge>
                  </div>
                  <p className="text-text-secondary text-sm mb-3 font-body">
                    Carbon Fiber • DOT/SNELL
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xl font-bold font-display">$599</span>
                    <Button size="sm" variant="secondary">View Details</Button>
                  </div>
                </Card.Body>
              </Card>

              {/* Product 2: Alpinestars GP Pro Jacket */}
              <Card variant="product">
                <div className="aspect-square bg-gradient-to-br from-card-graphite to-card-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-text-secondary">
                    checkroom
                  </span>
                </div>
                <Card.Body>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-bold font-display">Alpinestars GP Pro Jacket</h3>
                    <Badge variant="success" size="sm">Best Seller</Badge>
                  </div>
                  <p className="text-text-secondary text-sm mb-3 font-body">
                    Leather • CE Armor
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xl font-bold font-display">$799</span>
                    <Button size="sm" variant="secondary">View Details</Button>
                  </div>
                </Card.Body>
              </Card>

              {/* Product 3: Dainese Full Metal 6 Gloves */}
              <Card variant="product">
                <div className="aspect-square bg-gradient-to-br from-card-graphite to-card-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-text-secondary">
                    back_hand
                  </span>
                </div>
                <Card.Body>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-bold font-display">Dainese Full Metal 6 Gloves</h3>
                    <Badge variant="primary" size="sm">New</Badge>
                  </div>
                  <p className="text-text-secondary text-sm mb-3 font-body">
                    Carbon Knuckles • CE Level 2
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xl font-bold font-display">$299</span>
                    <Button size="sm" variant="secondary">View Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-t-2 border-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white text-4xl lg:text-5xl font-black font-display mb-6">
              Ready to Gear Up?
            </h2>
            <p className="text-text-secondary text-xl font-body mb-8">
              Join 50,000+ riders who trust us to find their perfect gear
            </p>
            <div className="flex justify-center">
              <Link href="/outfit-builder">
                <Button variant="primary" size="lg" rightIcon="arrow_forward" className="w-full sm:w-auto">
                  Start Building Your Outfit
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-[#0f0d0b] border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16">
          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-8 text-primary">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
                  </svg>
                </div>
                <h3 className="text-white text-lg font-bold font-display">
                  Biker Shop Searcher
                </h3>
              </div>
              <p className="text-text-secondary text-sm font-body">
                Your trusted motorcycle gear search engine
              </p>
            </div>

            {/* Column 2: Product */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-bold font-display uppercase tracking-wider">
                Product
              </h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Gear Search
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Outfit Builder
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Price Compare
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Deals
                </a>
              </nav>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-bold font-display uppercase tracking-wider">
                Company
              </h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  About Us
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Blog
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Careers
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Contact
                </a>
              </nav>
            </div>

            {/* Column 4: Support */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-sm font-bold font-display uppercase tracking-wider">
                Support
              </h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Help Center
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Safety Guide
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Returns
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  FAQ
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 border-t border-border-dark">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-text-secondary text-sm font-body">
                © 2025 Biker Shop Searcher. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Privacy Policy
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-body">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
