import React from 'react'

const App = () => {
  function greet() {
    console.log("btn is clicked");
  }
  function onMouseOverfun() {
    console.log("mouse over on btn")
  }

  function onchangefun(data) {
    console.log("typing..." + data)
  }

  function dispinput(data) {
    console.log(data)
  }
  function myfun(e) {
    e.preventDefault();
    console.log("form submit");
  }
  return (
    <div>
      <h1>hello react</h1>
      {/* <button onClick={greet} onMouseEnter={onMouseOverfun} >click me !</button> */}
      {/* <button onClick={() => console.log("btn is click")}  >click me !</button> */}
      {/* <button
        onClick={() => {
          console.log("btn is clicked");
          console.log("we can read more then one line");
        }}
        onDoubleClick={function () {
            console.log("btn is dbl clicked")
        }}
      >     click me !</button> */}

      {/* <input
        onChange={() => {
          onchangefun("ram")
        }}
        type='text' placeholder='type here ...' /> */}


      {/* <input
        onChange={(evt) => {
          console.log(evt.target.value)
        }}
        type='text' placeholder='type here ...' /> */}

      {/* <input
        onChange={(evt) => {
          dispinput(evt.target.value)
        }}
        type='text' placeholder='type here ...' /> */}

      {/* <form onSubmit={(e) => myfun(e)} >
        <input />
        <button type='submit'>submit</button>
      </form> */}

      <div
        onMouseMove={(evt) => console.log("x=", evt.clientX, "y=", evt.clientY)}
        className='box'>

      </div>
    </div>
  )
}

export default App
