import React from 'react'

const App = () => {
  return (
    <div id="box" className='w-full h-screen flex p-10 gap-10  bg-black text-white '>
      <form className='flex w-1/2 flex-col gap-10'>
        <h1 className='font-bold text-3xl'>Add Notes</h1>
        <input
          className='border-2 outline-0 font-medium text-xl border-white px-4 py-2 rounded'
          type="text"
          placeholder='Enter Notes Heading..'
        />
        <textarea
          rows={5}
          className='border-2 outline-0 font-medium text-xl border-white px-4 py-2 rounded'
          placeholder='Write Details Here..'
        ></textarea>
        <button className='bg-white py-2 active:scale-95 rounded cursor-pointer font-bold text-xl  text-black' >Add Note</button>
      </form>
      <div className='w-1/2 border-s-2 pl-5  '>
        <h1 className='font-bold text-3xl mb-10'>Recent Notes</h1>
        <div id="box" className='flex flex-wrap gap-5 overflow-auto h-full items-start justify-start pb-15'>
          <div className='bg-white w-45 h-50 rounded' ></div>
         
        </div>
      </div>
    </div>
  )
}

export default App
