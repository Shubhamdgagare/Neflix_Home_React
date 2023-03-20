import "./App.scss"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Details from "./Components/Details/Details";



function App() {
  return (
    
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:videoid" element={<Details/>}/>
      </Routes>
    </Router>
  );
}

export default App;
