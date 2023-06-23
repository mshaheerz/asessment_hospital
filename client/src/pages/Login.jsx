import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/zinfoglogo.svg";
import  {TiPlus}  from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios  from "axios";
import { userContext } from "../context/Context";
import { Navigate } from "react-router-dom";
function Login() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState(false);
  const [backendErr,setBackErrr]=useState('');
  const [redirect,setRedirect]=useState(false)

  const {setUsers,users,ready}=useContext(userContext)

 
  // if(users?.email){
  //   return <Navigate to={'/'}/>
  // }else{
  //   return <Navigate to={'/login'}/>
  // }


 async function handleSubmit(e){
    e.preventDefault();
    if(email && password){
      const {data}= await axios.post('/login',{email,password});

      if(data.status == 'success'){
        localStorage.setItem('usertoken',data.token)
        toast.success(` ${data?.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUsers(data.user);
        setTimeout(() => {
             setRedirect(true)
        }, 2000);
     
      }else{
          setBackErrr(`${data?.message}`);
    
      }
    }else{
      setError('All fields are required!!')
    }
    
  }
  console.log(users)
  
  if(redirect){
    return <Navigate to={'/'} />
  }
  
  if(users && ready ){
    return <Navigate to={'/'}/>
  }
  return (
    <div className="bg-cover  bg-center item-center relative bg-[url('https://st3.depositphotos.com/2712843/14504/i/450/depositphotos_145046321-stock-photo-blurred-hospital-background.jpg')]">
     <ToastContainer />
        <div className="flex justify-center  self-center  ">
          <div className="px-12 relative bg-white mx-auto mt-14 rounded-2xl w-100 text-center ">
          <div className="-ml-12 p-1 mt-2">  
                 <TiPlus size={30} className="font-bold text-sky-600"/>
              </div>
            <div className="flex justify-center py-3 ">
              <img src={Logo} alt="logo" />
            </div>
            <div className=" absolute right-4 top-24 ">  
                 <TiPlus size={50} className="font-bold text-sky-600"/>
              </div>
            <div className="mb-6">
              <p className="text-sky-700 text-lg font-bold">
                Report Download Portal
              </p>
            </div>
            <div className="space-y-5">
              <form onSubmit={handleSubmit} className="border p- p-10 b-8 rounded-xl bg-[#44e3e5]">
                <p className="text-center text-blue-500">Login</p>
                <div className="text-left">
                  <label className="text-sm font-medium text-gray-700 tracking-wide" />
                  Email
                  <input  onChange={(e)=>setEmail(e.target.value)}
                    className="  w-full text-base px-2 py-1 border  border-gray-300 rounded "
                    type="email"
                    value={email}
                    placeholder="Enter email Id"
                  />
                </div>
                <div className="text-left">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input onChange={(e)=>setPassword(e.target.value)}
                    className="w-full content-center text-base px-2 py-1 border  border-gray-300 rounded"
                    type="password"
                    value={password}
                    placeholder="password"
                  />
                </div>
                <div className="mt-4 text-center ">
                  <button className="text-white bg-sky-700 hover:bg-sky-900 px-10 py-1 px-4 rounded">
                    SUBMIT
                  </button>
                </div>
                <div className="text-center mt-2 underline">
                  <a className="" href="">
                    Reset Password
                  </a>
                </div>
              </form>


              {
                  backendErr && (
                    <p className="underline text-sm text-red-600 font-bold">{backendErr}</p>
                  )
              }
              {
              
                error? (

                  <p className="underline text-red-600 font-bold">{error}</p>
                ):('')
              }
            </div>

            <div className="pt-5 text-center flex gap-2 -ml-32 justify-center text-gray-400 text-xs">
              <div className="text-left m">  
                 <TiPlus size={100} className="font-bold text-sky-700"/>
              </div>
              
                
              <span className="text-sky-700 ml-6 font-bold text-lg flex hover:underline cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-sky-700 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                (+91) 9288008801
              </span>
            </div>
            <div className=" py-3 flex items-center justify-center align-bottom ">
              <span className="text-gray-800 text-xs ">
                I hereby agree and accept the{" "}
                <a className="text-sky-600" href="">
                  Terms of serivece
                </a>{" "}
                and{" "}
                <a className="text-sky-600" href="">
                  Privacy policy
                </a>{" "}
              </span>
            </div>
          </div>
        </div>
       <div className="flex gap-6 px-4 text-white justify-around py-6">
        <div>Copyright@2023 Access Home Lab Soliutions</div>
        <div>All Right| <span className="text-white"> Terms and Conditions|Privacy Policy</span></div>
       </div>

    

    </div>
  );
}

export default Login;
