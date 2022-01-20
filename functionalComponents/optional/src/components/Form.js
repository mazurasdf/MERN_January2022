import React, {useContext} from 'react';
import BigState from '../contexts/BigState';

const Form = (props) => {
    const {form, setForm} = useContext(BigState);

    return(
        <div className='m-5'>
            <input className="form-control" onChange={(event)=>setForm(event.target.value)}/>
        </div>
    )
}

export default Form;