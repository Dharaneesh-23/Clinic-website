import React ,{useEffect} from 'react'
import formBackgroundimg from './assets/images/ARAMM_CHECK-removebg1.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Footer() {
    useEffect(()=>{
        Aos.init({duration:2000})
      })
  return (
    <div className='footer' data-aos='fade-out'>
        <div className='container-fluid mx-0'>
            <div className='row'>
                <div className='col-md-6 px-0 order-1'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.137273494053!2d77.02470567488632!3d11.028325889136196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858979f85136b%3A0xdd9ca28d3c37cf8a!2sCoimbatore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1713725191914!5m2!1sen!2sin" width="600" height="450" style={{border:"0",width:"100%",height:"100%",fill:"contain"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  
                </div>
                <div className='col-md-6 px-0 order-2'>
                    <div className='display-center'>
                        <img src={formBackgroundimg} style={{width:"200px",height:"150px",objectFit:"contain"}} />
                    </div>
                    <div className='card-fluid mx-1'>
                        <p className='header-text-custom1 display-center mb-0 pt-3' style={{fontSize:'clamp(1rem,2vw,1.5rem'}}>Any more details?</p>
                        <p className='header-text-custom2 display-center text-center' style={{fontSize:'clamp(2rem,4vw,2.5rem'}}>Request a consultations</p>
                        <div className='container pb-4'>
                            <div className='row'>
                                <div className='col-md-6 pb-3'>
                                    <input type='text' placeholder='Name' id='userNameFooter'/>
                                </div>
                                <div className='col-md-6 pb-3'>
                                        <input type='mail' placeholder='example@123.com' id='emailFooter' />
                                </div>
                            </div>
                            <textarea rows={'4'} placeholder='Your message' id='messageFooter'/>
                            <div className='display-center mt-4'>
                                <button type='submit' className='treatment-btn'>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <h2 className='footer-text py-2 display-center'>working hours</h2>
                        <p className='footer-text display-center'>mon-sat 9am to 8pm</p>
                        <p className='footer-text display-center'>sun- 10am to 3pm</p>
                    </div>
                </div>    
            </div>
            {/* <div className='credits text-center pt-3'><p>developed by RPD-23</p></div> */}
        </div>
    </div>
  )
}

export default Footer
