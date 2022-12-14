import React from "react";
import {BsArrowRightShort} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="border rounded-lg p-6 mb-12">
          <img className="md:h-52 w-full rounded-xl block" src={img} alt="img" />
        <div>
          <h2 className="py-5 text-2xl font-bold">{title}</h2>
          <div className="text-orange-600 flex justify-between items-center">
            <h4 className="text-2xl">Price: ${price}</h4>
            <Link to={`/checkout/${_id}`}><BsArrowRightShort className=' w-16 h-8 text-lg cursor-pointer font-bold'/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
