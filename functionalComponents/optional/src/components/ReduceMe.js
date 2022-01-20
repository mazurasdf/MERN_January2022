import React, { useReducer } from 'react';

const reducer = (state, action) => {
    const newState = {
        ...state,
        [action.target.name]: action.target.value
    }
    return newState;
}

const ReduceMe = (props) => {
    const [state, dispatch] = useReducer(reducer, {name:"",favoriteColor: ""});

    return(
        <div className="w-50 mx-auto m-5">
            <form>
                <input type="text" name="name" onChange={(event)=>dispatch(event)}/>
                <input type="text" name="favoriteColor" onChange={(event)=>dispatch(event)}/>
                <button type="submit" className='m-2 btn btn-success d-block mx-auto'>Submit</button>
            </form>
        </div>
    )
}

export default ReduceMe;