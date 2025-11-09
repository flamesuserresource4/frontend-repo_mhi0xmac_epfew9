import { useMemo, useState } from 'react';
import { Plus, Minus, DollarSign } from 'lucide-react';

export default function PlannerWidget() {
  const [income, setIncome] = useState(4000);
  const [needs, setNeeds] = useState(50);
  const [wants, setWants] = useState(30);
  const [savings, setSavings] = useState(20);

  const breakdown = useMemo(() => {
    const total = income;
    const needsAmt = Math.round((needs / 100) * total);
    const wantsAmt = Math.round((wants / 100) * total);
    const savingsAmt = total - needsAmt - wantsAmt; // ensure total integrity
    return { total, needsAmt, wantsAmt, savingsAmt };
  }, [income, needs, wants]);

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl border-4 border-black bg-white p-6 shadow-[10px_10px_0_0_#000]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold">50/30/20 Planner</h3>
            <p className="mt-2 text-sm text-gray-800">Adjust sliders to see how your monthly income splits across needs, wants, and savings.</p>

            <div className="mt-6 grid grid-cols-1 gap-6">
              <div>
                <label className="text-xs font-black uppercase">Monthly Income</label>
                <div className="mt-2 flex items-center gap-3">
                  <div className="rounded-lg border-4 border-black bg-lime-300 p-2 shadow-[4px_4px_0_0_#000]">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <input
                    type="number"
                    min={0}
                    className="w-full rounded-lg border-4 border-black bg-white px-3 py-2 font-bold shadow-[4px_4px_0_0_#000] focus:outline-none"
                    value={income}
                    onChange={(e) => setIncome(parseInt(e.target.value || '0'))}
                  />
                </div>
              </div>

              <RangeRow label="Needs" color="bg-amber-300" value={needs} setValue={setNeeds} />
              <RangeRow label="Wants" color="bg-cyan-300" value={wants} setValue={setWants} />
              <RangeRow label="Savings" color="bg-fuchsia-300" value={savings} setValue={setSavings} />
            </div>
          </div>

          <div className="w-full md:w-80">
            <h4 className="text-lg font-extrabold">Breakdown</h4>
            <ul className="mt-4 space-y-3">
              <BreakItem label="Needs" amount={breakdown.needsAmt} color="bg-amber-300" />
              <BreakItem label="Wants" amount={breakdown.wantsAmt} color="bg-cyan-300" />
              <BreakItem label="Savings" amount={breakdown.savingsAmt} color="bg-fuchsia-300" />
            </ul>
            <div className="mt-6 rounded-xl border-4 border-black bg-black p-4 text-white shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center justify-between text-sm">
                <span className="font-black uppercase">Total</span>
                <span className="font-extrabold">${'{'}breakdown.total.toLocaleString(){'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RangeRow({ label, color, value, setValue }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-extrabold">{label} {value}%</label>
        <div className="flex items-center gap-2">
          <button
            className="rounded-md border-4 border-black bg-white p-1 shadow-[3px_3px_0_0_#000]"
            onClick={() => setValue(Math.max(0, value - 1))}
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            className="rounded-md border-4 border-black bg-white p-1 shadow-[3px_3px_0_0_#000]"
            onClick={() => setValue(Math.min(100, value + 1))}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className={`mt-2 w-full accent-black ${color}`}
      />
    </div>
  );
}

function BreakItem({ label, amount, color }) {
  return (
    <li className="flex items-center justify-between rounded-lg border-4 border-black bg-white p-3 shadow-[4px_4px_0_0_#000]">
      <div className={`h-4 w-4 rounded-sm border-2 border-black ${color}`} />
      <span className="flex-1 px-3 text-sm font-extrabold">{label}</span>
      <span className="text-sm font-bold">${'{'}amount.toLocaleString(){'}'}</span>
    </li>
  );
}
