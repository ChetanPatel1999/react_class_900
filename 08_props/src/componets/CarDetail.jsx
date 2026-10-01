import React from 'react'

const CarDetail = ({ name, year, color }) => {
    return (
        <div>
            <h1>car name : {name}</h1>
            <h1>car year : {year}</h1>
            <h1>car color :{color}</h1>
        </div>
    )
}

export default CarDetail
