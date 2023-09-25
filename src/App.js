import "./App.css";
// import HomePage from "./components/HomePage/HomePage";
import Header from "./components/HomePage/section1/Header";
import HomePage from "./components/HomePage/HomePage";
import Spa from "./components/Spa/spa";
import TheSpa from "./components/menuPages/theSpa/theSpa";
import TheShop from "./components/menuPages/theShop/theShop";
import About from "./components/menuPages/about/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomInfo from "./components/HomePage/section5/bottomInfo";
import Events from "./components/menuPages/events/events";
import Login from "./components/menuPages/login/login";
import Faqs from "./components/menuPages/faqs/faqs";
import Blog from "./components/menuPages/blog/blog";

function App() {
  return (
    <Router basename="/">
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/spa" element={<Spa />} />
          <Route exact path="/theSpa" element={<TheSpa />} />
          <Route exact path="/theShop" element={<TheShop />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/faqs" element={<Faqs />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <BottomInfo />
    </Router>
  );
}

export default App;
