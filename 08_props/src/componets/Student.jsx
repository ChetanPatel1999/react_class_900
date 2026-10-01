import React from 'react'

const Student = (props) => {
    console.log(props)
    return (
        <div className='student'>
            <h1>{props.name}</h1>
            <h1>age : {props.age}</h1>
        </div>
    )
}

export default Student
