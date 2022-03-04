import React, { useState } from "react";
import './style.scss';
import snow from '../../../Img/snow.jpg';
import lights from '../../../Img/lights.jpg';
import mountains from '../../../Img/mountains.jpg';
const ContentTwo = () => {
    const [open, setOpen] = useState(false)
    const handleOnclick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div id="work" className="contentwo">
            <div className="quater-text">
                <h2>Our Work</h2>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="quater">
                <img src={snow} alt='error'></img>
                <h3>Customer 1</h3>
                <h4>Trade</h4>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
            </div>
            <div className="quater">
                <img src={lights} alt='error'></img>
                <h3>Customer 1</h3>
                <h4>Trade</h4>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
            </div>
            <div className="quater">
                <img src={mountains} alt='error'></img>
                <h3>Customer 1</h3>
                <h4>Trade</h4>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
                <p>Blablabla</p>
            </div>
            <div className="ti-plus" onClick={handleOnclick}></div>
            <div className={open ? "vertical-nav" : "vertical-nav-none"}>
                <div className="close" onClick={handleClose}>
                    <p>CLOSE <i className="ti-close"></i></p>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="">CON GA</a></li>
                        <li><a href="">CON VIT</a></li>
                        <li><a href="">CON LON</a></li>
                        <li><a href="">CON CHO</a></li>
                        <li><a href="">CON MEO</a></li>

                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ContentTwo;