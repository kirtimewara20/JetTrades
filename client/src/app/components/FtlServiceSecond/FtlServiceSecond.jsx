import React from 'react'
import truck from "../../assets/image 000001 1.png";
import "./FtlServiceSecond.scss";

const FTLServiceSecond = () => {
  return (
    <div className='container second-1'>
        <div className='row second-row-1'>
            <div className='col-12 second-col d-flex'>
                <div className='col-6 second-image'>
                    <img src={truck} alt=''/>
                </div>
                <div className='col-6 second-container'>
                    <div className='col-3 second-heading'>
                        <h1>Heavy Equipment and Large Loads</h1>
                        <p>Excel trailers or Gooseneck Trailers are best for transporting heavy equipment or large loads, offering enhanced stability and maneuverability, especially in challenging terrains.</p>
                    </div>
                    <div className='col-3 second-heading'>
                        <h1>Exceptionally Tall or Oversized Cargo</h1>
                        <p>Double Drop Trailers or Extendable Double Drop (Lowboy) Trailers are suitable for exceptionally tall or oversized cargo, providing additional height clearance.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FTLServiceSecond