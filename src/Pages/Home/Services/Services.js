import React, { useEffect, useState } from 'react'
import Service from './Service'

const Services = () => {
    const [servicesData ,setServicesdata] = useState([])
    console.log(servicesData)
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServicesdata(data))
    },[])
  return (
    <div>
        <div className='text-center'>
            <p className='text-md text-orange-600'>Service</p>
            <h1 className='text-5xl font-bold my-5'>Our Service Area</h1>
            <p className='text-lg mb-5 md:w-[717px] mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
            {
                servicesData.map(service => <Service key={service._id} service ={service}/>)
            }
        </div>
    </div>
  )
}

export default Services