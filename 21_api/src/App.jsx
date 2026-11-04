import React, { useState } from 'react'
import axios from "axios";

// const App = () => {
//   const [url, setUrl] = useState(null)
//   async function getData() {
//     let response = await fetch("https://dog.ceo/api/breeds/image/random");
//     let data = await response.json()
//     console.log(data);
//     setUrl(data.message)
//   }
//   return (
//     <div>
//       <div>
//         <img style={{ width: "300px",height:"300px" }} src={url} />
//       </div>
//       <button
//         onClick={getData}
//       >get data</button>
//     </div>
//   )
// }
// const App = () => {
//   const [list, setList] = useState([])
//   async function getData() {
//     let response = await fetch("http://universities.hipolabs.com/search?country=india");
//     let data = await response.json()
//     console.log(data);
//     setList(data);

//   }
//   return (
//     <div>
//       {
//         list.map((data) => <h1>{data.name}</h1>)
//       }
//       <button
//         onClick={getData}
//       >get data</button>
//     </div>
//   )
// }


// axios third party api calling 
const App = () => {
  const [list, setList] = useState([])
  async function getData() {
    let response = await axios.get("http://universities.hipolabs.com/search?country=india");
    console.log(response.data);
    setList(response.data);

  }
  return (
    <div>
      {
        list.map((data) => <h1>{data.name}</h1>)
      }
      <button
        onClick={getData}
      >get data</button>
    </div>
  )
}

export default App
