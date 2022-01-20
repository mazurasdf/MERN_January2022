import React, {useContext} from 'react';
import BigState from '../contexts/BigState';

const Display = (props) => {
    const {form, state} = useContext(BigState);

    return(
        <div>
            <h1>your context: {form}</h1>
            <h1>the other state: {state}</h1>
        </div>
    )
}

export default Display;