import React from 'react'

function AllUsers() {
  const getAllUsers = () => {
    console.log("Getting all users")
  }
  return (
    <div>
      <h3>Get all users</h3>
      <button onClick={getAllUsers}>Get</button>
    </div>
  )
}

export default AllUsers;
