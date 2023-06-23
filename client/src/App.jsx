import {Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import axios from 'axios'


function App() {
  
  axios.defaults.baseURL='http://localhost:2000';
  
  

  return (
    <div>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Home/>}></Route>

    </Routes>
    </div>
  )
}

export default App
