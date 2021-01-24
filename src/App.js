import React from "react";
import "./App.css";
import ValidationComponent from "./Validation/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends React.Component {
  state = {
    text: "",
    validationLength: 5,
  };
  onChangeTextHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  removeHandler = (index) => {
    this.setState({
      text: this.state.text
        .split("")
        .filter((letter, idx) => idx !== index)
        .join(""),
    });
  };

  render() {
    let output = this.state.text
      .split("")
      .map((letter, index) => (
        <CharComponent
          key={index}
          charValue={letter}
          click={() => this.removeHandler(index)}
        />
      ));
    return (
      <div>
        <input
          type="text"
          onChange={this.onChangeTextHandler}
          value={this.state.text}
        ></input>
        <p>Output: {this.state.text}</p>
        <ValidationComponent
          inputLength={this.state.text.length}
          validationLength={this.state.validationLength}
        />
        {output}
      </div>
    );
  }
}

export default App;
