import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./pages/UserList";
import CountryList from "./pages/CountryList";
import PaymentMethodList from "./pages/PaymentMethodList";
import CurrencyList from "./pages/CurrencyList";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Sidebar>
                    <Routes>
                        <Route path="/" element={<UserList/>}/>
                        <Route path="/users" element={<UserList/>}/>
                        <Route path="/countries" element={<CountryList/>}/>
                        <Route path="/currencies" element={<CurrencyList/>}/>
                        <Route path="/payment-methods" element={<PaymentMethodList/>}/>
                    </Routes>
                </Sidebar>
            </BrowserRouter>
        </div>
    );
};

export default App;