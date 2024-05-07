import React, { Component,useEffect } from 'react'
import TopScrollButton from './TopScrollButton'
import Footer from './Footer'
import ComponentHeader from './ComponentHeader'

import ImageInfo from './assets/images/Figure about-doctor-img.jpg.png';
import { useMediaQuery } from 'react-responsive';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import FImage from './assets/images/face.png.png';
import BTImage from './assets/images/belly.png.png';
import BrestImage from './assets/images/breast.png.png';
import MTImage from './assets/images/men-head.png.png';
import HairImage from './assets/images/heade.png.png';
import NImage from './assets/images/nose.png.png';
import AboutCardComponent from './AboutCardComponent';
import { Link } from 'react-router-dom';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight';
import NavBarComp from './NavBarComp';
import Aos from 'aos';
import 'aos/dist/aos.css'

function AboutPage () {
  useEffect(()=>{
    Aos.init({duration:1500})
  })
    return (
      <div>
        <NavBarComp />
        <ComponentHeader cName='About' />
        <div className='about-info display-center' data-aos='fade-up'>
          <div className='card m-5' style={{backgroundColor:"#f2f2f2",maxWidth:"1100px",border:'none'}}>
            <div className='row'>
              <div className='col-md-6'>
                <Image fluid src={ImageInfo} alt='skin image' className='select-none' style={{height:"100%",width:"100%",objectFit:'cover'}}/>
              </div>
              <div className='col-md-6' style={{position:'relative',alignContent:'center'}}>
                <p className='header-text-custom1' style={{fontSize:"clamp(1.5rem,4vw,2.5rem)"}}>AARAM</p>
                <h1 className='header-text-custom2' style={{fontWeight:"initial",fontSize:"clamp(0.8rem,4vw,1.5rem)"}}>About our clinic</h1>
                <p className='mt-5' style={{textTransform:"capitalize",opacity:"0.8",fontSize:"clamp(0.8rem,4vw,1.3rem)"}}><span className='header-text-custom1 h5 pe-2'>Cheif:</span>Dr.Abhinesh N <span style={{fontWeight:"lighter",textTransform:"uppercase",fontSize:"clamp(0.5rem,4vw,1rem)"}}>mbbs.,md (dermatology)</span></p>
                <p className='about-info-rgcontainer my-5 px-4 ms-2'>Our clinic offers cutting-edge skincare solutions with personalized care. From cosmetic enhancements to medical dermatology, trust us for expert treatments tailored to your unique needs and concerns</p>
                <Link to={'/services'} className="pkg-btn" style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:"none"}}>
                  view Services
                  <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{fontSize:"small"}}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid' data-aos='fade-up'>
          <div className='row'>
            <div className='col-md-7 display-center'>
              <div className='about-container m-5 p-0'>
                <p className='header-text-custom1 p-0 m-0' style={{fontSize:"clamp(0.25rem,4vw,0.8rem)",}}>from our best Dermatologist</p>
                <h1 className='header-text-custom2 py-2'style={{fontSize:"clamp(1rem,4vw,2rem)"}}>What We Offer</h1>
                <p className='p-3 pe-5'>We offer a comprehensive range of skincare services tailored to your needs. From advanced cosmetic treatments to medical dermatology, our clinic specializes in enhancing and maintaining skin health. Our services include mole removal, laser therapy, anti-aging treatments, hair restoration, and pediatric dermatology. With state-of-the-art technology and a team of expert professionals, we provide personalized care to help you achieve your skincare goals.</p>
                <div className='container list-container'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <ul>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Acne Scarring</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Body Contoring</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Age Spots</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Brest Birth Marks</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>   Allergics</p></li>
                      </ul>
                    </div>
                    <div className='col-lg-6'>
                      <ul>  
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Scar Removels</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Hair Treatment</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Facial Redness</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Double Chin</p></li>
                      <li><p><FontAwesomeIcon icon={faAngleDoubleRight}/>  Angiofibromans</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='col-md-5 py-5' style={{backgroundColor:"#4d4d4d"}}>
              <div className='row display-center'>
              <AboutCardComponent image={BTImage} title={'Body Treatment'}/>
              <AboutCardComponent image={FImage} title={'Face Treatment'}/>
              </div>
              <div className='row display-center'>
              <AboutCardComponent image={BrestImage} title={'Breast Treatment'}/>
              <AboutCardComponent image={MTImage} title={'Mens Treatment'}/>
              </div>
              <div className='row display-center'>
              <AboutCardComponent image={HairImage} title={'Hair Treatment'}/>
              <AboutCardComponent image={NImage} title={'Nose Treatment'}/>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    )
  }


export default AboutPage
