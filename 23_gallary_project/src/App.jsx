import React, { useEffect, useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState([])
  async function getData() {
    let response = await fetch("https://picsum.photos/v2/list?page=4&limit=15");
    let data = await response.json();
    console.log(data);
    setUserData(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='h-screen w-full overflow-auto bg-black text-white p-8'>
      {
        userData.length > 0 ?
          <div className='flex flex-wrap gap-5'>
            {userData.map((user, ind) => (
              <a href={user.url} target='_blank'>
                <div>
                  <div className='w-60 h-60 rounded-2xl overflow-hidden '>
                    <img className='w-full h-full object-cover' src={user.download_url} />
                  </div>
                  <h1 className='text-xl font-semibold'>{user.author}</h1>
                </div>
              </a>
            ))}
          </div>
          :
          <h1 className='text-2xl text-gray-300 fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 font-bold'>Loding...</h1>
      }
    </div>
  )
}

export default App
