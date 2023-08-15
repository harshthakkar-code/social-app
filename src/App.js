import './App.css';
import Home from './pages/home/Home';
import Profile from './pages/profile/profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
        </Routes >
      </BrowserRouter>
    
    </div>
  );
}

export default App;
