import React, {useRef, useState} from "react";

const InputGuess = (props) => {
    const [wordGuess, setWordGuess] = useState("");
    const [inputs, setInputs] = useState([
        useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)
    ])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        props.setSubmittedGuesses(prevState=>[...prevState,wordGuess]);
        setWordGuess("");
    }

    const onInputHandler = (event, i) => {
        console.log(i);
        inputs[i+1].current.focus();
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" onChange={(event)=>setWordGuess(event.target.value)} value={wordGuess} maxLength={5} minLength={5}/>
                <input type="submit" value="check word"/>
            </form>

            <div className="d-flex">
                <input type="text" ref={inputs[0]} maxLength={1} minLength={1} onChange={(event)=>onInputHandler(event,0)} />
                <input type="text" ref={inputs[1]} maxLength={1} minLength={1} onChange={(event)=>onInputHandler(event,1)} />
                <input type="text" ref={inputs[2]} maxLength={1} minLength={1} onChange={(event)=>onInputHandler(event,2)} />
                <input type="text" ref={inputs[3]} maxLength={1} minLength={1} onChange={(event)=>onInputHandler(event,3)} />
                <input type="text" ref={inputs[4]} maxLength={1} minLength={1} onChange={(event)=>onInputHandler(event,4)} />
            </div>
        </div>
    )
}

export default InputGuess;