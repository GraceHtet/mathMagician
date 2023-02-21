import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <>
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
    <h1>Math Magicians</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);
export default App;
