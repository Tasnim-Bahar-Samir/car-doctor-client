import React from 'react'

const BannerDetails = ({data}) => {
    const {img,id,prev,next} = data;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
    <div className='banner-img '>
        <img src={img} className="w-full h-full rounded-lg" />
    </div>
    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 right-5 bottom-5">
      <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
    <div className="absolute text-white transform -translate-y-1/2 left-24 top-1/2 text-left ">
      <h1 className='text-6xl font-bold text-white'>Affordable <br />
       Price For Car <br />
        Servicing</h1>
        <p className='text-lg w-1/2 my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <button className='px-3 py-3 bg-orange-600 text-white rounded-md'>Discover More</button>
        <button className='px-3 py-2 border-2 ml-5 text-white rounded-md'>Latest Project</button>
    </div>
  </div> 
  )
}

export default BannerDetails