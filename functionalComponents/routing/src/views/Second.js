import React from 'react';
import {useParams} from 'react-router-dom';

const Second = (props) => {
    const {word, color} = useParams();

    const style = {
        backgroundColor: color,
        color: "white"
    }

    return(
        <div>
            yarrrr matey this be the second page!
            <h1 style={style}>your word is {word}</h1>
        </div>
    )
}

export default Second;