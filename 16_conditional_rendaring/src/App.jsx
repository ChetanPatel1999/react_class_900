import React, { useState } from 'react'

// const App = () => {
//   const isLogin = true;
//   if (isLogin) {
//     return (
//       <h1>welcome user !</h1>
//     )
//   }
//   return (
//     <h1> please login !</h1>
//   )
// }

// const App = () => {
//   const isLogin = false;
//   return (
//     <div>
//       {
//         isLogin
//           ? <h1> welcome user!</h1 >
//           : <h1>please login !</h1>
//       }
//     </div>
//   )
// }


// const App = () => {
//   const [isColor, setIsColor] = useState(true)
//   const changeMode = () => {
//     // if (isColor) {
//     //   setIsColor(false)
//     // }
//     // else {
//     //   setIsColor(true)
//     // }
//     setIsColor(!isColor)
//   }
//   return (
//     <div>
//       <h1 className={isColor ? 'dark' : 'blue'}>hello world institute</h1>
//       <button onClick={changeMode}>change mode</button>
//     </div>
//   )
// }

// const App = () => {
//   const isAdmin = false
//   return (
//     <div>
//       <h1>welcome to dashbord ! </h1>
//       {isAdmin && <button>delete user</button>}
//     </div>
//   )
// }

// function App() {
//   const role = "guest";
//   switch (role) {
//     case "admin":
//       return <h1>Admin Panel</h1>;
//     case "user":
//       return <h1>User Dashboard</h1>;
//     case "guest":
//       return <h1>Guest Area</h1>;
//     default:
//       return <h1>Access Denied</h1>;
//   }
// }

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Component
      </button>
      {show && <h2>Hello React</h2>}
    </div>
  );
}

export default App
