
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Attachment from './Components/Attachment/Attachment';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={< Login />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='attachment' element={<PrivateRoute>
            <Attachment />
          </PrivateRoute>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
