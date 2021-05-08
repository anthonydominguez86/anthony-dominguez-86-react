import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
