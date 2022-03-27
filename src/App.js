import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main"
import "./App.css";
import Resources from "./pages/Resources";
import ResourcesVideo from "./pages/ResourcesVideo"
import QuizPage from "./pages/QuizPage";
import ResourcesBlog from "./pages/ResourcesBlog"
import CyberSecurity from "./pages/CyberSecurity"
import WhatIsEthicalHacking from "./pages/WhatIsEthicalHacking";
import PrequisitesEthicalHacking from "./pages/PrequisitesEthicalHacking";
import LearnEthicalHacking from "./pages/LearnEthicalHacking";
import TopWebsitesToRefer from "./pages/TopWebsitesToRefer";
import Skills from "./pages/Skills";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Main />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/video" element={<ResourcesVideo />} />
      <Route path="/resources/blog" element={<ResourcesBlog />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/cybersecurity" element={<CyberSecurity />} />
      <Route path="/cybersecurity/what-is-ethical-hacking" element={<WhatIsEthicalHacking/>} />
      <Route path="/cybersecurity/prequisites-for-ethical-hacking" element={<PrequisitesEthicalHacking/>} />
      <Route path="/cybersecurity/learn-ethical-hacking" element={<LearnEthicalHacking/>} />
      <Route path="/cybersecurity/top-websites-to-refer" element={<TopWebsitesToRefer/>} />
      <Route path="/cybersecurity/skills-to-learn" element={<Skills/>} />
    </Routes>
  </BrowserRouter>
   
    </>
  );
}

export default App;
