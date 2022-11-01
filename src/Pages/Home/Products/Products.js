import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)
  return (
    <div className='text-center mb-12'>
        <small className='text-orange-600 text-lg'>Popular Products</small>
        <h1 className='text-5xl font-bold my-5'>Browse Our Products</h1>
        <p className='text-lg mb-5 md:w-[717px] mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <div className='grid md:grid-cols-3 gap-6'>
            {
                products.map(p => <Product key={p.id} product = {p}/>)
            }
        </div>
    </div>
  )
}

export default Products