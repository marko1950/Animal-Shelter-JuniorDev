import LandingPage from "./components/LandingPage/Main/LandingPage";
import NavigationBar from "./components/NavigationBar/Main_Components/NavigationBar";
import ListOfAnimals from "./components/List of animals/MainComponents/ListOfAnimals";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Main_Components/Blog";
import Donations from "./components/Donations/Main_Component/Donations";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/list" element={<ListOfAnimals />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/donations" element={<Donations />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
