
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from "../homepage";
import Login2 from "./components/login2";
import FinalDashboard from "../dashboard";
import ChatInterface from "./components/community3";
import LearningPage from "../learningpg";
import Roles from "../roleChoice";



function App() {
  return <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login2/>} />
      <Route path="/dashboard" element={<FinalDashboard/>} />
      <Route path="/community" element={<ChatInterface />} />
      <Route path="/learning" element={<LearningPage/>} />
      <Route path="/roles" element={<Roles/>} />
      {/* <Route path="/loginr" element={<LoginPagephil />} /> */}
      <Route path="*" element={<div>404 Not Found</div>} />



    </Routes>




  </BrowserRouter>

}


export default App;