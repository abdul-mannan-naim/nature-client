import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Navbar/Login/Login';
import SignUp from './Components/Navbar/Login/SignUp'; 
import Home from './Components/Home/Home';
import Likes from './Components/Like/Likes';
import Reports from './Components/Report/Reports';

function App() {
  return (
    <div className="App">
      <Navbar>  </Navbar>

      <Routes> 
        <Route path='/' element={<Home></Home>}  > </Route>
        <Route path='/home' element={<Home></Home>}  > </Route>
        <Route path='/likes' element={<Likes></Likes>}  > </Route>
        <Route path='/report' element={<Reports></Reports>}  > </Route>



        <Route path='/login' element={<Login></Login>}  > </Route>
        <Route path='/signup' element={<SignUp></SignUp>}  > </Route>



      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
