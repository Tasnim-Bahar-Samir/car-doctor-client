import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { userContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const data = useLoaderData()
    const {_id,title,price} = data;
    const {user} = useContext(userContext);

    const handleOrder = e =>{
        e.preventDefault()
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email;
        const phone = form.phone.value;
        const message = form.message.value;


        const order = {
            service : _id,
            serviceName : title,
            customer : name,
            price,
            email,
            phone,
            message
        }

        fetch('https://genius-car-server-bice-five.vercel.app/orders',{
            method: "POST",
            headers:{
                "content-type": 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                form.reset()
            }
        })
        .catch(e => console.log(e))
    }

    

  return (
    <div>
        <h2 className='text-2xl'>{title}</h2>
        <h5 className='text-xl my-4'>Price :{price}</h5>
        <form onSubmit={handleOrder} className=' bg-slate-100 p-5 my-5 rounded-xl'>
            <div className='grid md:grid-cols-2 gap-4'>
                <input className='input input-bordered' type="text" placeholder='First Name' name="firstName" id="" required/>
                <input className='input input-bordered' type="text" placeholder='Last Name' name="lastName" id="" required/>
                <input className='input input-bordered' type="text" placeholder='Your Phone' name="phone" id="" required/>
                <input className='input input-bordered' type="email" name="email" placeholder='Your Email' defaultValue={user?.email} id="" readOnly/>
            </div>
            <textarea className='textarea textarea-bordered w-full my-4' placeholder='Your Message' name="message" id="" rows="10" required></textarea>
            <button className='btn bg-orange-600 w-full mb-5'>Order Confirm</button>
        </form>
    </div>
  )
}

export default CheckOut