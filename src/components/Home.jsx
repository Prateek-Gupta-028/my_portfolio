import React, { Component } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Expertise from "./Expertise";
 
const Home = () => {
    return (
        <>
            <div id="bnr"><Banner /></div>
            <div id="about"><About /></div>
            <div id="serv"><Services /></div>
            <div id="exp"><Expertise /></div>
            
        </>
    );
};
export default Home;