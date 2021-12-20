import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home/Home'
import Login from '../src/Pages/Login/Login'
import NotFound from '../src/Pages/NotFound/NotFound'
import CartContainer from '../src/Pages/Cart/CartContainer/CartContainer'
import ContactItem from './Pages/Contact/ContactItem/ContactItem';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='contact' element={<ContactItem />} />
        <Route path='cart' element={<PrivateRoute><CartContainer /></PrivateRoute> } />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
