import React from 'react'
import Header from './Header'
import Section1Content from './Section1Content'

const Section1 = (props) => {
    // console.log(props)
    return (
        <div className='h-screen w-full'>
            <Header />
            <Section1Content user={props.user} />
        </div>
    )
}

export default Section1
