import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import TeacherCart from '../TeacherCart/TeacherCart';
import './Faculty.css';

const Faculty = () => {
    // using useState for control state 
    const [teachers, setTeachers] = useState([]);
    const [teacherCart, setTeacherCart] = useState([]);

    // load data 
    useEffect(() => {
        fetch('./faculty.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    // onclick button handler 
    const buttonHandler = (teacher) => {
        const count = [...teacherCart, teacher]
        setTeacherCart(count)
    }

    return (
        <div className="faculty-container">
            {/* pass the state in TeacherCart Component */}
            <div className="cart-container">

                <TeacherCart teacherCart={teacherCart} key={teacherCart.name}></TeacherCart>
            </div>

            <div className="teacher-container">
                {/* pass the teacher object, unique key, handler in Teacher Component  */}
                {
                    teachers.map(teacher => <Teacher
                        teacher={teacher}
                        key={teacher.id}
                        buttonHandler={buttonHandler}
                    ></Teacher>)
                }
            </div>

        </div>
    );
};

export default Faculty;