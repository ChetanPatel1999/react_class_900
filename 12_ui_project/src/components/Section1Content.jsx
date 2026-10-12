import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Section1Content = (props) => {
    // console.log(props)
    return (
        <div className='w-f h-[88vh] px-8 py-4 flex justify-between items-center gap-10'>
            <LeftContent />
            <RightContent user={props.user} />
        </div>
    )
}

export default Section1Content
