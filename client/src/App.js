import React, { Component } from 'react';

class App extends Component {
  state = {
    userName: ""
  }

  getUserInfo = () => {
    console.log(this.state);
  }


  render() {
    return (
      <div className="App">
        <h2>My Express App</h2>
        <input
          onChange={e => this.setState({
            userName: e.target.value
          })}
          placeholder="user name"
          type="text"
        />
        <button onClick={this.getUserInfo}>Get user info</button>
      </div>
    );
  }

}

export default App;
