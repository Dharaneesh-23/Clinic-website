import React, { Component,useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import ComponentHeader from './ComponentHeader'
import NavBarComp from './NavBarComp'
import image1 from './assets/images/package1.png';
import image2 from './assets/images/package2.png';
import image3 from './assets/images/package3.png';
import image4 from './assets/images/package4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import Aos from 'aos';
import 'aos/dist/aos.css'
function Packagepage (){
  useEffect(()=>{
    Aos.init({duration:2000})
  }) ;
  const isMediumScreen = useMediaQuery({ minWidth: 768});
  // const Conste = ({cont}) => (
  //     <p className='text-center pt-3' style={{fontWeight:'lighter'}}>
  //       <FontAwesomeIcon icon={faCheck} /> {cont}    
  //     </p>
  //   );
    const CustomCard1 = ({img,title1,title2,content,c1,c2,c3}) =>{
      return(
      <div className='container display-center' data-aos='fade-up'>
      <div className='card mb-5' style={{width:"85%",backgroundColor:"#f2f2f2"}}>
        <div className='row'>
          <div className='col-md-6'>
            <img src={img} className='card-md-image-top' style={{width:"100%",height:"100%",objectFit:'fill'}} />
          </div>
          <div className='col-md-6'>
              <h2 className='header-text-custom2 text-center mt-3' style={{fontSize:"clamp(1.85rem,4vw,2.5rem"}}>{title1}</h2>
              <p className='header-text-custom1 text-center pt-0' style={{fontSize:"clamp(0.5rem,4vw,1rem"}}>{title2}</p>
              <p className='text-center p-3'>{content}</p>
              <div className='d-inline display-center'>
              <p className='text-center pt-4 px-5' style={{fontWeight:'lighter'}}>
                <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {c1}</span> &nbsp;&nbsp;&nbsp;
                <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {c2} </span> &nbsp;&nbsp;&nbsp;
                <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {c3} </span>
              </p>
              </div>
                <div className='display-center my-4'>
                <Link to={'/services'} className="pkg-btn" style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:"none"}}>
                  view Services
                  <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{fontSize:"small"}}/>
                </Link>
                </div>
          </div>
        </div>
      </div>
    </div>
    )}
    const CustomCard2 = ({img,title1,title2,content,c1,c2,c3}) =>{
      const dis1 = isMediumScreen ? (
        <div className='container display-center' data-aos='fade-up'>
        <div className='card mb-5' style={{width:"85%",backgroundColor:"#f2f2f2"}}>
          <div className='row'>
            <div className='col-md-6'>
                <h2 className='header-text-custom2 text-center mt-3' style={{fontSize:"clamp(1.85rem,4vw,2.5rem"}}>{title1}</h2>
                <p className='header-text-custom1 text-center pt-0' style={{fontSize:"clamp(0.5rem,4vw,1rem"}}>{title2}</p>
                <p className='text-center p-3'>{content}</p>
                <div className='d-inline display-center'>
              <p className='text-center pt-3 px-5' style={{fontWeight:'lighter'}}>
                <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {c1}</span> &nbsp;&nbsp;&nbsp;
                <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {c2} </span> &nbsp;&nbsp;&nbsp;
                <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {c3} </span>
              </p>
              </div>
                <div className='display-center my-4'>
                <Link to={'/services'} className="pkg-btn" style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:"none"}}>
                  view Services
                  <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{fontSize:"small"}}/>
                </Link>
                </div>
            </div>
            <div className='col-md-6'>
              <img src={img} style={{width:"100%",height:"100%",objectFit:'fill'}} />
            </div>
          </div>
        </div>
      </div>
      ):(
        <div className='container display-center' data-aos='fade-up'>
        <div className='card mb-5' style={{width:"85%",backgroundColor:"#f2f2f2"}}>
          <div className='row'>
            <div className='col-md-6'>
              <img src={img} className='card-image-top' style={{width:"100%",height:"100%",objectFit:'fill'}} />
            </div>
            <div className='col-md-6'>
                <h2 className='header-text-custom2 text-center mt-3' style={{fontSize:"clamp(1.85rem,4vw,2.5rem"}}>{title1}</h2>
                <p className='header-text-custom1 text-center pt-0' style={{fontSize:"clamp(0.5rem,4vw,1rem"}}>{title2}</p>
                <p className='text-center p-3'>{content}</p>
                <div className='d-inline display-center'>
              <p className='text-center pt-3 px-5' style={{fontWeight:'lighter'}}>
                <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {c1}</span> &nbsp;&nbsp;&nbsp;
                <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {c2} </span> &nbsp;&nbsp;&nbsp;
                <span className='d-inline-block'><FontAwesomeIcon icon={faCheck} /> {c3} </span>
              </p>
              </div>
                <div className='display-center my-4'>
                <Link to={'/services'} className="pkg-btn" style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:"none"}}>
                  view Services
                  <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{fontSize:"small"}}/>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </div>

      )
      return(
        dis1
    )}

    //rendering conpoment
    return (
      <div>
        <NavBarComp />
        <ComponentHeader cName='Packages' />
        <div className='container mt-3'>
          <h1 className='header-text-custom2 display-center mb-3'>our Packages</h1>
          <p className='display-center mb-5'>we offer a various set of skin care Packages in concerns for your skin</p>
        </div>
        <CustomCard1 
          img = {image1}
          title1 = "Face packages"
          title2 = "recommended for 30's"
          content = "Transform yourcomplexin with our curtaed face packages,tailored to  rejuvenate and enhance your natural"
          c1 = "3mins refnye/ defnye"
          c2 = "20 Units of Botox®"
          c3 = "Vibraderm With Infusion" />
          
          <CustomCard2 
          img = {image2}
          title1 = "Laser Lift"
          title2 = "Lines Disappear in Face"
          content = "Rejuvenate and tighten skin for a youthful appearance."
          c1 = "Max Fx CO2 Laser Full Face"
          c2 = "3 ml’s of Restylane®"
          c3 = "45 units of Botox ® Cosmetic" />

          <CustomCard1 
          img = {image4}
          title1 = "Hair RX"
          title2 = "Hair Loss Restoration"
          content = "Restore hair loss with our effective and personalized restoration solutions."
          c1 = "Max Fx CO2 Laser Full Face"
          c2 = "3 ml’s of Restylane®"
          c3 = "45 units of Botox ® Cosmetic" />

          <CustomCard2
          img={image3} 
          title1 = "Stretch Mark "
          title2 = "Getting back to Normal"
          content = "Erase stretch marks with our advanced removal treatments for smooth skin."
          c1 = "4 Treatments VelaShape II"
          c2 = "Re-Vitalize Chemical Peel"
          c3 = "Sublime/Refirme Treatment" />

        <Footer />
      </div>
    )
}


export default Packagepage
