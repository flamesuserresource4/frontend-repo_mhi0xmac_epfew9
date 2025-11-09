import { PiggyBank, ChartLine, Calendar, CreditCard } from 'lucide-react';

const Card = ({ title, description, icon: Icon, accent }) => (
  <div className={`group relative rounded-2xl border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#000] transition-transform active:translate-x-[4px] active:translate-y-[4px] ${accent}`}>
    <div className="absolute right-4 top-4 rounded-full border-2 border-black bg-black/5 px-2 py-1 text-[10px] font-black uppercase tracking-wider">
      Pro Tip
    </div>
    <div className="flex items-start gap-4">
      <div className="rounded-xl border-4 border-black bg-black text-white p-3 shadow-[4px_4px_0_0_#000]">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-xl font-extrabold text-black">{title}</h3>
        <p className="mt-2 text-sm text-gray-800">{description}</p>
      </div>
    </div>
  </div>
);

export default function BentoGrid() {
  return (
    <section id="planner" className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-3xl sm:text-4xl font-extrabold">Your Money, Organized</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="md:col-span-4">
          <Card
            title="Smart Budget Buckets"
            description="Allocate funds to essentials, fun, and future. We keep you on track without the guilt."
            icon={PiggyBank}
            accent="bg-lime-200"
          />
        </div>
        <div className="md:col-span-2">
          <Card
            title="Recurring Bills"
            description="Never miss a payment again. Calendar view shows what's due and when."
            icon={Calendar}
            accent="bg-cyan-200"
          />
        </div>
        <div className="md:col-span-3">
          <Card
            title="Expense Insights"
            description="Find patterns instantly. We highlight where your money loves to go."
            icon={ChartLine}
            accent="bg-amber-200"
          />
        </div>
        <div className="md:col-span-3">
          <Card
            title="Cards & Subscriptions"
            description="Track renewals and hidden charges across all your cards."
            icon={CreditCard}
            accent="bg-fuchsia-200"
          />
        </div>
      </div>
    </section>
  );
}
