import React from 'react'
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
  return (
    <div>
        <div className="hero mb-32">
            <div className="hero-content gap-14 flex-col lg:flex-row">
                <div className='w-1/2 relative h-full'>
                    <img src={person} alt='personImg' className=" rounded-lg shadow-2xl w-4/5" />
                    <img src={parts} alt ='partsImg' className=" rounded-lg shadow-2xl w-3/5 absolute right-5 top-32 border-8 " />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6 text-md">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className="btn btn-primary mt-8">Get More Info</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About