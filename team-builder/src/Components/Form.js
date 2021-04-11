import React from 'react'

const Form = (props) => {
    const { onInputChange, onSubmit } = props;
    const { userName, userEmail, userRole } = props.user 

    return (
        <form onSubmit={onSubmit}>
            <label>
                Name: 
                <input 
                    type='text'
                    name='userName'
                    onChange={onInputChange}
                    value={userName}
                />
            </label>
            <label>
                Email: 
                <input 
                    type='text'
                    name='userEmail'
                    onChange={onInputChange}
                    value={userEmail}
                />
            </label>
            <label htmlFor='userRole'>Role: </label>
            <select name="userRole" id="userRole" onChange={onInputChange} value={userRole}>
                <option value="">--Please choose an option--</option>
                <option value="Software Dev">Software Developer</option>
                <option value="Front End Engineer">Front End Engineer</option>
                <option value="Back End Engineer">Back End Engineer</option>
                <option value="Designer">Designer</option>
            </select>
            <button>Submit</button>
        </form>
    )
}

export default Form;
