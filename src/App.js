import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CH2 from './components/CH2';
import CH3 from './components/CH3';
import CH4Event from './components/CH4Event';
import CH6CreateDOM from './components/CH6CreateDOM';
import CH8 from './components/CH8';
import CH9 from './components/CH9';
import CH10 from './components/CH10';
import CH13 from './components/CH13';
import CH14 from './components/CH14';
import CH16 from './components/CH16';
import './components/css/Style.css';

function App() {
  const style = { color: 'blue', fontWeight: 'bold' };

  return (
    <div className="m-3">
      <NavLink to="/" style={({ isActive }) => (isActive ? style : undefined)}>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/CH2" style={({ isActive }) => (isActive ? style : undefined)}>
        CH2
      </NavLink>
      {' | '}
      <NavLink to="/CH3" style={({ isActive }) => (isActive ? style : undefined)}>
        CH3
      </NavLink>
      {' | '}
      <NavLink to="/CH4" style={({ isActive }) => (isActive ? style : undefined)}>
        CH4
      </NavLink>
      {' | '}
      <NavLink to="/CH6" style={({ isActive }) => (isActive ? style : undefined)}>
        CH6
      </NavLink>
      {' | '}
      <NavLink to="/CH8" style={({ isActive }) => (isActive ? style : undefined)}>
        CH8
      </NavLink>
      {' | '}
      <NavLink to="/CH10" style={({ isActive }) => (isActive ? style : undefined)}>
        CH10
      </NavLink>
      {' | '}
      <NavLink to="/CH13" style={({ isActive }) => (isActive ? style : undefined)}>
        CH13
      </NavLink>
      {' | '}
      <NavLink to="/CH14" style={({ isActive }) => (isActive ? style : undefined)}>
        CH14
      </NavLink>
      {' | '}
      <NavLink to="/CH16" style={({ isActive }) => (isActive ? style : undefined)}>
        CH16
      </NavLink>
      <hr />
      <Routes>
        {/* <Route path="주소규칙" element={보여 줄 컴포넌트 JSX} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/CH2" element={<CH2 />} />
        <Route path="/CH3" element={<CH3 />} />
        <Route path="/CH4" element={<CH4Event />} />
        <Route path="/CH6" element={<CH6CreateDOM />} />
        <Route path="/CH8" element={<CH8 />} />
        <Route path="/CH9" element={<CH9 />} />
        <Route path="/CH10" element={<CH10 />} />
        <Route path="/CH13/*" element={<CH13 />} />
        <Route path="/CH14" element={<CH14 />} />
        <Route path="/CH16" element={<CH16 />} />
      </Routes>
    </div>
  );
}

export default App;
