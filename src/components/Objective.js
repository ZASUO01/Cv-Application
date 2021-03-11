import React, { useState } from 'react';
import AreaItem from './AreaItem';
const Objective = () => {
    const defalutText = 'Your objective simple description.'
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(defalutText);

    const onBtnClick = () => {
        setEditing(true)
    }

    const saveText = (text) => {
        if(text === '') setText(defalutText);
        else setText(text);
        setEditing(false);
    }
    
    return(
        <div className="objective">
            <div className="objective-head">
                <h1>Objective</h1>
                {!editing && <button className="btn-1" onClick={onBtnClick}>Edit</button>}
            </div>
            {editing && (<AreaItem onSave={saveText}/>)}
            <div className="objective-container">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Objective;