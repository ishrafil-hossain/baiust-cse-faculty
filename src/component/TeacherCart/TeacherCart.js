import React from 'react';
import TeacherName from '../TeacherName/TeacherName';
import './TeacherCart.css'

const TeacherCart = (props) => {
    const { teacherCart } = props

    let totalSub = 0;
    for (const subject of teacherCart) {
        totalSub = totalSub + subject.subject;
    }

    return (
        <div className="teacher-cart">
            <div className = "cart-table">
                <h1>Faculty Table</h1>
                <h3>Faculty added : {teacherCart.length} </h3>
                <h3>Total Subjects : {totalSub}</h3>
            </div>
            <div className="teacher-added">
                {
                    props.teacherCart.map(teacherName => <TeacherName
                        teacherName={teacherName}
                        key={teacherName.name}
                    ></TeacherName>)
                }
            </div>
        </div>
    );
};

export default TeacherCart;