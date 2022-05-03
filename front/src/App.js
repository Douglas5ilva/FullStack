import './App.css';
import Home from './paginas/Home';
import Register from './paginas/Register';
import Login from './paginas/Login';
import User from './paginas/User';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route  path="/" element={<Home />}/>

        <Route path='/login' element={<Login/>} />

        <Route path='/register' element={<Register/>} />

        <Route path='/user' element={<User/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
