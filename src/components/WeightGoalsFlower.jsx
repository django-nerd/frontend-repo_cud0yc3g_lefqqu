function Petal({ size = 120, rotation = 0, color = '#ff33aa', opacity = 0.3 }) {
  const r = size
  const d = `M 0 0 C ${r} ${-r}, ${r} ${r}, 0 0` // simple teardrop using a cubic curve
  return (
    <g transform={`rotate(${rotation})`}>
      <path d={d} fill={color} opacity={opacity} filter="url(#softShadow)" />
    </g>
  )
}

function WeightGoalsFlower() {
  const petals = 12
  const colors = ['#ff3ea5', '#b388ff', '#da4df0']

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900 font-semibold text-lg">Weight Goals</h3>
        <span className="text-slate-400 text-sm">Progress</span>
      </div>

      <div className="flex items-center justify-center">
        <svg width="280" height="280" viewBox="-160 -160 320 320" className="overflow-visible">
          <defs>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* layered translucent petals */}
          {Array.from({ length: petals }).map((_, i) => (
            <Petal key={i} size={120} rotation={(360 / petals) * i} color={colors[i % colors.length]} opacity={0.32} />
          ))}
          {Array.from({ length: petals }).map((_, i) => (
            <Petal key={`b-${i}`} size={90} rotation={(360 / petals) * i + 10} color={colors[(i + 1) % colors.length]} opacity={0.28} />
          ))}
          {Array.from({ length: petals }).map((_, i) => (
            <Petal key={`c-${i}`} size={70} rotation={(360 / petals) * i + 20} color={colors[(i + 2) % colors.length]} opacity={0.24} />
          ))}

          {/* central dot */}
          <circle cx="0" cy="0" r="6" fill="#fff" />
          <circle cx="0" cy="0" r="18" fill="url(#centerGrad)" opacity="0.9" />

          <defs>
            <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff60e6" />
              <stop offset="100%" stopColor="#9b5cff" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <p className="text-center text-slate-500 text-sm mt-4">Flower-petal radial composition, neon pink and soft purple layers</p>
    </div>
  )
}

export default WeightGoalsFlower
