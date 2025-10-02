export default function RecipeInfo() {
  return(
    <section>
      <img className="recipe-info--img" src={'./src/img/omlette.jpg'} alt="omlette" width="800" height="400" />
      <div className="container">
        <h1 className="recipe-info--title">Simple Omelette Recipe</h1>
        <p className="recipe-info--text">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      </div>
      <div className="recipe-info--preparation container">
        <div className="container rose-white bevel">
          <h3 className="recipe-info--preparation__title">Preparation Time</h3>
          <ul className="recipe-info--preparation__list">
            <li className="recipe-info--preparation__list-item"><b>Total</b>: Approximately 10 minutes</li>
            <li className="recipe-info--preparation__list-item"><b>Preparation</b>: 5 minutes</li>
            <li className="recipe-info--preparation__list-item"><b>Cooking</b>: 5 minutes</li>
          </ul>
        </div>
      </div>
    </section>
  )
}