import React from 'react';

const SubmittedGuess = (props) => {
    return(
        <div>
            {
                props.guess.split("").map((letter, i)=>{
                    let classes = "letter";
                    const index = props.answer.indexOf(letter);
                    if(index < 0) classes += " notInWord";
                    else if (props.answer[i] === letter) classes += " correctLetter";
                    else classes += " sortaCorrect";

                    return <span key={i} className={classes}>{letter}</span>
                })
            }
        </div>
    )
}

export default SubmittedGuess;