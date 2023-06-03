import React from "react"
import './App.css'
import Header from "./components/header";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Experiences from "./components/experiences";
import Space from "./components/space";
import Portfolio from "./components/portfolio";

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
            <div className={"h-96"}/>
        </>
    )
}

export default App
