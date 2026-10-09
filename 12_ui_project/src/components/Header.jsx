import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-4 px-8'>
            <button className='bg-black text-white px-3 py-1 rounded-2xl text-md tracking-widest uppercase'>target audience</button>
            <button className='bg-gray-200 text-black px-3 py-1 rounded-2xl text-md tracking-widest uppercase'>digital banking platform</button>
        </div>
    )
}

export default Header
