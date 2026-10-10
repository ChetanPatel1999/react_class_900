import React from 'react'
import RightCardContent from './RightCardContent';
const RightCard = () => {
    return (
        <div className='h-full w-1/4 relative bg-red-500 rounded-4xl overflow-hidden'>
            <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D' />
           
            <RightCardContent />
        </div>
    )
}

export default RightCard
