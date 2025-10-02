export default function Nutrition() {
  return(
    <section className="nutrition container">
      <h2 className="section--title">Nutrition</h2>
      <p className="nutrition--text">The table shows nutritional values per serving without the additional fillings.</p>
      <table className="nutrition--table">
        <tr>
          <td>Calories</td>
          <td><span className="bold primary1">277kcal</span></td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td><span className="bold primary1">0g</span></td>
        </tr>
        <tr>
          <td>Protein</td>
          <td><span className="bold primary1">20g</span></td>
        </tr>
        <tr>
          <td>Fat</td>
          <td><span className="bold primary1">22g</span></td>
        </tr>
      </table>
    </section>
  )
}