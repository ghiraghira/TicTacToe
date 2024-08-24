import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contactanos from "./Contactanos";
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link> {/* uso para poder redirigir */}
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to='/contactanos'> Contactanos</Link>
          </li>
        </ul>
      </nav>
      <Router>
        <Route path="/" element={<Home />} /> {/* importa el componente y le indica la ruta */}
        <Route path='/about' element={<About/>}/>
        <Route path='/contactanos' element={<Contactanos/>}/>
      </Router>
    </div>
  );
}

export default App;
