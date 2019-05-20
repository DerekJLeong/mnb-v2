import React from "react";
import { HashRouter, Route, NavLink } from "react-router-dom";
import Home from "./components/home.jsx";
import Services from "./components/services.jsx";
import Merchandise from "./components/merchandise.jsx";
import Reviews from "./components/reviews.jsx";
import Gallery from "./components/gallery.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";

function App() {
   return (
      <HashRouter basename="/">
         <div className="page_container">
            <header>
               <div className="header_logo" />
               <nav>
                  <NavLink exact to="/">
                     Home
                  </NavLink>

                  <NavLink to="/services">Services</NavLink>
                  <NavLink to="/merchandise">Merchandise</NavLink>
                  <NavLink to="/reviews">Reviews</NavLink>
                  <NavLink to="/gallery">Gallery</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
               </nav>
            </header>

            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/merchandise" component={Merchandise} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Footer />
         </div>
      </HashRouter>
   );
}

export default App;
