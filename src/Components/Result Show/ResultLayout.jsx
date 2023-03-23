import React, { useState } from 'react';
import Result from './Result';
import Data from './Student.json';
import './Index.css'


const ResultLayout = () => {
    const [item, setItem] = useState({
        RollNo: 123456789,
        DOB: 'DOB',
    });



    const [show, setShow] = useState(123456789);
    const yourInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setItem((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        });

    }
    const myResult = () => { setShow(parseInt(item.RollNo)) }

    let AllRollNumber = Data.map((e) => {
        return e.PERSONAL.rollNo;
    });

    return (
        <>
            <div className="container main_container  ">
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-6 d-flex justify-content-center form_container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8">
                                <input
                                    className=' text-dark rounded-pill mt-3 ps-3 pe-3'
                                    type="number"
                                    placeholder='Roll No'
                                    name='RollNo'
                                    value={item.RollNo}
                                    onChange={yourInput} />
                                <br />
                                <button className='btn btn-warning rounded-pill ps-3 pe-3 mb-5 w-5 mt-4' onClick={myResult}> Search </button>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        {(AllRollNumber.includes(show)) ? <Result myRollNo={show} /> : <h1>" Result can not find, check roll number"</h1>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ResultLayout;
