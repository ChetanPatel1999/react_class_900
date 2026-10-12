import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    // console.log(props.user)
    return (
        <div id="right" className='h-full  w-3/4  overflow-x-auto  pb-6 flex gap-10'>
            {props.user.map((user, id) => <RightCard  key={id} id={id} color={user.color} image={user.image} para={user.para} btnTag={user.btnTag} />)}
        </div>
    )
}
export default RightContent
