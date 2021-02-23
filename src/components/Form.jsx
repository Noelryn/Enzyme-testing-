import React from "react"

const Form = props => {
  return(
    <form>
      <label htmlFor="weight"></label>
      <input type="number" required placeholder="Weight in KGs" name="weight" id="weight"/>

      <label htmlFor="height"></label>
      <input type="number" required placeholder="Height in CM" name="height" id="height"/>

      <button>Calculate BMI</button>
    </form>
  )
}

export default Form 