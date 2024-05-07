import React ,{useEffect} from 'react'
import Footer from './Footer'
import ComponentHeader from './ComponentHeader'
import NavBarComp from './NavBarComp'
import { Button, Image } from 'react-bootstrap'
import image1 from './assets/images/Section service-img1.jpg.png';
import image2 from './assets/images/Section service-2.jpg.png';
import image3 from './assets/images/Section service-3.jpg.png';
import image4 from './assets/images/Section service-4.jpg.png';
import image5 from './assets/images/Section service-5.jpg.png';
import image6 from './assets/images/Section service-6.jpg.png';
import img1 from './assets/images/pricing-img1.jpg.png';
import img2 from './assets/images/service-price-table-2.jpg.png';
import img3 from './assets/images/service-price-table-3.jpg.png';
import img4 from './assets/images/service-price-table-4.jpg.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight,faCheck} from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css'



function ServicesPage() {

  const header = ['Cosmetic Treatment','Moles and Skin','Medical Treatment','Anti Aging Treatment','Hair Transplantation',"Children's Dermatology"];
  const description = ['Elevate your beauty with our range of cosmetic treatments designed to enhance features and rejuvenate appearance for lasting confidence.',
                        'Elevate your beauty with our range of cosmetic treatments designed to enhance features and rejuvenate appearance for lasting confidence.',
                        'Experience top-notch medical treatment encompassing hair, skin, and nail care. Our skilled professionals offer personalized solutions for various conditions, ensuring comprehensive care and optimal wellness',
                        'Rediscover youthful radiance with our advanced anti-aging treatments. From innovative skincare regimens to rejuvenating procedures, our clinic offers personalized solutions to combat signs of aging effectively, helping you achieve timeless beauty and confidence.',
                      'Regain confidence with our hair transplantation services. Our skilled team provides personalized solutions for natural-looking results, ensuring a seamless and successful journey to thicker, fuller hair.',
                    'Regain confidence with our hair transplantation services. Our skilled team provides personalized solutions for natural-looking results, ensuring a seamless and successful journey to thicker, fuller hair.'];
  const images = [image1,image2,image3,image4,image5,image6]
  const cardDet = [{
    imagee:img1,
    def:"Recommended for 30’s",
    title:"Face Packages",
    price:"77.99",
    con1:"3 mls of Refyne/Defyne",
    con2:"20 Units of Botox®",
    con3:"Vibraderm With Infusion",
  },{
    imagee:img2,
    def:"Lines Disappear in Face",
    title:"Laser Lift",
    price:"89.99",
    con1:"Max Fx CO2 Laser Full Face",
    con2:"3 ml’s of Restylane®",
    con3:"45 units of Botox ® Cosmetic",
  },{
    imagee:img3,
    def:"Getting back to Normal",
    title:"Mommy Makeover",
    price:"69.99",
    con1:"4 Treatments VelaShape III",
    con2:"Re-Vitalize Chemical Peel",
    con3:"Sublime/Refirme Treatment",
  },{
    imagee:img4,
    def:"Hair Loss Restoration",
    title:"HairRX",
    price:"39.99",
    con1:"3 mls of Refyne/Defyne",
    con2:"20 Units of Botox®",
    con3:"Vibraderm With Infusion",
  }]
  useEffect(()=>{
    Aos.init({duration:2000})
  })


  const Card = ({header,description,image}) =>{
      return(
        <div className='card p-2' style={{border:"none"}} data-aos='fade-up'>
          <Image src={image} className='card-img-top'/>
          <h1 className='header-text-custom2 pt-2' style={{fontSize:"clamp(1.5rem,4vw,2.5rem)",color:'#d966ff'}}>{header}</h1>
          <div className='border-bottom-h' />
          <p className='p-3'>{description}</p>
          <div className='mb-0'>
            <Link as={Link} to={'/appointment'} style={{textDecoration:"none"}}>
              <button className='navigation-btn display-center mb-5'>
                  <FontAwesomeIcon icon={faChevronCircleRight} className='navigation-btn-arrow'></FontAwesomeIcon>
                  <p className='mb-0'>Book Appointment</p>
              </button>
            </Link>
          </div>
        </div>
      )
  }

  const PackageCard = ({imagees,deff,titlee,pricee,cont1,cont2,cont3}) =>{
    return(
      <div className='package-card my-2' data-aos='fade-up'>
        <Image src={imagees} alt='untitled' className='m-5'style={{width:"80px"}}/>
        <div className="package-card-inner align-center">
          <p>{deff}</p>
          <h1 className='header-text-custom2' style={{fontSize:'clamp(0.5rem,4vw,2rem)'}}>{titlee}</h1>
          <p className='package-price'>₹ {pricee}</p>
        </div>
        <p className='text-center pt-3'><FontAwesomeIcon icon={faCheck} /> {cont1}</p>
        <p className='text-center'><FontAwesomeIcon icon={faCheck} /> {cont2}</p>
        <p className='text-center'><FontAwesomeIcon icon={faCheck} /> {cont3}</p>
        <Link to={'/appointment'} style={{textDecoration:'none'}}>
          <button className='treatment-btn mb-5'>schudle now</button>
        </Link>
      </div>
    )
  }

  return (
      <div>
        <NavBarComp />
        <ComponentHeader cName="Services" />
        <div>
          <div className='container display-center py-5'>
            <div className='row'>
              {header.map((item, index) => (
              <div className='col-sm-12 col-md-6' key={item}>
                <Card header={header[index]} description={description[index]} image={images[index]} />
              </div>
              ))}
            </div>
          </div>
          <div className='container text-center mb-5'>
            <p className='header-text-custom1'>With Best Price</p>
            <h1 className='header-text-custom2'>Our Packages</h1>
            <div className='container'>
              <div className='row'>
              {cardDet.map((item, index) => (
                <div className='col-sm-6 col-md-6 col-lg-3' key={index}>
                <PackageCard imagees={item.imagee} deff={item.def} titlee={item.title} pricee={item.price} cont1={item.con1} cont2={item.con2} cont3={item.con3} />
              </div>
              ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

export default ServicesPage
