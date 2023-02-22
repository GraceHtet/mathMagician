import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import './app.css';

const App = () => (
  <>
    <div className="head-nav">
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
            <span>| </span>
          </li>
          <li>
            <Link to="/calculator">Calculator </Link>
            <span>| </span>
          </li>
          <li>
            <Link to="/quote"> Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);
export default App;
