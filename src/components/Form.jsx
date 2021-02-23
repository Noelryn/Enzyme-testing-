import React from "react"

const Form = props => {
  return(
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor="weight"></label>
      <input type="number" required placeholder="Weight in KGs" name="weight" id="weight" onChange={props.onChangleHandler}/>

      <label htmlFor="height"></label>
      <input type="number" required placeholder="Height in CM" name="height" id="height" onChange={props.onChangleHandler}/>

      <button id='calculate'>Calculate BMI</button>
    </form>
  )
}

export default Form 