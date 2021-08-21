import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/pages/Landing";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/anthony-dominguez-86-react" exact component={Landing} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
