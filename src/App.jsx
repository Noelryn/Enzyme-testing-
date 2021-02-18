import React, { Component } from "react"

class App extends Component {
  render() {
    return (
      <form>
        <label htmlFor="weight">Weight</label>
        <input type="number" required placeholder="Weight in KG" name="weight" id="weight"/>

        <label htmlFor="height">Height</label>
        <input type="number" required placeholder="Height in CM" name="height" id="height"/>

        <button id="calculate">Calculate</button>
    </form>
    )
  }
}

export default App;
