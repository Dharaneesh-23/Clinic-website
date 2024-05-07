import React from 'react'
import { Image } from 'react-bootstrap'

const AboutCardComponent = ({image,title}) => {
    return (
        <div className='card-hover display-center m-2 p-0' style={{width:"13vw",height:"13vw",minWidth:"150px",minHeight:"150px",backgroundColor:"#4d4d4d",transition:"0.3s ease-in-out",borderRadius:"0px"}}>
            <Image src={image} alt='face image' style={{width:"5vw",height:"5vw",minWidth:"90px",minHeight:"90px"}}/>
            <p className='h6 mt-3' style={{fontSize:"clamp(0.5rem,4vw,1rem)"}}>{title}</p> 
        </div> 
    )
}

export default AboutCardComponent
