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
            Biker Shop
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
              href="#"
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4 lg:px-20">
        <div className="max-w-[1280px] w-full flex flex-col items-center gap-12 text-center">
          {/* Hero Icon */}
          <div className="size-24 text-primary">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
            </svg>
          </div>

          {/* Hero Heading */}
          <div className="flex flex-col gap-6">
            <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight tracking-[-0.033em] font-display">
              Welcome to <span className="text-primary">Biker Shop</span>
            </h1>
            <p className="text-text-secondary text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto font-body">
              A searching engine that helps you find the perfect products for
              your biker life. Discover gear, build your outfit, and ride with
              confidence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary hover:bg-orange-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Start Building Your Outfit</span>
            </button>
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Browse Gear</span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
            <div className="flex flex-col gap-3 p-6 rounded-2xl border border-border-dark bg-card-dark hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl">
                search
              </span>
              <h3 className="text-white text-xl font-bold font-display">
                Smart Search
              </h3>
              <p className="text-text-secondary text-sm font-body">
                Find exactly what you need with our advanced search engine
                designed for riders.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-2xl border border-border-dark bg-card-dark hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl">
                checkroom
              </span>
              <h3 className="text-white text-xl font-bold font-display">
                Outfit Builder
              </h3>
              <p className="text-text-secondary text-sm font-body">
                Create complete gear loadouts based on your riding style and
                budget.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-6 rounded-2xl border border-border-dark bg-card-dark hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-primary text-4xl">
                verified_user
              </span>
              <h3 className="text-white text-xl font-bold font-display">
                Safety First
              </h3>
              <p className="text-text-secondary text-sm font-body">
                All recommendations prioritize safety certifications and rider
                protection.
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-dark border border-border-dark text-text-secondary text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Hello World - Project Initialized Successfully
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-dark py-8 px-4 bg-background-dark">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-text-secondary text-sm font-body">
            © 2025 Biker Shop Searcher. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
