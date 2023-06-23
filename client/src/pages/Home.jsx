import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Dropdown from '../components/Dropdown'
import { userContext } from '../context/Context'
import { Navigate } from 'react-router-dom';

function Home() {
  const {users,ready}=useContext(userContext);
console.log(users)

  if(!users && ready ){
    return <Navigate to={'/login'}/>
  }
  
  if(!ready){
    return 'loading'
  }
  
  return (
    <div>
        <Navbar/>
        <Dropdown/>
    </div>
  )
}

export default Home