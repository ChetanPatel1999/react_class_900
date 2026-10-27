import React, { useState } from 'react'

// const App = () => {
//   const fruits = ["apple", "mango", "banana", "orange", "papaya"]
//   return (
//     <ol type='1'>
//       {
//         fruits.map((fruit, indx) => {
//           return <li key={indx} >{fruit}</li>
//         })
//       }
//     </ol>
//   )
// }

// function App() {
//   const numbers = [10, 20, 30, 40];

//   return (
//     <div>
//       {numbers.map((num, index) => (
//         < p key={index} > {num}</p>
//       ))
//       }
//     </div >
//   );
// }

// const App = () => {
//   const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "David" }
//   ];
//   return (
//     <div>
//       {users.map((user) => (
//         <p key={user.id} >{user.name}</p>
//       ))}
//     </div>
//   )
// }

// function App() {
//   const [students, setStudents] = useState([
//     { id: 1, name: "Rahul", course: "React" },
//     { id: 2, name: "Priya", course: "Node.js" },
//     { id: 3, name: "Amit", course: "MongoDB" }
//   ])


//   function changeStd() {
//     setStudents([...students, { id: 4, name: "Ravi", course: "java" }])
//   }
//   return (
//     <div>
//       <h2>Students list :- </h2>
//       {students.map((student) => (
//         <div key={student.id}>
//           <h3>{student.name}</h3>
//           <p>{student.course}</p>
//         </div>
//       ))}
//       <button onClick={changeStd}>add more student</button>
//     </div>
//   );
// }


//filter
function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", course: "React" },
    { id: 2, name: "Priya", course: "Node.js" },
    { id: 3, name: "Amit", course: "MongoDB" },
    { id: 4, name: "Ravi", course: "Java" }
  ])


  function filterStd() {
    const newstudents = students.filter((st) => st.id % 2 == 0)
    setStudents(newstudents)
  }
  return (
    <div>
      <h2>Students list :- </h2>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>{student.course}</p>
        </div>
      ))}
      <button onClick={filterStd}>filter student</button>
    </div>
  );
}
export default App
