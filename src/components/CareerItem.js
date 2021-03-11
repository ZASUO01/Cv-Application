import React from 'react';

const CareerItem = ({careerItem, onDelete}) => {
    return(
        <div className="career-item">
            <div className="career-item-content">
                <p>{careerItem.main}</p>
                <p>{careerItem.second}</p>
                <p>{careerItem.time}</p>
            </div>
            <p style={deleteStlye} onClick={() => onDelete(careerItem.id)}><i className="fas fa-times"></i></p>
        </div>
    )
}

const deleteStlye = {
    color: '#EF4444',
    fontSize: '30px',
    cursor: 'pointer'
}

export default CareerItem;