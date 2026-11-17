import React, { useEffect, useState } from 'react'

const App = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)
  useEffect(() => {
    console.log(`http/randaom/userprofile/page${num1}/5`)
  }, [num1])

  return (
    <div>
      <h1>num1 : {num1}</h1>
      <h1>num2 : {num2}</h1>
      <h1>num3: {num3}</h1>
      <button onClick={() => setNum1(num1 + 1)} >changenum1</button>
      <button onClick={() => setNum2(num2 + 1)} >changenum2</button>
      <button onClick={() => setNum3(num3 + 1)} >changenum3</button>
    </div>
  )
}

export default App
