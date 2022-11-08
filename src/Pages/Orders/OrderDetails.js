import React, { useEffect, useState } from 'react'

const OrderDetails = ({order,handleDelete}) => {
    console.log(order)
    const {_id,service,serviceName,customer,phone,price} = order;
    const [orderedServie,setOrderedSevice] = useState()
    useEffect(() =>{
        fetch(`https://genius-car-server-bice-five.vercel.app/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderedSevice(data))
    },[service])


    
  return (
    <div className='mb-5 flex items-center justify-between md:px-10'>
        <div className='flex items-center gap-4 '>
            <button onClick={() =>handleDelete(_id)} className="btn btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {
                orderedServie?.img && 
                <img className='w-24 h-24 rounded-md' src={orderedServie.img} alt="" />
            }

            <div>
                <h3 className='text-2xl font-bold'>{serviceName}</h3>
                <p>Customer: {customer}</p>
                <p>Phone: {phone}</p>
            </div>
        </div>
        <div>
            <h4 className='text-xl font-semibold'>{price}</h4>
        </div>
    </div>
  )
}

export default OrderDetails