import React from 'react'
import { FiArrowRight } from "react-icons/fi";
const RightCardContent = () => {
    return (
        <div className='absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between'>
            <h1 className='bg-white rounded-full font-semibold flex justify-center items-center text-xl w-8 h-8' >1</h1>
            <div>
                <p className='text-white font-semibold mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat consequatur a.</p>
                <div className='flex justify-between items-center'>
                    <button className='bg-blue-600 text-white py-1 px-4 rounded-3xl font-semibold'>Satisfied</button>
                    <button className='bg-blue-600 text-white py-1 px-2 rounded-3xl font-semibold text-2xl'><FiArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
