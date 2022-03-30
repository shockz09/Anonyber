import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import Resources from "./pages/Resources";
import ResourcesVideo from "./pages/ResourcesVideo";
import QuizPage from "./pages/QuizPage";
import ResourcesBlog from "./pages/ResourcesBlog";
import CyberSecurity from "./pages/CyberSecurity";
import WhatIsEthicalHacking from "./pages/WhatIsEthicalHacking";
import PrequisitesEthicalHacking from "./pages/PrequisitesEthicalHacking";
import LearnEthicalHacking from "./pages/LearnEthicalHacking";
import TopWebsitesToRefer from "./pages/TopWebsitesToRefer";
import Skills from "./pages/Skills";
import QuizGrid from "./pages/QuizGrid";
import Quiz1 from "./components/quizes/quiz1"
import Quiz2 from "./components/quizes/quiz2"
import Quiz3 from "./components/quizes/quiz3"
import Quiz4 from "./components/quizes/quiz4"
import Quiz5 from "./components/quizes/quiz5"
import Quiz6 from "./components/quizes/quiz6"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/video" element={<ResourcesVideo />} />
          <Route path="/resources/blog" element={<ResourcesBlog />} />
          <Route path="/quiz" element={<QuizGrid />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route
            path="/cybersecurity/what-is-ethical-hacking"
            element={<WhatIsEthicalHacking />}
          />
          <Route
            path="/cybersecurity/prequisites-for-ethical-hacking"
            element={<PrequisitesEthicalHacking />}
          />
          <Route
            path="/cybersecurity/learn-ethical-hacking"
            element={<LearnEthicalHacking />}
          />
          <Route
            path="/cybersecurity/top-websites-to-refer"
            element={<TopWebsitesToRefer />}
          />
          <Route path="/cybersecurity/skills-to-learn" element={<Skills />} />
          <Route path="/quiz/quiz1" element={<Quiz1 />} />
          <Route path="/quiz/quiz2" element={<Quiz2 />} />
          <Route path="/quiz/quiz3" element={<Quiz3 />} />
          <Route path="/quiz/quiz4" element={<Quiz4 />} />
          <Route path="/quiz/quiz5" element={<Quiz5 />} />
          <Route path="/quiz/quiz6" element={<Quiz6 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
