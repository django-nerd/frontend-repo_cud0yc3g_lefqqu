import { Play, Pause } from 'lucide-react'

const items = [
  { title: 'Lower Body Strength', status: 'Completed', duration: '45 min' },
  { title: 'Cardio Intervals', status: 'In progress', duration: '20 min' },
  { title: 'Core Stability', status: 'Queued', duration: '15 min' },
]

function StatusBadge({ status }) {
  if (status === 'Completed') {
    return (
      <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: '#E0E7FF', color: '#3730A3' }}>
        Completed
      </span>
    )
  }
  if (status === 'In progress') {
    return (
      <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: '#D1FAE5', color: '#065F46' }}>
        In progress
      </span>
    )
  }
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-medium text-slate-500 bg-slate-100">
      Queued
    </span>
  )
}

function ActionIcon({ active }) {
  return (
    <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm ${active ? 'bg-violet-700 text-white' : 'bg-slate-100 text-slate-500'}`}>
      {active ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
    </div>
  )
}

export default function TrainingTracker() {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900 font-semibold text-lg">Training</h3>
        <span className="text-slate-400 text-sm">This week</span>
      </div>

      <div className="space-y-4">
        {items.map((it, idx) => (
          <div key={it.title} className="flex items-center justify-between">
            <div className="min-w-0">
              <div className="text-slate-800 font-medium truncate">{it.title}</div>
              <div className="mt-1"><StatusBadge status={it.status} /></div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">{it.duration}</span>
              <ActionIcon active={it.status === 'In progress'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
