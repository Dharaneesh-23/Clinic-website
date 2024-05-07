import { Alert } from '@mui/material'
import React, { Component } from 'react'
import { useState } from 'react'

function Step2Component({patientDetails,handleInputChange2}) {
    const slots = {
        "2024-05-05":[true,false,true,true,true,false,true,false],
        "2024-05-06":[true,true,false,false,true,false,true,false],
        "2024-05-07":[true,false,true,true,false,false,true,false],
        "2024-05-08":[true,false,true,true,true,false,true,false],
      }
      const s = ["09:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM"]
      const packages = ['Face Package','Laser Lift','Mommy Makeover','HairRX']
      const treatments =['Cosmetic Treatment','Moles and Skin','Medical Treatment','Anti Aging Treatment','Hair Transplantation',"Children's Dermatology"]
    // console.log(this.state.selectedDate)
    const today = new Date().toISOString().split('T')[0];
    return (
      <React.Fragment>
        <div className='pb-5' style={{borderRadius:"10px"}}>
          <div className='text-center'>
            <p className='header-text-custom1'> Select your preferred date</p>
            <h1 className='header-text-custome2' style={{textTransform:"uppercase"}}>Schedule Appointment</h1>
          </div>
          <Alert severity="info" className='display-center mx-5'>Slots dislayed are only for 5 days from today</Alert>
          <div className='row mt-5 mx-5'>
            <div className='col-md-6'>
                <input type='date' name='appointmentDate' className='input-field' id='soltDate' value={patientDetails.appointmentDate} onChange={handleInputChange2} style={{width:"100%"}} min={today}/>  
            </div>
            <div className='col-md-6'>
              <select id='soltTime' name='appointmentTime' className='input-field' value={patientDetails.appointmentTime} onChange={handleInputChange2} style={{width:"100%"}}>
                <option defaultValue={''}>Select Time</option>
                {Object.entries(slots).map(([item,index]) => {
                  // console.log(`${this.state.selectedDate} ? ${item} : ${this.state.selectedDate === item}`)
                  if(patientDetails.appointmentDate === item){
                    // console.log(`slot: ${item}`)
                    return(
                    slots[item].map((condition,i)=>{
                      // console.log(`array: [${s}]`)
                      return condition ? <option className='solts-active' value={s[i]} key={i}>{s[i]}</option> : 
                                          <option disabled value={s[i]} key={i} style={{background:"#e6e6e6"}} >{s[i]}</option>
                    }))
                    // console.log(`slot: ${item}`)
                  }
                })}
              </select>
            </div>
            <div className='col mt-3 pt-4'>
                <select aria-label='Package' name='appointmentPackage' value={patientDetails.appointmentPackage} onChange={handleInputChange2} id='patientPackage' className='input-field' >
                    <option defaultChecked value={'none'}>None</option>
                    <optgroup label='Packages'>
                    {packages.map((item,index)=>(
                        <option value={item} key={index}>{item}</option>
                    ))}
                    </optgroup>
                    <optgroup label='Treatments'>
                      {treatments.map((item,index)=>(
                          <option value={item} key={index}>{item}</option>
                      ))}  
                    </optgroup>
                </select>
            </div>   
            {/* <div className='col-md-6 mt-3'>
                <label>Treatment</label>
                <select aria-label='Treatment' name='appointmentTreatment' value={patientDetails.appointmentTreatment} onChange={handleInputChange2} id='patientTreatment' className='input-field' >
                    <option defaultChecked value={'none'}>None</option>
                    {treatments.map((item,index)=>(
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    )
  }

export default Step2Component
