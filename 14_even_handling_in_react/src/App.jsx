import React from 'react'

const App = () => {
  function greet() {
    console.log("btn is clicked");
  }
  function onMouseOverfun() {
    console.log("mouse over on btn")
  }
  return (
    <div>
      <h1>hello react</h1>
      {/* <button onClick={greet} onMouseEnter={onMouseOverfun} >click me !</button> */}
      {/* <button onClick={() => console.log("btn is click")}  >click me !</button> */}
      <button
        onClick={() => {
          console.log("btn is clicked");
          console.log("we can read more then one line");
        }}
        onDoubleClick={function () {
            console.log("btn is dbl clicked")
        }}
      >     click me !</button>
    </div>
  )
}

export default App
