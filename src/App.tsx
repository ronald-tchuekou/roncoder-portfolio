import React from "react"
import './App.css'
import Header from "./components/header";

function App() {
    return (
        <>
            <Header/>
            <div className={"h-96"}/>
            <div
                style={{height: 2000, width: 300}}
                className={"bg-primary m-5"}></div>
        </>
    )
}

export default App
