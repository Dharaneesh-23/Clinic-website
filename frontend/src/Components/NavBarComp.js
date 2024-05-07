
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/images/logo (2).png'
import bootstrap from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Headroom from 'react-headroom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
  } from "react-router-dom";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import Packagepage from './Packagepage';
import ContactPage from './ContactPage';
import './assets/style.css';

function NavBarComp() {
    const isLargeScreen = useMediaQuery({ minWidth: 992 }); 
    const isMediumScreen = useMediaQuery({ minWidth: 768});
    const isSmallScreen = useMediaQuery({minWidth: 438});
    // console.log(isMediumScreen)
    return (
        <Headroom>
        <Navbar expand="md" className="bg-body-tertiary" style={{zIndex:"99"}}>
            <Navbar.Brand href="/">
                {isMediumScreen ? (<img src={logo} width={80} height={70} className='mx-3' alt='logo'/>) 
                : (isSmallScreen?(<img src={logo} width={55} height={45} alt='logo'/>)
                :(<img src={logo} width={35} height={30} alt='logo'/>))}
                <Navbar.Text className='fw-bold text-uppercase' style={{fontSize:'clamp(0.8rem,4vw,1.5rem)'}}>Arram skin clinic</Navbar.Text>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-3'/>
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end me-2'>
            <Nav className='container justify-content-end'>
                <div >
                    {isLargeScreen ?
                    <div className='row'>
                        <div className='col-7 about-list-icon' style={{borderRight:"3px solid #a6a6a6",height:"20px"}}>
                        <ul>
							<li>
								<a href="https://www.w3schools.com/colors/colors_picker.asp"><FontAwesomeIcon icon={faInstagram} className='header-btn-hover'/></a>
							</li>
							<li>
								<a href="https://www.w3schools.com/colors/colors_picker.asp"><FontAwesomeIcon icon={faFacebook} className='header-btn-hover'/></a>
							</li>
							<li>
								<a href="https://www.w3schools.com/colors/colors_picker.asp"><FontAwesomeIcon icon={faLinkedin} className='header-btn-hover'/></a>
							</li>
						</ul>
                        </div>
                        <div className='col-4' style={{justifyContent:'center'}}>
                            <span>+91 8870575600</span>
                        </div>
                    </div>
                    : ""}
                    <div className='row' style={{textAlign:'center'}}>
                        <div className='col-lg col-md-2'>
                            <Nav.Link as={Link} to='/' ><p className='header-btn-hover'>Home</p></Nav.Link>
                        </div>
                        <div className='col-lg col-md-2'>
                            <Nav.Link as={Link}to='/about'><p className='header-btn-hover'>About</p></Nav.Link>
                        </div>
                        <div className='col-lg col-md-2'>
                            <Nav.Link as={Link}to='/packages'><p className='header-btn-hover'>Packages</p></Nav.Link>
                        </div>
                        <div className='col-lg col-md-2'>
                            <Nav.Link as={Link}to='/services'><p className='header-btn-hover'>Services</p></Nav.Link>
                        </div>
                        <div className='col-lg col-md-2'>
                            <Nav.Link as={Link}to='/contact' ><p className='header-btn-hover'>Contact</p></Nav.Link>
                        </div>
                        {isMediumScreen ?"":<Nav.Link as={Link} to='/appointment'><p className='header-btn-hover'>Book Appointment</p></Nav.Link>}
                    </div>
                </div>
                    {isLargeScreen ? 
                        <button className='ms-3 mt-2 appointment-btn'>
                            <Nav.Link as={Link} to='/appointment'>
                                <FontAwesomeIcon icon={faCalendar} />
                                <Navbar.Text className='fs-6 ps-2'>Book Appointment</Navbar.Text>
                            </Nav.Link>
                        </button>
                        : ""
                        // <Nav.Link as={Link}to='/contact'>Book Appointment</Nav.Link>
                        }
                
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Headroom>
  );
}

export default NavBarComp;