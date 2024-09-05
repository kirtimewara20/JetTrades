import React from 'react'
import "./fleetTrailor.scss";
import trailer from "../../assets/pngwing 5.png"
import trailer2 from "../../assets/pngwing 8.png"
import trailer1 from "../../assets/pngwing 6.png"

const FleetTrailer = () => {
  return (
    <div className='container fleetTrailer'>
        <div className='row fleetTrailer-row'>
            <div className='col-12 fleetTrailer-col'>
                <div className='fleetTrailer-heading'>
                    <h2>Our Fleet of Trailers at</h2>
                    <h1>Your Service</h1>
                    <p>At Jet Trade Logistics, we boast a diverse fleet of trailers tailored to meet a spectrum of cargo transportation demands.</p>
                </div>
                <div className='fleetTrailer-flatbed d-flex'>
                    <div className='col-4 fleetTrailer-flatbed-subcol'>
                        <h1>Flatbed Trailers</h1>
                        <p>Open-top trailers with a flat surface, suitable for transporting a wide range of large , including timber, construction materials, and containers. They are known for their versatility and efficiency in cargo transportation.</p>
             </div>
                    <div className='col-4 fleetTrailer-flatbed-image'>
                        <img src={trailer} alt=''/>
                    </div>
                    <div className='col-4 fleetTrailer-flatbed-subcol'>
                        <h1>High-Bed Trailers</h1>
                        <p>High-bed trailers are trailers with a higher deck height compared to flatbed trailers. They are designed to transport cargo to areas that require a higher ground clearance.</p>
                    </div>
                </div>
                <div className='fleetTrailer-excel d-flex'>
                    <div className='col-6 fleetTrailer-excel-image'>
                        <img src={trailer1} alt=''/>
                    </div>
                    <div className='col-6 fleetTrailer-excel-heading'>
                        <h1>Excel Trailers</h1>
                        <p>Excel trailers are known for their durability, strength, and ability to handle heavy loads efficiently. They are engineered to endure harsh conditions and handle the heaviest loads.</p>
                    </div>
                    
                </div>
                <div className='fleetTrailer-lowbed d-flex'>
                        <div className='col-4 fleetTrailer-lowbed-subcol'>
                            <h1>Flatbed Trailers</h1>
                            <p>Open-top trailers with a flat surface, suitable for transporting a wide range of large , including timber, construction materials, and containers. They are known for their versatility and efficiency in cargo transportation.</p>
                        </div>
                        <div className='col-4 fleetTrailer-lowbed-image'>
                            <img src={trailer2} alt=''/>
                        </div>
                        <div className='col-4 fleetTrailer-lowbed-subcol'>
                            <h1>High-Bed Trailers</h1>
                            <p>High-bed trailers are trailers with a higher deck height compared to flatbed trailers. They are designed to transport cargo to areas that require a higher ground clearance.</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FleetTrailer