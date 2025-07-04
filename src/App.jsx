import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Home from "./pages/Home";
import Domain from "./pages/Domain.jsx";
import Minecraft from "./pages/Minecraft.jsx"
import Header from "./components/Header.jsx";
import "./styles/style.scss"
import Footer from "./components/Footer.jsx";
import React from "react";


export default function App() {
    return (

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/domain" element={<Domain />} />
                    <Route path="/minecraft" element={<Minecraft />} />

                </Routes>
                <Footer/>
            </BrowserRouter>
    );
}
