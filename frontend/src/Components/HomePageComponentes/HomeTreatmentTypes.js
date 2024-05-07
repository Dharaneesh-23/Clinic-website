import React from 'react';
import image1 from '../assets/images/man.jpg';
import image2 from '../assets/images/women.jpg';
import { useMediaQuery } from 'react-responsive';
import { useState,useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
function HomeTreatmentTypes() {
    useEffect(()=>{
        Aos.init({duration:2000});
    })
    const isMediumScreen = useMediaQuery({minWidth:768});
    const imgstyle ={
        width:"90%",
        height:"100%",
        opacity:"0.3",
    };
    const [imgStyle1,setImgStyle1] = useState(imgstyle);
    const [imgStyle2,setImgStyle2] = useState(imgstyle);
    const CustomRadioButton = ({ 
        label, 
        selected, 
        onSelect, 
    }) => ( 
            <button className={selected?'radioButton selected px-2': 'radioButton px-2'}
                // style={{ styles.radioButton, 
                //     ...(selected 
                //         ? styles.selected 
                //         : {}), 
                // }} 
                onClick={onSelect} 
            > 
                {label} 
            </button>  
    ); 

    const [selectedValue, setSelectedValue] = useState(null); 
	const handleRadioButtonChange = (value) => {
		setSelectedValue(value);
		switch(value) {
			case 'him':
                const style1 = {width:"90%"};
                const style2 = isMediumScreen ? {
                    width:"90%",
                    opacity:"0.3"
                }:{
                    display:"none",
                };
                setImgStyle1(style1);
                setImgStyle2(style2);
				break;
			case 'her':
                const styl1 = isMediumScreen ? {
                    width:"90%",
                    opacity:"0.3"
                }:{
                    display:"none",
                };
                const styl2 = {width:"90%"};
                setImgStyle1(styl1);
                setImgStyle2(styl2);
				break;
			default:
                console.log('Invalid Option');
				break;
		}
	};

	return ( 
		<div data-aos="fade-up"> 
			<p className='header-text-custom1 display-center mt-5'>we provide for you</p>
            <p className='header-text-custom2 display-center'>we treat all types of skin</p>

			<div className='container'> 
                <div className='display-center'>
                <CustomRadioButton 
                    label="for him"
                    selected={selectedValue === "him"}
                    onSelect={() => handleRadioButtonChange("him")} 
                /> 
                <CustomRadioButton 
                    label="for her"
                    selected={selectedValue === "her"} 
                    onSelect={() => handleRadioButtonChange("her")} 
                />
                </div> 
			</div> 
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-md-6'>
                        <img src={image1} style={imgStyle1}/>
                    </div>
                    <div className='col-md-6 pe-0'>
                        <img src={image2} style={imgStyle2}/>
                    </div>
                </div>
            </div>
            
		</div> 
	); 

//   return (
//     <div>
//       <p className='header-text-custom1 display-center mt-5'>we provide for you</p>
//       <p className='header-text-custom2 display-center'>we treat all types of skin</p>
//       <div className='display-center'>
//         <div className="btn-group gap-4 my-3" role="group" aria-label="Basic radio toggle button group">
//             <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
//             <label className="btn btn-outline-primary" htmlFor="btnradio1">for him</label>

//             <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
//             <label className="btn btn-outline-primary" htmlFor="btnradio2">for her</label>
//         </div>
//       </div>
//       <div className='row py-5'>
//         <div className='col-md-6'>
//             <img src={image1} style={imgstyle}/>
//         </div>
//         <div className='col-md-6'>
//             <img src={image2} style={imgstyle}/>
//         </div>
//       </div>
//     </div>
//   )
}

export default HomeTreatmentTypes
