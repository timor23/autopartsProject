import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import {Routes, Route} from 'react-router'

import Home from "./components/Home";
import Cart from "./components/Cart";

import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import Product from "./components/Product";


function App() {

    const [sideToggle, setSideToggle] = React.useState(false)
    return (
        <Router>

            <Navbar click={() => setSideToggle(true)}/>
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
            <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
            <div>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route exact path="/product/:id" element={<Product/>}/>
                </Routes>

            </div>

        </Router>
    );
}

export default App;
