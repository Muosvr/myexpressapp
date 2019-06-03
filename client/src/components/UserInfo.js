import React, { Component } from 'react'

class UserInfo extends Component {
  state = {
    userName: ""
  }

  getUserInfo = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.setState({ userName: e.target.value })}
          placeholder="user name"
          type="text"
        />
        <button onClick={this.getUserInfo}>Get user info</button>
      </div>
    )
  }
}


export default UserInfo
