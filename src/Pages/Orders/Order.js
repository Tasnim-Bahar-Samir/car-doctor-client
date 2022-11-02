import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../Context/AuthProvider/AuthProvider'
import OrderDetails from './OrderDetails';

const Order = () => {
  
  const [orders,setOrders] = useState([])
  const {user} = useContext(userContext);
  console.log(user)

  useEffect(() =>{
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setOrders(data))
  }, [user?.email])
  return (
    <div className='my-10'>
      {
        orders.map(order => <OrderDetails key={order._id} order = {order}/>)
      }
    </div>
  )
}

export default Order