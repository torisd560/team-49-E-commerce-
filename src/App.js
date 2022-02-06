
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Attachment from './Components/Attachment/Attachment';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Attachment />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
