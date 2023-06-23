import React, { useContext, useState } from 'react'
import Logo from '../assets/zinfoglogo.svg'
import { userContext } from '../context/Context'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Navbar() {
  const navigate = useNavigate()
    const [nav,setNav] =useState(false);
    const [redirect,setRedirect]=useState(false)
    function handleNav(){
        setNav(!nav)
    }
    const {users,setUsers}=useContext(userContext);
    console.log(users)
    function logout(){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('usertoken');
          setUsers(null)
          
          setRedirect(true)

        }
      })


    }
    
    // if(redirect){
    //   return <Navigate to={'/login'} />
    // }

  return (
    <div className='flex justify-between shadow-xl border-b border-gray-300  items-center h-24  mx-auto px-8'>
        <div className='w-full'>
            <img src={Logo} alt="logo" />
        </div>
        <ul className='hidden md:flex gap-8 px-6'>
            <li className='p-5 font-bold'>{users?.email}</li>
            
                <img className='w-12 h-12 object-cover border rounded-full cursor-pointer' src="https://avatars.githubusercontent.com/u/77688078?v=4" alt="" />
            
            <li className='mt-2 cursor-pointer' onClick={logout}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-sky-700 text-white">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

            </li>
         

        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
              {
                nav ?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

               : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
              
              }
        </div>
          
          <div className={nav ? 'fixed left-0 top-0 h-full w-[50%] border-r bg-gray-200 borrder-gray-900 ease-in-out duration-500 z-10': 'fixed left-[-100%] '}>
          <div className='w-full px-6 py-6'>
            <img src={Logo} alt="logo" />
        </div>
        <ul className='p-4 w-full'>
        <p className='p-5 text-xl font-bold'>{users?.email}</p>
            <li className='px-4'>
                <img className='h-16 w-16  object-cover border rounded-full cursor-pointer ' src="https://avatars.githubusercontent.com/u/77688078?v=4" alt="" />
            </li>
            <li  className='mt-6 px-4 cursor-pointer' onClick={logout}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-sky-700 text-white">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

            </li>
        </ul>

          </div>

    </div>
  )
}

export default Navbar