import { Drumstick, Fish, Wheat } from 'lucide-react'

// Data + visuals kept in one spec so we can "fix graphs and data" together
const chartSpec = {
  maxY: 300, // grams scale top
  gridMarks: [50, 100, 200, 300],
  bars: [
    {
      key: 'protein',
      label: 'Protein',
      grams: 150,
      colorTop: '#C6B5F7',
      icon: Drumstick,
      bubbleBg: '#fce1ef',
      bubbleIcon: '#e85da8',
    },
    {
      key: 'fat',
      label: 'Fat',
      grams: 250,
      colorTop: '#C6B5F7',
      icon: Fish,
      bubbleBg: '#ede7ff',
      bubbleIcon: '#7c6cf2',
      callout: { text: 'Salmon 420 Kcal' },
    },
    {
      key: 'carbs',
      label: 'Carbs',
      grams: 200,
      colorTop: '#C6B5F7',
      icon: Wheat,
      bubbleBg: '#fce1ef',
      bubbleIcon: '#e85da8',
    },
  ],
}

function Axis({ maxY, gridMarks }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Chart padding box to place grid inside nicely */}
      <div className="absolute left-12 right-4 top-4 bottom-8">
        {gridMarks.map((v) => {
          const top = (1 - v / maxY) * 100
          return (
            <div
              key={v}
              className="absolute left-0 right-0 border-t border-dashed"
              style={{ top: `${top}%`, borderColor: '#E5E5E5' }}
            />
          )
        })}
      </div>
      {/* Y labels aligned to the actual grid positions */}
      <div className="absolute left-0 top-4 bottom-8 w-12">
        {gridMarks.map((v) => {
          const top = (1 - v / maxY) * 100
          return (
            <span
              key={v}
              className="absolute -translate-y-1/2 text-[10px] text-slate-400"
              style={{ top: `${top}%` }}
            >
              {v} g
            </span>
          )
        })}
      </div>
    </div>
  )
}

function FoodBalanceChart() {
  const { maxY, gridMarks, bars } = chartSpec

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900 font-semibold text-lg">Food Balance</h3>
        <span className="text-slate-400 text-sm">Today</span>
      </div>

      <div className="relative">
        <Axis maxY={maxY} gridMarks={gridMarks} />

        {/* Chart area */}
        <div className="pl-12 pr-4 pt-4 pb-8">
          <div className="relative h-72">
            <div className="absolute inset-0 flex items-end justify-between">
              {bars.map((b) => {
                const valuePct = Math.max(0, Math.min(100, (b.grams / maxY) * 100))
                const Icon = b.icon
                return (
                  <div key={b.key} className="relative flex flex-col items-center justify-end" style={{ width: '15%' }}>
                    {/* Bubble icon 44x44 positioned right above bar top */}
                    <div className="absolute -translate-y-1/2" style={{ bottom: `calc(${valuePct}% + 30px)` }}>
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                        style={{ background: b.bubbleBg }}
                      >
                        <Icon className="w-5 h-5" style={{ color: b.bubbleIcon }} />
                      </div>
                    </div>

                    {/* Capsule bar with top color fading to transparent + inner white highlight */}
                    <div
                      className="overflow-hidden rounded-full"
                      style={{ height: `${valuePct}%`, width: '100%', background: `linear-gradient(to bottom, ${b.colorTop}, rgba(198,181,247,0))` }}
                    >
                      <div className="w-full h-full" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0))' }} />
                    </div>

                    {/* X label + exact value */}
                    <div className="mt-3 text-center">
                      <div className="text-xs text-slate-500">{b.label}</div>
                      <div className="text-[10px] text-slate-400">{b.grams} g</div>
                    </div>

                    {/* Connector + tooltip for callout bar (Fat) */}
                    {b.callout && (
                      <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: `calc(${valuePct}% + 64px)` }}>
                        <div className="h-px w-32 md:w-44" style={{ background: '#0F172A', opacity: 0.85 }} />
                        <div className="mt-2 inline-flex items-center gap-2 bg-white text-slate-800 text-[11px] px-3 py-1.5 rounded-full font-semibold shadow-[0_12px_30px_rgba(2,6,23,0.18)] border border-black/10">
                          <Icon className="w-4 h-4" style={{ color: b.bubbleIcon }} />
                          <span>{b.callout.text}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodBalanceChart
