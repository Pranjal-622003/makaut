"use client"
import React, { useState } from 'react';
import Pdfviewer from './pdfviewer';

const Herosection = () => {
    const subjectData = {
        CSE: {
            SEM1: ['SubjectA', 'SubjectB', 'SubjectC'],
            SEM2: ['SubjectD', 'SubjectE', 'SubjectF'],
        },
        IT: {
            SEM1: ['SubjectG', 'SubjectH', 'SubjectI'],
            SEM2: ['SubjectJ', 'SubjectK', 'SubjectL'],
        },
        ECE: {
            SEM1: ['SubjectM', 'SubjectN', 'SubjectO'],
            SEM2: ['SubjectP', 'SubjectQ', 'SubjectR'],
        },
        FT: {
            SEM1: ['SubjectS', 'SubjectT', 'SubjectU'],
            SEM2: ['SubjectV', 'SubjectW', 'SubjectX'],
        },
    };

    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [subjects, setSubjects] = useState([]);

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
        if (semester && event.target.value) {
            setSubjects(subjectData[event.target.value][semester]);
        } else {
            setSubjects([]);
        }
    };

    const handleSemesterChange = (event) => {
        setSemester(event.target.value);
        if (department && event.target.value) {
            setSubjects(subjectData[department][event.target.value]);
        } else {
            setSubjects([]);
        }
    };
    
    const [ispdf, setpdf] = useState(false);

    

    return (
        <>
       {!ispdf && ( <div>
            <div className="flex flex-row px-4 py-4 space-x-5 place-items-center mx-9 my-7 place-content-center">
                <select
                    className="w-full max-w-xs custom-select"
                    value={department}
                    onChange={handleDepartmentChange}
                >
                    <option disabled value="">
                        Choose Your Department
                    </option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="FT">FT</option>
                </select>

                <select
                    className="w-full max-w-xs custom-select"
                    value={semester}
                    onChange={handleSemesterChange}
                >
                    <option disabled value="">
                        Choose Your Semester
                    </option>
                    <option value="SEM1">SEM 1</option>
                    <option value="SEM2">SEM 2</option>
                </select>
            </div>

            {subjects.length > 0 && (
                <div className="my-4 mx-9">
                    <h2 className="text-lg font-bold">Subjects:</h2>
                    <ul>
                        {subjects.map((subject, index) => (
                            <li onClick={()=>setpdf(true)} key={index}>{subject}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>)}
        {ispdf && <Pdfviewer/>}
        </>
    );
};

export default Herosection;


