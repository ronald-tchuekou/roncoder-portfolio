import React from "react"
import './App.css'
import Header from "./components/header";
import Banner from "./components/banner";
import Skills from "./components/skills";

function App() {
    return (
        <>
            <Header/>
            <Banner/>
            <Skills/>
            <div className={"h-96"}/>
        </>
    )
}

export default App
