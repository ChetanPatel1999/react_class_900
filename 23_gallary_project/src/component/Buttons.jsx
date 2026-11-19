import React from 'react'

const Buttons = ({ index, setIndex, setUserData }) => {
    return (
        <div className='flex items-center mt-5 justify-center gap-10'>
            <button
                style={{ opacity: index > 1 ? 1 : 0.5 }}
                onClick={() => {
                    if (index > 1) {
                        setIndex(index - 1)
                        setUserData([])
                    }
                }}

                className='bg-yellow-500 active:scale-95 cursor-pointer px-4 py-2 rounded font-bold text-black text-xl'>prev</button>
            <button
                onClick={() => {
                    setIndex(index + 1)
                    setUserData([])
                }}
                className='bg-yellow-500 active:scale-95 cursor-pointer px-4 py-2 rounded font-bold text-black text-xl'>next</button>
        </div>
    )
}

export default Buttons
