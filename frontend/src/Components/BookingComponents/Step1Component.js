import { Box } from '@mui/system'
import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'
import { useState } from 'react'
import { TextareaAutosize } from '@mui/material'

function Step1Component({patientDetails,handleInputChange}){

    // const [patientDetails,setPatientDetails] = React.useState({
    //     Fname:"a",
    //     Lname:"s",
    //     Contact:"d",
    //     Mail:"f",
    //     Address:"g",
    //   })

    //   const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setPatientDetails(prevDetails => ({
    //         ...prevDetails,
    //         [name]: value
    //     }));
    // };

    const onSubmit= (event) =>{
        event.preventDefault();
        alert(`${patientDetails.Fname}`)
    }
    

    return (
      <React.Fragment>
        <div className='pb-5' style={{borderRadius:"10px"}}>
            <div className='text-center'>
              <p className='header-text-custom1'>Enter the patient details</p>
              <h1 className='header-text-custome2' style={{textTransform:"uppercase"}}>Patient Details</h1>
            </div>
            <form onSubmit={onSubmit}>
                <div className='row mx-5 mt-4'>
                    <div className='col-md-6 mt-3'>
                        {/* <label>Patient name</label> */}
                        <input type='text' id='patientName' name='Fname' onChange={handleInputChange} value={patientDetails.Fname} placeholder='Patient Name' className='input-field mt-3' />
                    </div> 
                    <div className='col-md-6 mt-3'>   
                        {/* <label>Patient Last Name</label> */}
                        <input type='text' id='patientLastName' name='Lname' onChange={handleInputChange} value={patientDetails.Lname} placeholder='Last name' className='input-field mt-3' />
                    </div>
                    <div className='col-md-6 mt-3'>   
                        {/* <label>Contact</label> */}
                        <input type='tel' id='patientContact' name='Contact' onChange={handleInputChange} value={patientDetails.Contact} placeholder='Phone number' className='input-field mt-3' />
                    </div>
                    <div className='col-md-6 mt-3'>   
                        {/* <label>Email ID</label> */}
                        <input type='mail' id='patientMailId' name='Mail' onChange={handleInputChange} value={patientDetails.Mail} placeholder='Mail ID' className='input-field mt-3' />
                    </div>
                    <div className='col mt-3'>
                        <TextareaAutosize minRows={3} name='Address' onChange={handleInputChange} value={patientDetails.Address} placeholder='Address' className='input-field mt-3'/>    
                    </div>
                </div>
            </form>
        </div>        
      </React.Fragment>
    )
  }


export default Step1Component
