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
        {/* Left side textual stats */}
        <div className="flex-1 max-w-xs">
          <div className="rounded-2xl p-4 bg-pink-50 relative border border-transparent" style={{
            background: 'linear-gradient(0deg, rgba(255,240,246,1) 0%, rgba(255,240,246,0.7) 100%)',
            borderImage: 'linear-gradient(90deg, #ff9ad3, #b292ff) 1'
          }}>
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center shadow-lg">&</div>
            <div className="text-slate-800 text-3xl font-bold">-3 kg</div>
            <div className="text-slate-500 text-xs mt-1">This week</div>
          </div>
        </div>

        {/* Right side radial flower */}
        <div className="flex-1 flex items-center justify-center">
          <svg width="160" height="160" viewBox="-80 -80 160 160" className="overflow-visible">
            <defs>
              <linearGradient id="pink" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={pinkGrad[0]} />
                <stop offset="100%" stopColor={pinkGrad[1]} />
              </linearGradient>
              <linearGradient id="lav" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={lavGrad[0]} />
                <stop offset="100%" stopColor={lavGrad[1]} />
              </linearGradient>
            </defs>

            {/* Faint background wedges to represent unmet goals */}
            {Array.from({ length: petals }).map((_, i) => (
              <Petal key={`f-${i}`} r={50} rotation={(360 / petals) * i} fill="#f7f7fb" opacity={0.6} />
            ))}

            {/* Overlapping translucent petals */}
            {Array.from({ length: petals }).map((_, i) => (
              <Petal key={`p-${i}`} r={70} rotation={(360 / petals) * i} fill="url(#pink)" opacity={0.6} />
            ))}
            {Array.from({ length: petals }).map((_, i) => (
              <Petal key={`l-${i}`} r={55} rotation={(360 / petals) * i + 12} fill="url(#lav)" opacity={0.6} />
            ))}

            {/* Center white circle and tiny dark purple dot */}
            <circle cx="0" cy="0" r="10" fill="#fff" />
            <circle cx="0" cy="0" r="3" fill="#4b1d95" />
          </svg>
        </div>
      </div>

      <p className="text-center text-slate-500 text-sm mt-4">Abstract radial flower chart with overlapping translucent petals</p>
    </div>
  )
}

export default WeightGoalsFlower
