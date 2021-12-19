import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home/Home'
import Contact from '../src/Pages/Contact/Contact'
import Login from '../src/Pages/Login/Login'
import NotFound from '../src/Pages/NotFound/NotFound'
import CartContainer from '../src/Pages/Cart/CartContainer/CartContainer'

function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/contact' element={<Contact></Contact>} />
          <Route path='/cart' element={<CartContainer></CartContainer>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </Router>

  );
}

export default App;
