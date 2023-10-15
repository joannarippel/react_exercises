
import React, { Component } from 'react';

class App extends Component {
  state = {
    inputData: "no data provided!",
  };

   handleChange = (e) => {
    const newValue = e.target.value;
    this.setState({ inputData: newValue});
  };

  render(){

    return(
      <div>
        <input type="text" onChange={this.handleChange} />
        <h1>{this.state.inputData || "no data provided!"}</h1>
      </div>     
     
    )
  }
}

export default App;

  
