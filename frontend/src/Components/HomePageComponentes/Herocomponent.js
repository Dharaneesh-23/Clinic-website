import React , {useEffect} from 'react'
import skinImage from '../assets/images/Hero-image1.png';
import { Image } from 'react-bootstrap';
import bootstrap from 'bootstrap';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Herocomponent() {
  useEffect(()=>{
    Aos.init({duration:2000});
  })
  return (
    <div data-aos='fade-up'>
      <section className='hero-component'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 justify-center d-flex flex-column ps-5 hero-component-content' style={{}}>
            <div className='hero-component-center ps-3' style={{textTransform:"capitalize",letterSpacing:'2px', fontFamily:"monospace"}}>
              <p>Advanced skin care</p>
            </div>
            <div>
              <h1>Get the best skin treatments</h1>
            </div>
            <div 
            style={{display:'flex',position:'relative',justifyContent:"center", paddingTop:"10px"}}>
              <Link to={'/services'} className='hero-btn ' style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:'none'}}>Services</Link>
            </div>
          </div>
          <div className='col-sm-6' style={{display:'flex',position:'relative',justifyContent:'center',alignItems:"center"}}>
            <Image fluid src={skinImage} alt='skin image' className='point-events-none select-none ms-3 mt-3' style={{objectFit:'cover'}}/>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Herocomponent

