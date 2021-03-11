import React from 'react';
import {useState} from 'react';

const AddData = ({onAdd, type, onSave}) => {
    const [main, setMain] = useState('');
    const [second, setSecond] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        const time = type === "Skills" ? '' :from+' / '+to;
        onAdd({main, second, time});
        onSave();
        setMain(''),
        setSecond('');
        setFrom('');
        setTo('');
    }
    
    const getCamp1 = () => {
        if(type == 'Education') return 'University or School';
        else if(type == 'Work Experience') return 'Role';
        else return 'Skill'
    }

    const getCamp2 = () => {
        if(type == 'Education') return 'Degree';
        else if(type == 'Work Experience') return 'Company name'; 
    }

    return(
        <form className="add-data" onSubmit={(e) => onSubmit(e)}>
            <div className="add-ed-single">
                <label>{getCamp1()}</label>
                <input 
                    type='text'
                    value={main}
                    onChange={(e) => setMain(e.target.value)} 
                />
            </div>
            {type != 'Skills' && (<div className="add-ed-single">
                <label>{getCamp2()}</label>
                <input 
                    type='text'
                    value={second}
                    onChange={(e) => setSecond(e.target.value)} 
                />
                </div>)}
            
            {type != 'Skills'  && (<div className="add-ed-split">
                <div className="ed-split-sg">
                    <label>From</label>
                    <input 
                        type='text'
                        value={from}
                        onChange={(e) => setFrom(e.target.value)} 
                    />
                </div>
                <div className="ed-split-sg">
                    <label>To</label>
                    <input 
                        type='text'
                        value={to}
                        onChange={(e) => setTo(e.target.value)} 
                    />
                </div>
            </div>)}
            <input type="submit" value="Save" className="btn-1"/>
        </form>
    )
}

export default AddData;