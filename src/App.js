

import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import Detail from './components/Detail'

import {
  BrowserRouter as Router,
  Route, Link, Routes} from "react-router-dom"
 
function App() {
  return (
    <div className="App">
    
      <Header/>
      <Routes>
      <Route path="/detail" element={<Detail />} />
      <Route path="/" element={<Home />}/>
        
    


      

      </Routes>


      
      
    </div>
  );
}

export default App;
