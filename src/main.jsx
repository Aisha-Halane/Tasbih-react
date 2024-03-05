import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Tasbiix from "./Components/Tasbiix";
import Footer from "./Components/Footer";

import "./index.css";

const root = document.getElementById("root");
createRoot(root).render(
    <div>
        <Header/>
        <Tasbiix/>
        <Footer/>
    </div>
)