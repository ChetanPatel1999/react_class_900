import React from 'react'
import Header from './component/Header'
import CourseCard from './component/CourseCard'
import Footer from './component/Footer'


// function Button() {
//   return <button style={{ backgroundColor: "blue", color: "white" }}>click me !</button>
// }
// const Greating = () => {
//   return <h1>hello good morning !</h1>
// }

// const App = () => {
//   return (
//     <div>
//       <h1>hello students</h1>

//       <Button />
//       <Button />
//       <Button />
//       <Greating/>
//       <Greating/>
//       <Greating/>
//     </div>
//   )
// }

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <Footer />
    </div>
  )
}

export default App
