import { useMemo } from 'react'
import { Drumstick, Fish } from 'lucide-react'

const foods = [
  { label: 'Chicken', kcal: 360, icon: Drumstick },
  { label: 'Salmon', kcal: 420, icon: Fish },
  { label: 'Tuna',   kcal: 290, icon: Fish },
  { label: 'Turkey', kcal: 310, icon: Drumstick },
  { label: 'Cod',    kcal: 180, icon: Fish },
]

function FoodBalanceChart() {
  const max = useMemo(() => Math.max(...foods.map(f => f.kcal)), [])

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900 font-semibold text-lg">Food Balance</h3>
        <span className="text-slate-400 text-sm">Today</span>
      </div>

      <div className="relative">
        {/* Bars */}
        <div className="grid grid-cols-5 gap-6 md:gap-8 items-end h-72">
          {foods.map((f, i) => {
            const height = (f.kcal / max) * 100
            const CapsuleIcon = f.icon
            return (
              <div key={f.label} className="relative flex flex-col items-center">
                {/* Bubble icon above bar */}
                <div className="absolute -top-8 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                  <CapsuleIcon className="w-5 h-5 text-slate-600" />
                </div>
                {/* Bar */}
                <div className="w-10 md:w-12 rounded-t-full overflow-hidden bg-gradient-to-b from-purple-300/80 to-purple-300/0" style={{ height: `${height}%` }}>
                  {/* Soft inner highlight */}
                  <div className="w-full h-full bg-gradient-to-b from-white/30 to-transparent" />
                </div>
                <span className="mt-4 text-xs text-slate-500">{f.label}</span>
              </div>
            )
          })}
        </div>

        {/* Connector line and tooltip for middle bar (Salmon) */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '35%' }}>
          <div className="h-px w-28 md:w-40 bg-slate-200" />
          <div className="mt-2 inline-flex items-center gap-2 bg-slate-900 text-white text-xs px-3 py-2 rounded-full shadow-[0_12px_30px_rgba(2,6,23,0.35)]">
            <Fish className="w-4 h-4" />
            <span>Salmon 420 Kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodBalanceChart
