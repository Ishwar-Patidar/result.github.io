import React from 'react'
import Data from './Student.json'
const Result = (props) => {

    const rolln = Data.filter((e) => {
        return e.PERSONAL.rollNo === props.myRollNo;
    });

    let Total = 0;
    let MaximumMArks = 0;
    rolln.map((e) => {
        return e.MARKS.map((T) => {
            return (
                Total += T[" MARKS"] + T[" PRACTICALMARKS "],
                MaximumMArks += T[" MAXMARK "]
            )
        })
    });

    let Percen = (Total * 100 / 600).toFixed(2);

    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <span className="text-dark"><h1>High School, Alhed</h1></span>
                    <p className="Address"> Village- Alhed, Teh- Manasa, Dist- Neemuch, MP</p>
                </div>

                {
                    rolln.map((e) => {
                        return <>
                            <div className="row" key={e[" id "]} >
                                <div className="col-8">
                                    <span> <b> NAME:</b> </span> <span> {e.PERSONAL.name} </span> <br />
                                    <span> <b> DOB:</b> </span> <span> {e.PERSONAL.DOB} </span><br />
                                    <span> <b> Roll No:</b> </span> <span> {e.PERSONAL.rollNo} </span><br />
                                </div>
                                <div className="col-4 d-flex justify-content-end  1">
                                    <div className="img-container  me-2">
                                        <img className='img img-fluid' src={e.PERSONAL.Image} alt={e.PERSONAL.name} />
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }






                <hr />
                <div className="row overflow-auto">

                    <table className='table  table-bordered table-striped table-responsive text-center '>
                        <tbody>
                            <tr className='text-bg-primary' rowSpan={2}>
                                <td colSpan={4}></td>
                                <td colSpan={3}>CONTAIN MARKS</td>
                                <td></td>
                            </tr>

                            <tr className='text-bg-primary'>
                                <td  >SUBJECT</td>
                                <td >MAX MARKS</td>
                                <td >MIN THEORY</td>
                                <td >MIN PRACTICAL</td>
                                <td >THEORY</td>
                                <td >PRACTICAL</td>
                                <td >TOTAL</td>
                                <td >REMARKS</td>
                            </tr>

                            {rolln.map((Res) => {
                                return Res.MARKS.map((Response) => {

                                    let color = (Response[" MARKS"] + Response[" PRACTICALMARKS "]) >= 75 ? " bg-success" : (Response[" MARKS"] + Response[" PRACTICALMARKS "]) < 75 && (Response[" MARKS"] + Response[" PRACTICALMARKS "]) > 33 ? " bg-warning" : "bg-danger"

                                    return (<tr key={Response[" id "]}>
                                        <td> {Response[" SUBNAME "]} </td>
                                        <td> {Response[" MAXMARK "]} </td>
                                        <td> {Response[" MINTHEORY "]} </td>
                                        <td> {Response[" MINPRACTICAL "]} </td>
                                        <td> {Response[" MARKS"]} </td>
                                        <td> {Response[" PRACTICALMARKS "]} </td>
                                        <td className={color}> {Response[" MARKS"] + Response[" PRACTICALMARKS "]} </td>
                                        <td> {(Response[" MARKS"] + Response[" PRACTICALMARKS "]) > 75 ? " DIST" : ""} </td>
                                    </tr>)

                                })
                            })}


                            <tr className='text-end'>
                                <td className='text-bg-primary pe-5' colSpan={2} >{MaximumMArks}</td>
                                <td className='text-bg-info pe-5' colSpan={5}> {Total} </td>
                                <td>{(Percen > 85) ? " A+ Grade" : (Percen < 85 && Percen > 75) ? " A Grade" : (Percen < 75 && Percen > 60) ? " B Grade" : (Percen < 60 && Percen > 33) ? " C Grade" : "D grade"}</td>
                            </tr>
                            <tr>
                                <td colSpan={7}> Total Percentage : {Percen} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Result;