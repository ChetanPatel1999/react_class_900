import React from 'react'
import RightCardContent from './RightCardContent';
const RightCard = (props) => {
    console.log(props)
    return (
        <div className='h-full shrink-0 w-1/4 relative rounded-4xl overflow-hidden'>
            <img className='w-full h-full object-cover' src={props.image} />
            <RightCardContent id={props.id} color={props.color} para={props.para} btnTag={props.btnTag} />
        </div>
    )
}

export default RightCard
