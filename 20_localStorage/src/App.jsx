import React from 'react'

const App = () => {
  //  localStorage.setItem("name","ram patel")
  //  localStorage.setItem("age",70)
  //  localStorage.setItem("city","indore")
  // let data = localStorage.getItem("user");
  // let age = localStorage.getItem("age");
  // console.log(typeof age)
  // localStorage.removeItem("user");
  // localStorage.clear();

  // let user = { "name": "raj", "age": 70 };
  // localStorage.setItem("user",JSON.stringify(user));
  // let data= localStorage.getItem("user");
  // data= JSON.parse(data);
  // console.log(typeof data)
  // console.log(data)
  // let user = [{ "name": "raj", "age": 70 }, { "name": "ram", "age": 90 }]
  // localStorage.setItem("user",JSON.stringify(user));
  // let data=JSON.parse(localStorage.getItem("user"))
  // console.log(data)
  // console.log(localStorage.length)
  console.log(localStorage.key(1))
  return (
    <div>
      <h1>my app</h1>
      {/* <h1>{data}</h1> */}
    </div>
  )
}

export default App
