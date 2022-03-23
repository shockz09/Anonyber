import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main"
import "./App.css";
import Resources from "./pages/Resources";
import ResourcesVideo from "./pages/ResourcesVideo"
import ResourcesBlog from "./pages/ResourcesBlog"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Main />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/video" element={<ResourcesVideo />} />
      <Route path="/resources/blog" element={<ResourcesBlog />} />
    </Routes>
  </BrowserRouter>
   
    </>
  );
}

export default App;
