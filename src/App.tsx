import React from "react"
import './App.css'
import Header from "./components/header";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Experiences from "./components/experiences";
import Space from "./components/space";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

function App() {
    return (
        <>
            <Header/>
            <Space/>
            <Banner/>
            <Space/>
            <Skills/>
            <Space/>
            <Experiences/>
            <Space/>
            <Portfolio/>
            <Space/>
            <Contact/>
        </>
    )
}

export default App
