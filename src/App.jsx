import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./pages/getstart";
import Login from "./configurations/login";
import Register from "./configurations/register";
import Home from "./webpage/home";
import Settings from "./model/setting";

function App(){
  // Public path anyone can visit this site
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* This path you can only visit when you have access */}
        <Route path="/home" element={<Home />}/>

        <Route path="/Settings" element={<Settings />}/>
      </Routes>
    </Router>
  );
}

export default App;