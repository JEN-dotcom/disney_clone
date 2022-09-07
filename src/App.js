import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import Detail from './pages/Detail';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
