import React from 'react';
import CareerItem from './CareerItem';

const CareerItems = ({careerItems, onDelete}) => {
    return(
        <>
            {careerItems.map((careerItem) => (
                <CareerItem key={careerItem.id} careerItem={careerItem} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default CareerItems;