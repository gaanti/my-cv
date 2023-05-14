import React from 'react';
import './App.css';
import Hero from "./sections/hero/Hero";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import WorkExperience from "./sections/experience/WorkExperience";
import ContactYou from "./sections/contactYou/ContactYou";
import ContactMe from "./sections/contactMe/ContactMe";
import {Blog} from "./sections/blog/Blog";
import Footer from "./sections/footer/Footer";

function App() {
    return (
        <div >
            <Hero/>
            <Skills/>
            <Projects/>
            <WorkExperience/>
            <ContactYou/>
            <ContactMe/>
            <Blog/>
            <Footer/>
        </div>
    );
}

export default App;
