import React, { useEffect, useState } from 'react'
import Card from './component/Card';
import Buttons from './component/Buttons';

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(2)
  async function getData() {
    let response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    let data = await response.json();
    console.log(data);
    console.log(index);
    setUserData(data);
  }

  useEffect(() => {
    getData();
  }, [index])

  return (
    <div className='h-screen w-full overflow-auto bg-black text-white p-8 pt-0'>
      <h1 className='text-center mb-5 fixed w-full py-2 top-0 left-0 bg-yellow-400 text-black text-2xl font-bold'>Explore Gallary</h1>
      {
        userData.length > 0 ?
          <div className='flex flex-wrap gap-5 mt-20'>
            <h1 className='fixed bg-red-600 py-3 px-5 font-bold text-5xl rounded-full'>{index}</h1>
            {userData.map((user, ind) => (
              <Card url={user.url} download_url={user.download_url} author={user.author} />
            ))}
          </div>

          :
          <h1 className='text-2xl text-gray-300 fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 font-bold'>Loding...</h1>
      }
      <Buttons index={index} setIndex={setIndex} setUserData={setUserData} />
    </div>
  )
}

export default App
