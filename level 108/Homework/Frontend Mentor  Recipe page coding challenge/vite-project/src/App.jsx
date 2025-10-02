import './App.css'
import RecipeInfo from './components/RecipeInfo'
import Ingredients from './components/Ingredients'
import Instructions from './components/Instructions'
import Nutrition from './components/Nutrition'

export default function App() {
  return (
    <>
      <main className='recipe-card bevel'>
        <RecipeInfo />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </main>
    </>
  )
}