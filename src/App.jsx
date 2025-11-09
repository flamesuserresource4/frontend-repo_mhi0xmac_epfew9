import Hero from './components/Hero.jsx';
import BentoGrid from './components/BentoGrid.jsx';
import PlannerWidget from './components/PlannerWidget.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#F8F5FF_0%,#EAF6FF_50%,#FFF8F1_100%)] text-black">
      <header className="sticky top-0 z-50 border-b-4 border-black bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-lg border-4 border-black bg-lime-300 px-3 py-1 font-extrabold shadow-[4px_4px_0_0_#000]">
            <span>¢</span>
            <span>BoldBudget</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 font-bold">
            <a href="#planner" className="rounded-md border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0_0_#000]">Planner</a>
            <a href="#learn" className="rounded-md border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0_0_#000]">How it works</a>
            <a href="#" className="rounded-md border-2 border-black bg-yellow-300 px-3 py-1 shadow-[3px_3px_0_0_#000]">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <BentoGrid />
        <PlannerWidget />
        <CTA />
      </main>

      <footer className="border-t-4 border-black bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm font-bold text-gray-700">
          Built with love in a neo‑brutalist style. © {new Date().getFullYear()} BoldBudget
        </div>
      </footer>
    </div>
  );
}

export default App;
