import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import './Teacher.css';

const Teacher = (props) => {
    // console.log(props.teacher.id)
    const { id, img, name, designation, email, subject } = props.teacher;

    const icon = <FontAwesomeIcon icon={faGraduationCap} />

    return (
        <div className="teacher">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="teacher-info">
                <h3>Name : {name}</h3>
                <h4>Id : {id}</h4>
                <h4>Designation : {designation}</h4>
                <h4>E-mail : <span className = "teacher-email"> {email}</span></h4>
                <h4>Subject : {subject}</h4>
            </div>
            <div>
                <button onClick={() => props.buttonHandler(props.teacher)} className="btn-regular">{icon}  add to card </button>
            </div>
        </div>
    );
};

export default Teacher;
