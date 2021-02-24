import React from 'react';
import AddNewUser from './AddNewUser';
const SearchBox = ({searchfield, searchChange,addNew}) => {
    return(
        <div className= 'pa2'> 
             <input
                className='pa3 ba br3 b--green bg-lightest-blue'
                tupe = 'search'
                placeholder = 'search robots'
                onChange = {searchChange}
            />
            <AddNewUser card = {addNew}/>
        </div>
      
    );
}

export default SearchBox;