import React from "react";

const Form = props => {

  const Weight = props.system == "metric" ? "Weight in kgs" : "Weight in lbs"
  const Height = props.system == "metric" ? "Height in cm" : "Height in inches"

  return (
    <form onSubmit={props.onSubmitHandler}>

      <select name="system" id="select-method" onChange={props.onChangeHandler}>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>

      <label htmlFor="weight">Weight</label>
      <input type="number" required placeholder="Weight" value={props.weight} name="weight" id="weight" onChange={props.onChangeHandler}/>

      <label htmlFor="height">Height</label>
      <input type="number" required placeholder="Height" value={props.height} name="height" id="height" onChange={props.onChangeHandler}/>

      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};

export default Form;