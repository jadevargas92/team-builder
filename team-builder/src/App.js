import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Form from './Components/Form'
import User from './Components/User'

function App() {

  // Refreshes the Form Data to blank on Submit
  const initialUserFormData = {
    userName: '', 
    userEmail: '', 
    userRole: ''
  }

  // 2 sets of state, the user data and the list of users created after submit
  const [user, setUser] = useState(initialUserFormData);
  const [listOfUsers, setListOfUsers] = useState([])

  // When typing in the forms, setting the user state on userName, userEmail, userRole
  const onInputChange = evt => {
    setUser({
      ...user,
      [evt.target.name]: evt.target.value,
    })
  }

  // Function for what happens on submit - 1) Stops page refresh 2) creates a newUser, 3) sets user state to initial user form data(blanks, refreshes) 4) adds newUser to list of users 
  const onSubmit = evt => {
    // Stop the reload of the page
    evt.preventDefault()
    
    const newUser = {
      userName: user.userName,
      userEmail: user.userEmail,
      userRole: user.userRole,
    }

    setUser(initialUserFormData)
    setListOfUsers([...listOfUsers, newUser])
  }

  // Returns the User Form and the List of Users
  return (
    <div>
      <Form user={user} onInputChange={onInputChange} onSubmit={onSubmit}/>
      <User listOfUsers={listOfUsers} />
    </div>
  );
}

export default App;
