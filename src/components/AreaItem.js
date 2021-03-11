import React from 'react';
import {useState} from 'react';

const AreaItem = ({onSave}) => {
    const defaultValue = 'Type your description here.'
    const [text, setText] = useState(defaultValue);

    const changeText = (e) => {
        setText(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault()
        if(e.target['area'].value === '') {
            setText(defaultValue)
            onSave('');
        }else{
            onSave(text);
        }
    }

    return(
        <form className="area-item" onSubmit={(e) => formSubmit(e)}>
            <textarea 
                name="area" 
                value={text} 
                onChange={(e) => changeText(e)}  
                autoFocus={true}>
            </textarea>
            <button className="btn-1">Save</button>
        </form>
    )
}

export default AreaItem;