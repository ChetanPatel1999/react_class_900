import React from 'react'
import Header from './componets/Header'
import Card from './componets/Card'
import Button from './componets/Button'
import Student from './componets/Student'
import CarDetail from './componets/CarDetail'
import Course from './componets/Course'

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Card data="get more" course="python" duration={2} detail="python is dynamic language" />
//       <Card data="know more" course="java" duration={3} detail="java is static language" />
//       <Card data="join" course="HTML" duration={1} detail="Html is web language" />
//       <Card data="register" course="CSS" duration={1.5} detail="css is used to design web page" />   
//     </div>
//   )   
// }


// const App = () => {
//   let arr = [12, 34, 56,45 ,12]
//   return (
//     <div>
//       <Header />
//       {arr.map((val) => "hello ")}
//     </div>
//   )
// }

// const App = () => {
//   let arr = [12, 34, 56, 45, 12]
//   return (
//     <div>
//       <Header />
//       {arr.map((val) =>  <Button d="click me !" /> )}
//     </div>
//   )
// }


// const App = () => {
//   let students = [
//     {
//       name: "ram patel",
//       age: 15
//     },
//     {
//       name: "shyam sharma",
//       age: 20
//     },
//     {
//       name: "utsav malviya",
//       age: 23
//     },
//     {
//       name: "ravi sisodiya",
//       age: 25
//     }
//   ]
//   return (
//     <div>
//       <Header />
//       {
//         students.map((student, id) => <Student key={id} name={student.name} age={student.age} />)
//       }
//     </div>
//   )
// }

const App = () => {
  let course_detail = [
    {
      btnData: "get more",
      course: "python",
      image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=862&auto=format&fit=crop",
      duration: 2,
      detail: "Python is a dynamic language"
    },
    {
      btnData: "get more",
      course: "java",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=862&auto=format&fit=crop",
      duration: 3,
      detail: "Java is a powerful object-oriented programming language"
    },
    {
      btnData: "get more",
      course: "javascript",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=862&auto=format&fit=crop",
      duration: 2,
      detail: "JavaScript is a scripting language used for web development"
    },
    {
      btnData: "get more",
      course: "html",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=862&auto=format&fit=crop",
      duration: 1,
      detail: "HTML is used to create the structure of web pages"
    },
    {
      btnData: "get more",
      course: "css",
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=862&auto=format&fit=crop",
      duration: 1,
      detail: "CSS is used to style and design web pages"
    },
    {
      btnData: "get more",
      course: "react",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=862&auto=format&fit=crop",
      duration: 3,
      detail: "React is a JavaScript library for building user interfaces"
    },
    {
      btnData: "get more",
      course: "django",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=862&auto=format&fit=crop",
      duration: 3,
      detail: "Django is a Python framework for web development"
    },
    {
      btnData: "get more",
      course: "data science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=862&auto=format&fit=crop",
      duration: 6,
      detail: "Data Science uses data, statistics and programming to solve problems"
    } 
  ];
  return (
    <div>
      <Header />
      {course_detail.map((course, id) => <Card key={id} btnData={course.btnData} course={course.course} image={course.image} duration={course.duration} detail={course.detail} />)}
    </div>
  )
}



// explain destructuring
//  {name:"Thar" , color:"red" , year:2026}
// const App = () => {
//   return (
//     <div>
//       <CarDetail name="Thar" color="red" year={2026} />
//     </div>
//   )
// }


// children props 
// const App = () => {
//   return (
//     <div>
//       <Course name="django" price="4000" jsxdata={<a href='#'>home</a>}>
//         <h1>my course details</h1>
//         <button>click me !</button>
//       </Course>
//     </div>
//   )
// }

export default App
