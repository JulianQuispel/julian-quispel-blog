import React, { Component } from "react"

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(add) {
    console.log(add);

    this.setState(prevState => ({
      index: prevState.index += add
    }))
  }

  render() {
    let slide =
      this.state.index % 2 == 0 ? (
        <div
          style={{
            width: 250,
            height: 250,
            background: `pink`,
          }}
        ></div>
      ) : (
        <div
          style={{
            width: 250,
            height: 250,
            background: `blue`,
          }}
        ></div>
      )

    return (
      <div>
        {slide}
        <button onClick={() => this.handleClick(-1)}>Prev</button>
        <button onClick={() => this.handleClick(1)}>Next</button>
      </div>
    )
  }
}

export default Slider
