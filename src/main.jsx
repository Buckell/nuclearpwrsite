import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/index.jsx";
import ReactorPage from "./pages/ReactorPage/index.jsx";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Routes path="/">
                <Route index element={<HomePage />} />
                <Route path="stats" element={<ReactorPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
