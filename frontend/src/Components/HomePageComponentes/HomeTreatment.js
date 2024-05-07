import React , { useEffect } from 'react'
import image1 from '../assets/images/Section service-img-cap1.jpg.png';
import image2 from '../assets/images/Section home-service-2.jpg.png';
import image3 from '../assets/images/Section home-service-3.jpg.png';
import image4 from '../assets/images/Section home-service-4.jpg.png';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

function HomeTreatment() {
    const isSmallScreen = useMediaQuery({minWidth:576})
    const style = isSmallScreen ? {width:"11rem"} : {width:"20rem"}
    useEffect(()=>{
        Aos.init({duration:2000})
    })
  return (
    <div className='home-treatment py-5' data-aos='fade-up'>
        <div>
            <p className='header-text-custom1 text-center'>healthy skin and natural</p>
        </div>
        <div>
            <p className='header-text-custom2 text-center mb-0'>treatments and services</p>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 col-lg-3 col-sm-6 col-xs-6 display-center'>
                    <div className="card mt-5 border-0" style={style}>
                        <img src={image1} className="card-img-top " alt="card image" style={{height:"12rem",objectFit:"contain"}}/>
                        <div className="card-body pt-0">
                            <p className="header-text-custom1" style={{fontSize:"clamp(0.2rem,4vw,0.5rem)"}}>Your appearance</p>
                            <h5 className="card-header-text">Cosmetic</h5>
                            <div className='border-bottom-h' />
                        </div>
                        <div className="card-body">
                            <p className='common-p-text'>Unlock your true beauty potential with our range of cosmetic enhancements and services.</p>
                            <Link to={'/services'} className="treatment-btn" style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:"none"}}>
                                view services
                                <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{fontSize:"small"}}/>    
                            </Link>
                        </div>
                    </div>                
                </div>
                <div className='col-md-3 col-lg-3 col-sm-6 col-xs-6 display-center'>
                    <div className="card mt-5 border-0" style={style}>
                        <img src={image2} className="card-img-top " alt="card image" style={{height:"12rem",objectFit:"contain"}}/>
                        <div className="card-body pt-0">
                            <p className="header-text-custom1" style={{fontSize:"clamp(0.2rem,4vw,0.5rem)"}}>Skin problems</p>
                            <h5 className="card-header-text">Moles and Skin</h5>
                            <div className='border-bottom-h' />
                        </div>
                        <div className="card-body">
                            <p className='common-p-text'>Achieve blemish-free skin with our professional mole removal and skincare solutions.</p>
                            <Link to={'/services'} className="treatment-btn" style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:"none"}}>
                                view services
                                <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{fontSize:"small"}}/>    
                            </Link>
                        </div>
                    </div>  
                </div>
                <div className='col-md-3 col-lg-3 col-sm-6 col-xs-6 display-center'>
                    <div className="card mt-5  border-0" style={style}>
                        <img src={image3} className="card-img-top " alt="card image" style={{height:"12rem",objectFit:"contain"}}/>
                        <div className="card-body pt-0">
                            <p className="header-text-custom1" style={{fontSize:"clamp(0.2rem,4vw,0.5rem)"}}>Skin, Hair and Nail</p>
                            <h5 className="card-header-text">Medical</h5>
                            <div className='border-bottom-h' />
                        </div>
                        <div className="card-body">
                            <p className='common-p-text'>Achieve blemish-free skin with our professional mole removal and skincare solutions.</p>
                            <Link to={'/services'} className="treatment-btn" style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:"none"}}>
                                view services
                                <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{fontSize:"small"}}/>    
                            </Link>
                        </div>
                    </div>  
                </div>
                <div className='col-md-3 col-lg-3 col-sm-6 col-xs-6 display-center'>
                    <div className="card border-0 mt-5" style={style}>
                        <img src={image4} className="card-img-top " alt="card image" style={{height:"12rem",objectFit:"contain"}}/>
                        <div className="card-body pt-0">
                            <p className="header-text-custom1" style={{fontSize:"clamp(0.2rem,4vw,0.5rem)"}}>Wrinkles and lines</p>
                            <h5 className="card-header-text">Anti Aging</h5>
                            <div className='border-bottom-h' />
                        </div>
                        <div className="card-body">
                            <p className='common-p-text'>Achieve ageless beauty with our science-backed anti-aging treatments and techniques.</p>
                            <Link to={'/services'} className="treatment-btn" style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:"none"}}>
                                view services
                                <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{fontSize:"small"}}/>    
                            </Link>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTreatment
