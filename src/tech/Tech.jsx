import React from 'react'
import './tech.css';
function Tech() {
    return (
        <>
            
            <div className='techHead'>
                    <h1 style={{ color: 'black' }}>Our Specialization</h1>
                    <p style={{color:"black"}}> We specialize in cutting-edge technologies to deliver the best solutions for our clients.</p>
                </div>
                <div className="techImages">
                    <div className='techImg'>
                        <img src="sf.jfif" alt="software" className='techImg1'/>
                        <p style={{color:"black"}}>Software Development</p>
                    </div>
                    <div className='techImg'>
                        <img src="mob.jfif" alt="mobile app" className='techImg2'/>
                        <p style={{color:"black"}}>Mobile App Development</p>
                    </div>
                    <div className='techImg'>
                        <img src="web.jfif" alt="web development" className='techImg3'/>
                        <p style={{color:"black"}}>Web Development</p>
                    </div>
                </div>
        </>
    )
}

export default Tech;
