import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Hireme from './components/Hireme';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Navbar from './components/Navbar';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Hireme" Component={Hireme} />
          <Route exact path="/" Component={Home} />
          <Route exact path="/About" Component={About} />
          <Route exact path="/Banner" Component={Banner} />
          <Route exact path="/Services" Component={Services} />
          <Route exact path="/Footer" Component={Footer} />
          <Route exact path="/Expertise" Component={Expertise} />
          <Route exact path="/Contact" Component={Contact} />
          <Route exact path="/Certificates" Component={Certificates} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
