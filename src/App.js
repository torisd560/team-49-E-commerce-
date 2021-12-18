import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Header from '../src/Pages/Header/Header'
import Home from '../src/Pages/Home/Home'
import Products from '../src/Pages/Products/Products'
import Contact from '../src/Pages/Contact/Contact'
import Login from '../src/Pages/Login/Login'
import Footer from '../src/Pages/Footer/Footer'
import NotFound from '../src/Pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/product' element={<Products></Products>} />
          <Route path='/contact' element={<Contact></Contact>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
