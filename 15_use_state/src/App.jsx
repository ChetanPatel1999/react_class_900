import React, { useRef, useState } from 'react'

// const App = () => {
//   const [a, setA] = useState(12)
//   const [name, setName] = useState("ram")
//   const [color, setColor] = useState("blue")
//   let i = useRef(0);
//   function changeValue() {
//     let arr = ["hanuman", "shyam", "abhishek", "yuvraj", "ravi"]
//     setA(a + 1);
//     setName(arr[i.current]);
//     i.current++;
//     if (i.current == arr.length) {
//       i.current = 0;
//     }
//   }
//   return (
//     <div>
//       <h1 style={{ color: color }}>val of a = {a} </h1>
//       <h1>val of name = {name} </h1>
//       <button onClick={() => {
//         if (color == "red") {    
//           setColor("blue");
//         }
//         else {
//           setColor("red");
//         }
//       }} >change color</button>
//       <button onClick={changeValue}>change</button>
//     </div>
//   )
// }


// const App = () => {
//   const [count, setCount] = useState(0)
//   function increaseValue() {
//     setCount(count + 1)
//   }
//   function decreaseValue() {
//     if (count > 0) {
//       setCount(count - 1)
//     }
//   }
//   return (
//     <div>
//       <div className="box">
//         <h1>{count}</h1>
//       </div>
//       <button onClick={increaseValue}>increase</button>
//       <button onClick={decreaseValue} >decrease</button>
//     </div>
//   )
// }


const App = () => {
  const [num, setNum] = useState([45, 67, 89])
  function changeData() {
    // let newarr = [...num];
    // newarr.push(77);
    // setNum(newarr)
    // console.log(newarr)
    // setNum([...num, 90])
    setNum((pre) => [...pre, 90])
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeData}>click</button>
    </div>
  )
}

// const App = () => {
//   const [user, setUser] = useState({ name: "chetan", age: 27 })
//   function changeData() {
//     // let newUser = { ...user };
//     // newUser.age = 90;
//     // setUser(newUser)
//     // console.log(newUser)
//     setUser({ ...user, age: 90 })
//   }
//   return (
//     <div>
//       <h1>{user.name} , {user.age} </h1>
//       <button onClick={changeData}>click</button>
//     </div>
//   )
// }


// const App = () => {
//   const [num, setNum] = useState(10)
//   function changeData() {
//     setNum((pre) => pre + 1);
//     setNum((pre) => pre + 1);
//     setNum((pre) => pre + 1);
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={changeData}>click</button>
//     </div>
//   )
// }
export default App
