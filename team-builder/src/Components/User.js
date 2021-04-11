import React from 'react';

// Imports the list of users in state from the App Component and prints them to the screen
const User = (props) => {
    const { listOfUsers } = props

    return (
        <div>
            {listOfUsers.map(user => {
                
               return (
                <div key={user.userName}>
                <p>{user.userName} has an email of {user.userEmail} and works as a {user.userRole}</p>
                </div>
               )
            })}
        </div>
    )
}

export default User;