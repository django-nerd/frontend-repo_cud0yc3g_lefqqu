function Petal({ r = 60, rotation = 0, fill = '#FF69B4', opacity = 0.55 }) {
  const d = `M 0 0 C ${r} ${-r}, ${r} ${r}, 0 0` // bezier teardrop
  return (
    <g transform={`rotate(${rotation})`}>
      <path d={d} fill={fill} opacity={opacity} />
    </g>
  )
}

function WeightGoalsFlower() {
  const petals = 8
  const pinkGrad = ['#FFC0CB', '#FF69B4']
  const lavGrad = ['#E6E6FA', '#9370DB']

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900 font-semibold text-lg">Weight Goals</h3>
        <span className="text-slate-400 text-sm">Progress</span>
      </div>

      <div className="flex items-center justify-between gap-6">
        {/* Left stats box with gradient fill and gradient border */}
        <div className="flex-1 max-w-xs">
          <div
            className="relative rounded-2xl p-4"
            style={{
              background: 'linear-gradient(0deg, rgba(255,240,246,1) 0%, rgba(255,240,246,1) 100%)',
              border: '1px solid transparent',
              borderImage: 'linear-gradient(90deg, #ff9ad3, #b292ff) 1',
              boxShadow: '0 18px 50px rgba(17,24,39,0.08)'
            }}
          >
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center shadow-lg">&</div>
            <div className="text-slate-800 text-3xl font-bold">-3 kg</div>
            <div className="text-slate-500 text-xs mt-1">This week</div>
          </div>
        </div>

        {/* Radial flower visualization */}
        <div className="flex-1 flex items-center justify-center">
          <svg width="200" height="200" viewBox="-100 -100 200 200" className="overflow-visible">
            <defs>
              <linearGradient id="pink" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={pinkGrad[0]} stopOpacity="0.9" />
                <stop offset="100%" stopColor={pinkGrad[1]} stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="lav" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={lavGrad[0]} stopOpacity="0.9" />
                <stop offset="100%" stopColor={lavGrad[1]} stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Background petals (unfilled goals) */}
            {Array.from({ length: petals }).map((_, i) => (
              <Petal key={`f-${i}`} r={58} rotation={(360 / petals) * i} fill="#f7f7fb" opacity={0.8} />
            ))}

            {/* Pink layer */}
            {Array.from({ length: petals }).map((_, i) => (
              <Petal key={`p-${i}`} r={78} rotation={(360 / petals) * i} fill="url(#pink)" opacity={0.7} />
            ))}
            {/* Lavender layer with slight offset to create the flower overlap */}
            {Array.from({ length: petals }).map((_, i) => (
              <Petal key={`l-${i}`} r={64} rotation={(360 / petals) * i + 12} fill="url(#lav)" opacity={0.7} />
            ))}

            {/* Center white circle and tiny dark-purple dot */}
            <circle cx="0" cy="0" r="12" fill="#fff" />
            <circle cx="0" cy="0" r="3" fill="#4b1d95" />
          </svg>
        </div>
      </div>

      <p className="text-center text-slate-500 text-sm mt-4">Abstract radial flower chart with overlapping translucent petals</p>
    </div>
  )
}

export default WeightGoalsFlower
