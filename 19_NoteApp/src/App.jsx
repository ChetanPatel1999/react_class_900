import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]")
  })
  function formSubmit(evt) {
    evt.preventDefault();
    console.log("form is submited");
    let newTask = [...tasks, { title: title, content: content }]
    setTasks(newTask)
    localStorage.setItem("tasks", JSON.stringify(newTask));
    console.log(tasks);
    setContent("");
    setTitle("");
  }
  function delteNote(id) {
    let newtask = tasks.filter((task, index) => id != index)
    setTasks(newtask);
    localStorage.setItem("tasks", JSON.stringify(newtask))
  }

  return (
    <div id="box" className='w-full h-screen flex p-10 gap-10  bg-black text-white '>
      <form onSubmit={formSubmit} className='flex w-1/2 flex-col gap-10'>
        <h1 className='font-bold text-3xl'>Add Notes</h1>
        <input
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          className='border-2 outline-0 font-medium text-xl border-white px-4 py-2 rounded'
          type="text"
          placeholder='Enter Notes Heading..'
        />
        <textarea
          onChange={(evt) => setContent(evt.target.value)}
          value={content}
          rows={5}
          className='border-2 outline-0 font-medium text-xl border-white px-4 py-2 rounded'
          placeholder='Write Details Here..'
        ></textarea>
        <button className='bg-white py-2 active:scale-95 rounded cursor-pointer font-bold text-xl  text-black' >Add Note</button>
      </form>
      <div className='w-1/2 border-s-2 pl-5  '>
        <h1 className='font-bold text-3xl mb-10'>Recent Notes</h1>
        <div id="box" className='flex flex-wrap gap-5 overflow-auto h-full items-start justify-start pb-15'>
          {
            tasks.map((task, id) =>
              <div className='bg-white w-45 h-50 relative  rounded-xl' >
                <img className='overflow-hidden rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQHR_rjKaZEZTUAJx1bK_ukLKLE6FQSQSQGmgYqy12g&s=10' />
                <h1 className='absolute top-8 left-15 text-black font-bold text-xl' >{task.title}</h1>
                <p className='absolute top-15 left-3 text-gray-800 font-medium text-xl'>{task.content}</p>
                <button
                  onClick={() => delteNote(id)}
                  className='absolute -bottom-4 cursor-pointer active:scale-95 left-12 bg-red-600 text-white font-bold py-1 px-4 rounded-xl' >Delete</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
