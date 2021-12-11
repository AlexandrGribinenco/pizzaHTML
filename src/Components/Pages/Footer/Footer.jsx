import React from "react";
import "../../../css/style.css"
import logo from "../../../img/icon/logo.svg"
import inst from "../../../img/social/instagram.svg"
import fb from "../../../img/social/fb.svg"
import vk from "../../../img/social/vk.svg"


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <img src={logo} alt="logo" className="logo footer-logo"/>
                    <nav className="footer-nav">
                        <a href="#" className="footer-link">Ресторанам </a>
                        <a href="#" className="footer-link">Курьерам</a>
                        <a href="#" className="footer-link">Пресс-центр</a>
                        <a href="#" className="footer-link">Контакты</a>
                    </nav>
                    <div className="social-links">
                        <a href="#" className="social-link"><img src={inst} alt="instagram"/></a>
                        <a href="#" className="social-link"><img src={fb} alt="facebook"/></a>
                        <a href="#" className="social-link"><img src={vk} alt="vk"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
