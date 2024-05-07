import React, { Component } from 'react'
import Herocomponent from '../HomePageComponentes/Herocomponent'
import { Image } from 'react-bootstrap'
import image from '../assets/images/appointment-image2.jpeg'

function Step3Component({patientDetails,packageDetails}){
    return (
      <React.Fragment>
        <div className='container mb-5' style={{maxWidth:'1000px',
                                                backgroundImage:`linear-gradient(85deg,rgba(242, 242, 242, 1),rgba(179, 179, 179, 0.85),rgba(230, 230, 230,0.75)),url(${image})`,
                                                backgroundRepeat:"no-repeat",
                                                backgroundSize:"cover"}}>
            <div className='text-center pb-3'>
                <p className='header-text-custom1'>Conform your details</p>
                <h1 className='header-text-custome2' style={{textTransform:"uppercase"}}>Confirmation</h1>
            </div>
            <div className='row'>
                <div className='col' style={{display:"flex",flexDirection:'column',justifyContent:"space-around"}}>
                    <div className='d-inline'>
                        {/* <label className='details-label'>First Name: </label> */}
                        <h2 className='details-info-rgcontainer text-center'>Patient Details</h2>
                        <p className='ms-3'><span className='details-label pe-3'>First Name&ensp;&ensp;: </span>{patientDetails.Fname}</p>
                        <p className='ms-3'><span className='details-label pe-3'>Last Name&ensp;&ensp;&ensp;: </span>{patientDetails.Lname}</p>
                        <p className='ms-3'><span className='details-label pe-3'>Contact &ensp;&ensp;&ensp;&ensp;&ensp;: </span>{patientDetails.Contact}</p>
                        <p className='ms-3'><span className='details-label pe-3'>Mail ID &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: </span>{patientDetails.Mail}</p>
                        <p className='ms-3'><span className='details-label pe-3'>Address &ensp;&ensp;&ensp;&ensp;&ensp;: </span>{patientDetails.Address}</p>
                    </div>
                    <div className='d-inline'>
                        <h2 className='details-info-rgcontainer text-center mt-4'>Appointment Details</h2>
                        {/* <label className='details-label'>First Name: </label> */}
                        <p className='ms-3'><span className='details-label pe-3'>Date&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: </span>{packageDetails.appointmentDate}</p>
                        <p className='ms-3'><span className='details-label pe-3'>Time&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;: </span>{packageDetails.appointmentTime}</p>
                        <p className='ms-3'><span className='details-label pe-3'>Service Type&ensp;: </span>{packageDetails.appointmentPackage}</p>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }

export default Step3Component
