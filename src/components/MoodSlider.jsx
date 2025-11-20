import { useState, useMemo } from 'react'

const marks = ['Bad', 'Okay', 'Good', 'Great']

function MoodSlider() {
  const [value, setValue] = useState(2) // Good default
  const positionPct = useMemo(() => (value / (marks.length - 1)) * 100, [value])

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900 font-semibold text-lg">Mood</h3>
        <span className="text-slate-400 text-sm">Today</span>
      </div>

      <div className="flex justify-end mb-3">
        <div className="grid grid-cols-3 gap-6 text-xs text-slate-500">
          <span>Bad</span>
          <span className="text-center">Good</span>
          <span>Great</span>
        </div>
      </div>

      <div className="px-1">
        {/* Track */}
        <div className="relative h-16 flex items-center">
          <div className="absolute inset-x-0 mx-auto h-10 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_40px_rgba(236,72,153,0.25)]" style={{
            background: 'linear-gradient(90deg, #93C5FD 0%, #C4B5FD 50%, #FB7185 100%)'
          }} />

          {/* Handle - floating capsule */}
          <div
            className="relative z-10 w-24 h-12 rounded-full border border-white/90 bg-gradient-to-b from-white to-pink-50 shadow-[0_14px_40px_rgba(236,72,153,0.35)] flex items-center justify-center select-none transition-transform"
            style={{ transform: `translateX(${positionPct}%)` }}
          >
            <div className="w-20 h-6 rounded-full bg-pink-400/70" />
          </div>
        </div>

        {/* Interactive marks */}
        <div className="relative mt-4 grid grid-cols-4 text-xs text-slate-500">
          {marks.map((m, i) => (
            <button
              key={m}
              onClick={() => setValue(i)}
              className={`text-center transition-colors px-2 py-1 rounded-full ${i === value ? 'text-slate-900 font-medium bg-slate-50' : ''}`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoodSlider
