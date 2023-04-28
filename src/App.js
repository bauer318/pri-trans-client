import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Sidebar>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/comment" element={<Comment/>}/>
                        <Route path="/analytics" element={<Analytics/>}/>
                        <Route path="/product" element={<Product/>}/>
                        <Route path="/productList" element={<ProductList/>}/>
                    </Routes>
                </Sidebar>
            </BrowserRouter>
        </div>
    );
};

export default App;