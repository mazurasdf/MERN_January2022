import React, { useState } from 'react';

const FunctionalCounter = (props) => {
    // const {start} = props;
    const [counter, setCounter] = useState(props.start);
    const [hover, setHover] = useState(false);

    const style = {
        backgroundColor: "black",
        color: "white"
    }

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const onHoverHandler = () => {
        setHover(!hover);
    }

    return(
        <div style={hover ? style : {}} onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler}>
            <div>you clicked {counter} times!!! but now it's cool because it's functional</div>
            <button onClick={increaseCounter}>click me!!!</button>
        </div>
    )
}

export default FunctionalCounter;