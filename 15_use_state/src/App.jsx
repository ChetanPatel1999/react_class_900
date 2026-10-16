import React, { useRef, useState } from 'react'

const App = () => {
  const [a, setA] = useState(12)
  const [name, setName] = useState("ram")
  const [color, setColor] = useState("blue")
  let i = useRef(0);
  function changeValue() {
    let arr = ["hanuman", "shyam", "abhishek", "yuvraj", "ravi"]
    setA(a + 1);
    setName(arr[i.current]);
    i.current++;
    if (i.current == arr.length) {
      i.current = 0;
    }
  }
  return (
    <div>
      <h1 style={{ color: color }}>val of a = {a} </h1>
      <h1>val of name = {name} </h1>
      <button onClick={() => {
        if (color == "red") {
          setColor("blue");
        }
        else {
          setColor("red");
        }
      }} >change color</button>
      <button onClick={changeValue}>change</button>
    </div>
  )
}

export default App
