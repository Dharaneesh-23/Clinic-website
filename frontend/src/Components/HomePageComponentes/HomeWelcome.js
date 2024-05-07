import React ,{ useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import bgimg from '../assets/images/Figure treatment-img.jpg.png';
import image1 from '../assets/images/img1.jpeg';
import image2 from '../assets/images/img2.jpeg';
import image3 from '../assets/images/img3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css'

function HomeWelcome() {
    useEffect(()=>{
        Aos.init({duration:1500})
    })
    const isMediumScreen = useMediaQuery({minWidth: 768});
    const imgstyle = isMediumScreen? {
            display:"flex",
            positon:"relative",
            objectFit:'fill',
            width:"30vw",
            height:"700px"
        }:{
            display:"none"
        }
    const welcomestyle = isMediumScreen ? 'home-welcome-content' : 'home-welcome-content2'
    const overstyle = isMediumScreen ? {positon:'relative',alignItems:"center",display:"flex",marginLeft:"-150px",zIndex:"0"} : {positon:'relative',alignItems:"center",display:"flex",zIndex:"0"}

  return (
    <div className='home-welcome' data-aos='fade-up'>
      <div className='container mx-0 my -5'>
            <div className='row'>
            <div className='col-md-4'>
                <div style={{display:"flex",positon:'relative',alignItems:'center',justifyContent:"center"}}>
                    <img src={bgimg} style={imgstyle}/>
                    {/* <img src={image1} style={{positon:'relative',alignItems:"center",display:"flex",marginLeft:"-150px",width:"400px",height:"400px"}}/> */}
                    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" style={overstyle}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={image3} className="d-block" alt="..." style={{width:"280px",height:"500px",objectFit:"fill"}}/>
                            </div>
                            <div className="carousel-item">
                            <img src={image2} className="d-block" alt="..." style={{width:"280px",height:"500px",objectFit:"fill"}}/>
                            </div>
                            <div className="carousel-item">
                            <img src={image1} className="d-block" alt="..." style={{width:"280px",height:"500px",objectFit:"fill"}}/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
            {/* <div className='col-md-2' style={{positon:'relative',alignItems:"center",display:"flex"}}>
                <img src={image1} />
            </div> */}
            <div className='col-md-8'>
                <div className={welcomestyle}>
                    <p className='header-text-custom1 display-center'>welcome to our clinic</p>
                    <p className='header-text-custom2 pt-0'>extensive procedures to our patients</p>
                    <p className='common-p-text mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae omnis aliquam ut tempore qui recusandae harum ex quidem, non quaerat consequatur, animi nesciunt eaque dolorum sequi ratione sint aspernatur! Animi dolorum inventore est ad dolor quis maiores, a vitae ducimus eveniet architecto, omnis, dolore reprehenderit cumque fuga sint voluptas ab hic tempore labore aliquam eos consequuntur! Eum, nostrum? Consequuntur, soluta quam placeat illo quod hic minus ex quaerat corporis nihil. Maxime sint atque consequatur voluptatem voluptatum dicta facilis saepe error rerum! Quaerat corporis ipsam dolorum reiciendis ab? Distinctio rem, dolorem esse asperiores nobis delectus amet perferendis fuga recusandae fugiat!</p>
                     <Link to={'/about'} className="btn-welcome-hover " style={{display:'flex',position:'relative',justifyContent:'center',alignItems:'center',textDecoration:"none"}}>
                                more about us
                                <FontAwesomeIcon className='ps-1' icon={faAngleRight} style={{fontSize:"small"}}/>
                    </Link>
                </div>
            </div>
        </div>


      </div>

    </div>
  )
}

export default HomeWelcome
