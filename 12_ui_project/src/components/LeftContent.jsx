import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
const LeftContent = () => {
    return (
        <div className='h-full w-1/4 py-6 flex flex-col justify-between'>
            <div>
                <h1 className='font-bold text-5xl leading-13 mb-8'>Prospactive <br /> customer <br /> segmentation</h1>
                <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias animi temporibus consectetur ducimus fuga eum voluptatem enim.</p>
            </div>
            <div>
                <FiArrowUpRight className='text-7xl' />
            </div>
        </div>
    )
}

export default LeftContent
