import React from 'react'
import Button from './Button'

const Card = (props) => {
    // console.log(props) // {course:"python" , duration : 2}
    return (
        <div className='card'>
            <h1>{props.course}</h1>
            <img src={props.image} />
            <p className='du'>duration : {props.duration} months</p>
            <div className='d'>
                <p>{props.detail}</p>
            </div>     
            <Button d={props.btnData} />
        </div>
    )
}

export default Card
