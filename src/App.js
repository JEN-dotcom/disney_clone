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
        <Route path="/disney_clone/home" element={<Home />} />
        <Route path="/disney_clone/detail/:id" element={<Detail />} />
        <Route path="/disney_clone/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
