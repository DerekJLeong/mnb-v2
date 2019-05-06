import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer.jsx";
import "./home.css";

class Home extends React.Component {
   render() {
      return (
         <section className="home">
            <div className="home_contact">
               <div className="home_contact_wrapper">
                  <h1>Miss New Booty</h1>
                  <p>
                     Offering non-invasive aesthetic procedures to build a body
                     you will love.
                  </p>
                  <Link to="/contact">
                     <h3>CONTACT US TODAY</h3>
                  </Link>
               </div>
            </div>

            <div className="home_image parallax" />

            <div className="home_services">
               <div className="home_service_wrapper home_service1">
                  <div className="home_service_image hsi1" />
                  <div className="home_service_text_wrapper hstw1">
                     <h2>LASER LIPOSUCTION</h2>
                  </div>
               </div>
               <div className="home_service_wrapper home_service2">
                  <div className="home_service_image hsi2" />
                  <div className="home_service_text_wrapper hstw2">
                     <h2>NON-INVASIVE BUTT LIFT</h2>
                  </div>
               </div>
               <div className="home_service_wrapper home_service3">
                  <div className="home_service_image hsi3" />
                  <div className="home_service_text_wrapper hstw3">
                     <h2>CAVITATION</h2>
                  </div>
               </div>
               <div className="home_service_wrapper home_service4">
                  <div className="home_service_image hsi4" />
                  <div className="home_service_text_wrapper hstw4">
                     <h2>FAT FREEZING</h2>
                  </div>
               </div>
               <Link to="/services">
                  <h3>MORE SERVICES</h3>
               </Link>
            </div>
            <Footer />
         </section>
      );
   }
}

export default Home;
