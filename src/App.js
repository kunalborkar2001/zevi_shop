
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './Pages/Home/Home';
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App"> */}
        <Route path="/home" element={<Home />}></Route>
        <Route exact path="/" element ={<LandingPage />}></Route>
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
