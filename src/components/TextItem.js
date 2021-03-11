import React from 'react';
import {useState} from 'react';

const TextItem = ({text, cl, icon}) => {
    const [editing, setEditing] = useState(false);
    const [text_st, setText] = useState(text);

    const handleClick = () => {
        setEditing(!editing);
    }

    const inputChange = (e) => {
        setText(e.target.value);
    }

    const onEnter = (e) => {
        if(e.keyCode === 13) save();
    }

    const save = () => {
        setEditing(!editing);
        if(text_st === ''){
            setText(text)
        }
    }

    return(
        editing ? 
        <input 
            className="text-item-input"
            type="text"
            placeholder={text}
            value={text_st}
            autoFocus={true}
            onChange={inputChange}
            onBlur={save}
            onKeyDown={onEnter}
        /> 
        : 
        <p
            onClick={handleClick}
            className={cl}
            
        ><i className={icon ? icon : ''}></i>  {text_st}</p>
        
    )
}

export default TextItem;