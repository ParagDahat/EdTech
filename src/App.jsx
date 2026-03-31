import AccordionExample from "./Accordion";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import { FloatingNavDemo } from "./components/Layout/Navbar";
import {Footer} from "./components/Layout/Footer";
import About from "./components/About/About";
import {Courses} from "./components/Courses/Courses";

import { Navbar } from "./components/Layout/Navbar";
import { GetStartedPage } from "./components/GetStarted/GetStarted";
import { WhyUsPage } from "./components/WhyUs/WhyUsPage";


// import NavTabs from "./components/animata/container/Navtabs";

// import FaqSection from './components/animata/accordion/faq'
// import AnimatedBeam from './components/animata/background/Animated-beam'
// import FlipCard from './components/animata/card/Flip-card'
// import Expandable from './components/animata/carousel/Expandable'
// import SkewedInfiniteScroll from './SkewdInfiniteScroll'
// import ButtonShapeTabs from './Tabs'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whyus" element={<WhyUsPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/getstarted" element={<GetStartedPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
