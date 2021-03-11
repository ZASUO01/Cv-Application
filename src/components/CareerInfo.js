import React from 'react';
import {useState} from 'react';
import CareerItems from './CareerItems';
import AddData from './AddData';

const CarreerInfo = ({title, data, onAdd, onDelete}) => {
    const [showAdd, setShowAdd] = useState(false);

    return(
        <div className="carrer-info">
            <h1>{title}</h1>
            {showAdd ? (<AddData onAdd={onAdd} type={title} onSave={() =>  setShowAdd(!showAdd)}/>) : (<button onClick={() =>  setShowAdd(!showAdd)} className="btn-1">Add</button>)}
            {data.length > 0 && (<CareerItems careerItems={data} onDelete={onDelete}/>)}
        </div>
    )
}


export default CarreerInfo;