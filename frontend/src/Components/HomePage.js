import React, { Component } from 'react'
import logo from './assets/images/ARAMM_CHECK-removebg.png'
import NavBarComp from './NavBarComp'
import Herocomponent from './HomePageComponentes/Herocomponent'
import ConsultationSection from './HomePageComponentes/ConsultationSection'
import HomeTreatment from './HomePageComponentes/HomeTreatment'
import HomeWelcome from './HomePageComponentes/HomeWelcome'
import HomeTreatmentTypes from './HomePageComponentes/HomeTreatmentTypes'
import Footer from './Footer'
class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBarComp />
        <Herocomponent/>
        <ConsultationSection />
        <HomeTreatment />
        <HomeWelcome />
        <HomeTreatmentTypes />
        <Footer />
      </div>
    )
  }
}

export default HomePage
