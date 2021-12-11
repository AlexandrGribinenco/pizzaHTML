import './App.css';
import Header from "./Components/Pages/Header/Header";
import Footer from "./Components/Pages/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import React from "react";
import MainPage from "./Components/Pages/MainPage/MainPage";
import RestaurantPage from "./Components/Pages/RestaurantPage/RestaurantPage";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route path="/restaurant/:products" element={<RestaurantPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
