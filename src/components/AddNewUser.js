import React from 'react';

const AddNewUser = ({card}) => {
    

    return(
        <div className= 'tc'> 
            <input className='pa1 ba br3  b--green bg-lightest-blue'
            placeholder= 'name'
            type = 'name'
            onChange = {card}>
            </input>
            <input className='pa1 ba br3  b--green bg-lightest-blue'
            placeholder= 'username'
            type = 'username'
            onChange = {card}>
            </input>
            <input className='pa1 ba br3 b--green bg-lightest-blue'
            placeholder= 'email'
            type = 'email'
            onChange = {card}>
            </input>
            
        </div>
      
    );
}

export default AddNewUser; 