import { useState } from 'react'

const marks = [
  { label: 'Bad' },
  { label: 'Okay' },
  { label: 'Good' },
  { label: 'Great' },
]

function MoodSlider() {
  const [value, setValue] = useState(2) // Good

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900 font-semibold text-lg">Mood</h3>
        <span className="text-slate-400 text-sm">Today</span>
      </div>

      <div className="px-2 md:px-4">
        {/* Track */}
        <div className="relative h-16 flex items-center">
          <div className="absolute inset-x-0 mx-auto h-6 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_40px_rgba(236,72,153,0.25)]" />

          {/* Handle */}
          <div
            className="relative z-10 w-28 h-10 rounded-full bg-white shadow-[0_12px_30px_rgba(59,130,246,0.35)] border border-white/60 flex items-center justify-center select-none"
            style={{ transform: `translateX(${(value / (marks.length - 1)) * 100}%)` }}
          >
            <span className="text-slate-700 text-sm font-medium">{marks[value].label}</span>
          </div>
        </div>

        {/* Marks */}
        <div className="relative mt-4 grid grid-cols-4 text-xs text-slate-500">
          {marks.map((m, i) => (
            <button
              key={m.label}
              onClick={() => setValue(i)}
              className={`text-center transition-colors ${i === value ? 'text-slate-900 font-medium' : ''}`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoodSlider
