import React, { Component , useEffect } from 'react'
import Footer from './Footer'
import ComponentHeader from './ComponentHeader';
import NavBarComp from './NavBarComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import image1 from './assets/images/Figure women-with-ipad.jpg.png';
import { Image } from 'react-bootstrap';
import { FormControl, TextField, Select } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Aos from 'aos';
import 'aos/dist/aos.css'

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#d966ff',
            '--TextField-brandBorderFocusedColor': '#d966ff',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiSelect:{
        styleOverrides:{
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        }
      },
      MuiInputLabel:{
        styleOverrides:{
          root:{
            '&.Mui-focused':{
              color:'#d966ff',
            }
          }
        }
      }
    },
  });
  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-bottom: 2px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};

    &:hover {
      border-color: #d966ff;
    }

    &:focus {
      outline: 0;
      border-bottom: 2px solid #d966ff;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

function ContactPage (){
  const outerTheme = useTheme();
  const [treatmentType, setTreatmentType] = React.useState('');

  const handleChange = (event) => {
    setTreatmentType(event.target.value);
  };

  useEffect(()=>{
    Aos.init({duration:2000})
  })

    return (
      <div>
        <NavBarComp />
        <ComponentHeader cName="contact" />
        <div className='container-fluid' data-aos="fade-up" style={{maxWidth:'1800px'}}>
          <h1 className='header-text-custom2 text-center p-3'>Contact Form</h1>
          <p className='text-center' style={{letterSpacing:"2px", fontSize:"clamp(0.2rem,2vw,1rem)"}}>We encourage your feedback, please feel free to send us a message using the following contact form</p>
          <div className='container display-center'>
            <div className='row mx-4 display-center' style={{maxWidth:'1000px'}}>
            <ThemeProvider theme={customTheme(outerTheme)}>
              
              <div className='col-sm-6 pt-4'>
                <TextField variant='standard' id='contactName' label="Username" fullWidth/>
                
                {/* <input className='form-control my-2' type='text' placeholder='user name' id='contactName'/> */}
              </div>
              <div className='col-sm-6 pt-4'>
              <TextField variant='standard' type='tel' id='contactNumber' label="Phone Number" fullWidth/>
                {/* <input className='form-control my-2' type='tel' placeholder='Phone number' id='contactNumber'/> */}
              </div>
              <div className='col-sm-6 pt-4'>
                <TextField variant='standard' type='mail' id='contactMail' label="Mail ID" fullWidth/>
                {/* <input className='form-control my-2' type='mail' placeholder='example@123.com' id='contactMail' /> */}
              </div>
              <div className='col-sm-6 pt-4'>
                <FormControl variant='standard' fullWidth>
                <InputLabel id="demo-simple-select-standard-label">Treatment Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={treatmentType}
                    onChange={handleChange}
                    label="Treatment Type"
                    className='input-field'
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Skin</MenuItem>
                    <MenuItem value={20}>Hair</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                {/* <select className="form-control my-2" aria-label="Default select example" id='contactService' >
                  <option defaultChecked>Select type of treatment</option>
                  <option value="hair">hair</option>
                  <option value="skin">skin</option>
                  <option value="therapy">therapy</option>
                </select> */}
              </div>
              <Textarea aria-label="empty textarea" minRows={5} className='mt-3'/>
                {/* <textarea rows={'4'} placeholder='Your message' id='messageFooter' className='form-control my-2'/>   */}
              <div>
              {/* <TextField variant='standard' type='mail' id='contactMail' label="Mail ID" fullWidth rows={4}/> */}
              </div>
                <button className='navigation-btn display-center my-5' style={{maxWidth:"200px"}}>
                  <FontAwesomeIcon icon={faChevronCircleRight} className='navigation-btn-arrow'></FontAwesomeIcon>
                  <p className='mb-0'>Submit</p>
              </button>
            </ThemeProvider>
            </div>
          </div>
        </div>  
        <div className='container-fluid' data-aos="fade-up" style={{maxWidth:"2300px"}}>
          <div className='row'>
            <div className='col-md-5 display-center' style={{backgroundColor:"#d966ff"}}>
              <Image src={image1} className="m-5" style={{width:"80%",height:"80%"}}/>
            </div>
            <div className='col-md-7 display-center' style={{backgroundColor:"#f2f2f2",flexDirection:'column'}}>
              <h1 className='header-text-custom2 text-center py-2'>Book an appointment</h1>
              <p>To schedule an appointment please contact us using the provided contact number. For general information please complete the form below and it will be directed to the appropriate individual within our office</p>
              <span>We want you to be happiest and most beautiful person you can be, both inside and out. we look forward to hearing from you</span>
              <Link as={Link} to={'/appointment'} style={{textDecoration:"none"}}>
                <button className='navigation-btn display-center my-5'>
                    <FontAwesomeIcon icon={faChevronCircleRight} className='navigation-btn-arrow'></FontAwesomeIcon>
                    <p className='mb-0'>Book Appointment</p>
                </button>
              </Link>
            </div>
          </div>
        </div>    
        <Footer />
      </div>
    )
  }


export default ContactPage
