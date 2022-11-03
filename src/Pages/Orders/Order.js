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

  const handleDelete = id =>{
    const procceed = window.confirm('Are you shure to delete the item?');
    if(procceed){
      fetch(`http://localhost:5000/orders/${id}`,{
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