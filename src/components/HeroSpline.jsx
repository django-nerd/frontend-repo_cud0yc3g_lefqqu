import Spline from '@splinetool/react-spline'
import MoodSlider from './MoodSlider'

function HeroSpline() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[360px] md:h-[420px] lg:h-[520px] overflow-hidden">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlay to blend with white UI below */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white"></div>

        {/* Title + floating header widgets */}
        <div className="absolute inset-0 flex items-end md:items-start">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 pt-6 md:pt-10">
            <div className="flex items-start justify-between gap-6">
              <div className="pointer-events-none">
                <h1 className="text-white/90 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.55)]">
                  Soft UI Analytics Dashboard
                </h1>
                <p className="hidden md:block text-white/70 mt-3 md:mt-4 text-lg">
                  Elegant, futuristic visualizations with a calm, minimalist feel.
                </p>
              </div>

              {/* Mood slider in the top header (right side) */}
              <div className="hidden md:block w-[320px] shrink-0">
                <MoodSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSpline
