import React from 'react'

const Course = (props) => {
    console.log(props)
    return (
        <div>
            {props.children[0]}
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
            {props.jsxdata}
            {props.children[1]}
        </div>
    )
}

export default Course
