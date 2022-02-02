import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Book from '../src/Components/Book/Book'
import Destinations from '../src/Components/Destinations/Destinations'
import FlyingClub from '../src/Components/FlyingClub/FlyingClub'
import FlyWithUs from '../src/Components/FlyWithUs/FlyWithUs'
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Book />} />
          <Route path='book' element={<Book />} />
          <Route path='destinations' element={<Destinations />} />
          <Route path='flyingClub' element={<FlyingClub />} />
          <Route path='flyUs' element={<FlyWithUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
