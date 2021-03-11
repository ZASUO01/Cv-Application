import React from 'react';
import {useState} from 'react';
import Credentials from './Credentials';
import Objective from './Objective';
import CareerInfo from './CareerInfo';


const Resume = () => {
    const [schools, setSchools] = useState([]);
    const [works, setWorks] = useState([]);
    const [skills, setSkills] = useState([]);

    const addSchool = (school) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newSchool = {id, ...school};
        setSchools([...schools, newSchool]);
    }
    
    const addWork = (work) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newWork = {id, ...work};
        setWorks([...works, newWork]);
    }

    const addSkill = (skill) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newSkill = {id, ...skill};
        setSkills([...skills, newSkill]);
    }

    const deleteSchool = (id) => {
        setSchools(schools.filter((school) => school.id !== id));
    }

    const deleteWork = (id) => {
        setWorks(works.filter((work) => work.id !== id));
    }

    const deleteSkill = (id) => {
        setSkills(skills.filter((skill) => skill.id !== id));
    }

    return(
        <div className="resume-container">
            <div className="resume">
                <Credentials />
                <Objective />
                <CareerInfo title="Education" data={schools} onAdd={addSchool} onDelete={deleteSchool} />
                <CareerInfo title="Work Experience" data={works} onAdd={addWork} onDelete={deleteWork}/>
                <CareerInfo title="Skills" data={skills} onAdd={addSkill} onDelete={deleteSkill}/>
            </div>  
        </div>
    )
}

export default Resume;