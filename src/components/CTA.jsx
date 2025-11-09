import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="learn" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl border-4 border-black bg-gradient-to-br from-yellow-200 via-pink-200 to-cyan-200 p-8 shadow-[10px_10px_0_0_#000]">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-extrabold text-black">Start your financial glow-up</h3>
            <p className="mt-2 max-w-2xl text-sm text-gray-900">Create budgets, track goals, and feel confident about every swipe. It’s playful yet powerful.</p>
          </div>
          <a href="#planner" className="inline-flex items-center gap-2 rounded-lg border-4 border-black bg-black px-6 py-3 text-base font-extrabold text-white shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[4px] active:translate-y-[4px]">
            Get Started <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
