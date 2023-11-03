import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Listuser from './components/Listuser';
import Createuser from './components/Createuser';
import Edituser from './components/Edituser';
function App() {
  return (
    <div className="App">
      <h5>React CRUD operaions using PHP and MySQL</h5>
      <BrowserRouter>
       <nav>
        <ul>
          <li>
              <Link to="/">List Users</Link>
          </li>
          <li>
              <Link to="user/create">Create User</Link>
          </li>
        </ul>
        </nav>
        <Routes>
          <Route index element={<Listuser/>}/>
          <Route path="user/create" element={<Createuser/>}/>
          <Route path="user/:id/edit" element={<Edituser/>}/>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
