function fun() {
  console.log("hello react")
}
function greet() {
  return "good morning";
}

// const App = () => {
//   //this is comment
//   let imgUrl = 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   let name = "ramcharan sharma";
//   let para = "hello wolrd institute offer many courses";
//   let islogin = true;
//   const mystyle = {
//     backgroundColor: "red",
//     color: "white",
//     fontSize: "25px"
//   }
//   return    <div>
//       {/* this is example of jsx comment */}
//       <h1 id='myid'>{islogin ? 'welcome to dashbord' : 'log in page'}</h1>
//       <header>this is header</header>
//       <h1 style={mystyle} title="this is heading">{name}</h1>
//       <img
//         className="image"
//         src={imgUrl}
//         alt='image'
//       />
//       <p className='para' >{para}</p>
//       <h1>{10 + 20}</h1>
//       <h1>{greet()}</h1>
//       <button style={{ color: "white", backgroundColor: "blue", width: "150px" }} onClick={fun} >click me !</button>
//       <footer>this is footer</footer>
//     </div>

// }


//use react fragment for return multiple element
function App() {
  let age=34;
  return <>
    <h1>this is heading  {45 + 7}</h1>
    <h1>my age is  {age}</h1>
    <p>this is paragraf {greet()}</p>
    <button>click me!</button>
  </>
}
export default App
