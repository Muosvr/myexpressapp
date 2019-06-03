import React, { Component } from 'react'

class UserRegistration extends Component {
  state = {
    userName: "",
    message: ""
  }

  registerUser = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>User registration</h3>
        <input
          onChange={e => this.setState({ userName: e.target.value })}
          placeholder="User name"
          type="text"
        />
        <input
          onChange={e => this.setState({ message: e.target.value })}
          placeholder="Message"
          type="text"
        />
        <button onClick={this.registerUser}>Submit</button>
      </div>
    )
  }
}

export default UserRegistration;
