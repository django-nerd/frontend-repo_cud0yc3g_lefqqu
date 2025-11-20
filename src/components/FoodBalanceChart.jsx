import { Drumstick, Fish, Wheat } from 'lucide-react'

const chartSpec = {
  yLines: [50, 100, 200, 300],
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

function Axis() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Y grid lines */}
      <div className="absolute inset-4">
        {chartSpec.yLines.map((v, i) => (
          <div key={v} className="absolute left-0 right-0 border-t border-dashed" style={{ top: `${(1 - v / 320) * 100}%`, borderColor: '#E5E5E5' }} />
        ))}
      </div>
      {/* Y labels */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-6">
        {chartSpec.yLines.map(v => (
          <span key={v} className="text-[10px] text-slate-400">{v} g</span>
        ))}
      </div>
    </div>
  )
}

function FoodBalanceChart() {
  const maxY = 320 // top padding + headroom to sit near the top grid line

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900 font-semibold text-lg">Food Balance</h3>
        <span className="text-slate-400 text-sm">Today</span>
      </div>

      <div className="relative">
        <Axis />

        {/* Chart area */}
        <div className="pl-10 pr-4">{/* space for y labels */}
          <div className="grid grid-cols-3 gap-10 items-end h-72 relative">
            {chartSpec.bars.map((b, idx) => {
              const heightPct = Math.min(100, (b.grams / maxY) * 100 * 1.2)
              const Icon = b.icon
              return (
                <div key={b.key} className="relative flex flex-col items-center justify-end">
                  {/* Bubble icon at the value position */}
                  <div className="absolute -translate-y-1/2" style={{ bottom: `calc(${heightPct}% + 32px)` }}>
                    <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.12)]" style={{ background: b.bubbleBg }}>
                      <Icon className="w-5 h-5" style={{ color: b.bubbleIcon }} />
                    </div>
                  </div>

                  {/* Capsule bar */}
                  <div className="w-12 md:w-14 rounded-full overflow-hidden" style={{ height: `${heightPct}%`, background: `linear-gradient(to bottom, ${b.colorTop}, rgba(198,181,247,0))` }}>
                    <div className="w-full h-full bg-gradient-to-b from-white/25 to-transparent" />
                  </div>

                  {/* X label */}
                  <span className="mt-3 text-xs text-slate-500">{b.label}</span>

                  {/* Connector + tooltip for middle (Fat) */}
                  {b.callout && (
                    <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: `calc(${heightPct}% + 64px)` }}>
                      <div className="h-px w-32 md:w-44" style={{ background: '#000' }} />
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
  )
}

export default FoodBalanceChart
