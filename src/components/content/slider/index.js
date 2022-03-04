import React, { useState } from "react";
import './style.scss';
const Slider = () => {
    const [open, Setopen] = useState(false)
    const handleOnclick = () => {
        Setopen(true)
    }

    const handleClose = () => {
        Setopen(false)
    }
    return (
        <div id="slider-slider" className="slider">
            <div className={open ? "modal" : "modal-none"}>
                <div className="modal-content">
                    <div className="first-content">
                        <h4>Oh snap! We just showed you a modal..</h4>
                        <div className="ti-close" onClick={handleClose}></div>
                        <p>Because we can <i className="ti-face-smile"></i> </p>
                    </div>
                    <div className="middle-content">
                        <p>Cool huh? Ok, enough teasing around..</p>
                        <p>Go to our <u>W3.CSS Tutorial</u> to learn more!</p>
                    </div>
                    <div className="end-content">
                        <p>Modal footer</p>
                    </div>
                </div>
            </div>
            <div className="content" onClick={handleOnclick}>
                <p>LEARN W3 .CSS</p>
            </div>
        </div>
    )
}

export default Slider;