import HeroSpline from './components/HeroSpline'
import FoodBalanceChart from './components/FoodBalanceChart'
import WeightGoalsFlower from './components/WeightGoalsFlower'
import MoodSlider from './components/MoodSlider'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Spline cover */}
      <HeroSpline />

      {/* Dashboard content */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 -mt-16 md:-mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2">
            <FoodBalanceChart />
          </div>
          <div>
            <MoodSlider />
          </div>
        </div>

        <div className="mt-6 md:mt-8">
          <WeightGoalsFlower />
        </div>
      </main>

      {/* Footer spacing for 4:3 composition feel */}
      <div className="h-24" />
    </div>
  )
}

export default App
