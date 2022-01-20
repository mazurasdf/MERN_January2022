import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Search = (props) => {
    const history = useHistory();
    const [name, setName] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push("/pokemon/" + name);
    }

    return(
        <div className='w-50 mx-auto pt-4'>
            <form onSubmit={onSubmitHandler}>
                <input type="text" placeholder="who's that pokemon??" onChange={(event)=> setName(event.target.value)}/>
                <br/>
                <input type="submit" className='btn btn-lg btn-warning'/>
            </form>
        </div>
    )
}

export default Search;