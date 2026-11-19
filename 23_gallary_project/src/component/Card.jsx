import React from 'react'

const Card = (user) => {
    return (
        <div>
            <a href={user.url} target='_blank'>
                <div>
                    <div className='w-60 h-50 rounded-2xl overflow-hidden '>
                        <img className='w-full h-full object-cover' src={user.download_url} />
                    </div>
                    <h1 className='text-xl font-semibold'>{user.author}</h1>
                </div>
            </a>
        </div>
    )
}

export default Card
