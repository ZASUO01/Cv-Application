import React from 'react';
import TextItem from './TextItem';



const Credentials = () => {
    return(
        <div className="credentials">
            <div className="main-credentials">
                <TextItem text='First Name' cl="text-item-lg"/>
                <TextItem text='Last Name' cl="text-item-lg"/>
                <TextItem text='Age' cl="text-item-md"/>
                <TextItem text='Ocupation' cl="text-item-md"/>
            </div>
            <div className="secondary-credentials">
                <TextItem text='E-mail' cl="text-item-sm" icon='far fa-envelope'/>
                <TextItem text='Phone' cl="text-item-sm" icon='fas fa-phone'/>
                <TextItem text='Adress' cl="text-item-sm" icon='fas fa-map-marker'/>
                <TextItem text='Town/City' cl="text-item-sm" icon='far fa-building'/>
            </div>
        </div>
    )
}

export default Credentials;