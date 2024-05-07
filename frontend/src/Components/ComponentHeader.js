import React from 'react'

function ComponentHeader(props) {
  return (
    <div className='container-fluid px-0'>
        <div style={{backgroundColor:"black"}}>
            <p className='header-text-custom1 display-center mb-0 pt-3' style={{fontSize:"clamp(0.5rem,2vw,0.75rem)",color:"white"}}>home - {props.cName}</p>
            <p className='header-text-custom2 display-center mb-0' style={{color:"white"}}>{props.cName}</p>
        </div>
    </div>
  )
}

export default ComponentHeader
