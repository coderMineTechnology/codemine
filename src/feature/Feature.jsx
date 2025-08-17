import React from 'react'
import './feature.css';
import DevicesIcon from '@mui/icons-material/Devices';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
function Feature() {
  return (
    <>
      <div className="feature-container">
        <div className="details">
          <h1>WHY CHOOSE US</h1>
          <p>At CodeMine Technologies, we combine technical excellence with a deep understanding of business needs to deliver intelligent, scalable, and future-ready digital solutions. Our client-first approach ensures that every project is tailored to meet your unique goals, with a focus on quality, innovation, and timely delivery.
          </p>
        </div>
        <div className="feature_images">
          <div className='feature-data'>
          <DevicesIcon className='feature_icon'/><hr className='hrPosition'/>
            <h5>Responsive</h5>
            {/* <p>Responsive web design makes your web page look good on all devices (desktops, tablets, and phones).</p> */}
          </div>
          <div className='feature-data '>
         <AutoFixHighIcon className='feature_icon iconTwo'/> <hr/>
            <h5>Easy to Customize and Modern designs</h5>
          </div>
          <div className='feature-data '>
          <SupervisedUserCircleIcon className='feature_icon iconTwo'/> <hr/>
            <h5>Tech Consulting & Digital Transformation</h5>
            {/* <p>Strategic IT consulting for modern businesses</p> */}
          </div>
          <div className='feature-data'>
          <SupportAgentIcon className='feature_icon'/> <hr className='hrPosition'/>
            <h5> Ongoing Support & Maintenance</h5>

            {/* <p>24/7 technical support and monitoring.

              Version upgrades, patching, and troubleshooting.

              Performance tuning and uptime assurance.</p> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature;
