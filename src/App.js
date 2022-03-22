import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main"
import "./App.css";
import Resources from "./pages/Resources";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Main />} />
      <Route path="/resources" element={<Resources />} />
      
    </Routes>
  </BrowserRouter>
   
    </>
  );
}

export default App;
