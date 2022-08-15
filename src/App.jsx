import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
