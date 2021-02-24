import React, { Component } from "react"
import Form from "./components/Form"
import Message from "./components/Message"
import { calculateBmi } from "./helpers/bmiHelper"
class App extends Component {
  state = {
    system: "",
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: ""
  }

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value })

  onSubmitHandler = e => {
    e.preventDefault()
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height,
      this.state.system
    )
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage })
  }

  render() {
    return (
      <div>
        <Form
          system={this.state.system}
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
      </div>
    )
  }
}

export default App
