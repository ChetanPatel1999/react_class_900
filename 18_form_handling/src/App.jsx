import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [task, setTask] = useState([])
  function formSubmit(evt) {
    evt.preventDefault();
    console.log("form is submited")
    console.log(title)
    setTask([...task, title]);
    setTitle("");
  }
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input value={title} type='text' placeholder='Enter text ...'
          onChange={(evt) => {
            setTitle(evt.target.value);
          }}
        />
        <button type='submit'>submit</button>
      </form>
      <ol>
        {
          task.map((t, i) => <li key={i} > {t}</li>)
        }
      </ol>
    </div>
  )
}

export default App
