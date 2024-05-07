import React, { Component , useEffect } from 'react'
import Footer from './Footer'
import ComponentHeader from './ComponentHeader'
import NavBarComp from './NavBarComp'
import CustomizedSteppers from './BookingComponents/Stepper';
import Aos from 'aos';
import 'aos/dist/aos.css'

function BookingPage (){
    useEffect(()=>{
      Aos.init({duration:2000})
    })
    return (
      <div>
        <NavBarComp />
        <ComponentHeader cName="Appointment" />
        <div data-aos="fade-up">
          <CustomizedSteppers />
        </div>
        <Footer />
      </div>
    )
  }

export default BookingPage
