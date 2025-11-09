import Spline from '@splinetool/react-spline';
import { Rocket, Wallet } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
        <div className="inline-flex items-center gap-2 rounded-full border-4 border-black bg-yellow-300 px-4 py-2 shadow-[6px_6px_0_0_#000]">
          <Wallet className="h-4 w-4" />
          <span className="text-sm font-extrabold uppercase tracking-wide">Neo-Brutalist Fintech</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight text-black">
          Take control of your money
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-700 to-blue-700">with style and clarity</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-800">
          Plan budgets, track expenses, and grow savings in a bold, playful interface inspired by neobrutalism.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#planner" className="inline-flex items-center gap-2 rounded-lg border-4 border-black bg-lime-300 px-6 py-3 text-base font-extrabold shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[4px] active:translate-y-[4px]">
            <Rocket className="h-5 w-5" /> Start Planning
          </a>
          <a href="#learn" className="inline-flex items-center gap-2 rounded-lg border-4 border-black bg-white px-6 py-3 text-base font-extrabold shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[4px] active:translate-y-[4px]">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
