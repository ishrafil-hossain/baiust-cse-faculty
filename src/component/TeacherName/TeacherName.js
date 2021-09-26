import React from 'react';
import './TeacherName.css'

const TeacherName = (props) => {
    const { name, img } = props.teacherName;
    return (
        <div className="teacher-name-container">
            <img src={img} alt="" />
            <h3 className = "text">{name}</h3>
        </div>
    );
};

export default TeacherName;