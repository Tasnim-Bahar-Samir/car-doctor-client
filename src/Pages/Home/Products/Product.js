import React from 'react'

const Product = ({product}) => {
const {name,img,price} = product;
  return (
    <div className="card w-96 border-2 p-6">
  <figure className="px-10 pt-10 bg-slate-100 rounded-xl md:h-52 w-full">
    <img src={img} alt="" className="rounded-xl w-full h-full pb-5" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-semibold text-2xl">{name}</h2>
    <h5 className='text-orange-600 text-5 font-semibold'>${price}</h5>
  </div>
</div>
  )
}

export default Product