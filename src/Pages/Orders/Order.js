import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../Context/AuthProvider/AuthProvider'
import OrderDetails from './OrderDetails';

const Order = () => {
  
  const [orders,setOrders] = useState([])
  const {user,userLogout} = useContext(userContext);
  console.log(user)

  useEffect(() =>{
    fetch(`https://genius-car-server-bice-five.vercel.app/orders?email=${user?.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      if(res.status === 401 || res.status === 403){
        return userLogout();
      }
      return res.json()
    })
    .then(data => setOrders(data))
  }, [user?.email,userLogout])

  const handleDelete = id =>{
    const procceed = window.confirm('Are you shure to delete the item?');
    if(procceed){
      fetch(`https://genius-car-server-bice-five.vercel.app/orders/${id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('Deleted item successfully!')
          const remaining = orders.filter(order => order._id !== id);
          setOrders(remaining)
        }
    })
}
    }
    
  return (
    <div className='my-10'>
      {
        orders.map(order => <OrderDetails key={order._id} order = {order} handleDelete ={handleDelete}/>)
      }
    </div>
  )
}

export default Order