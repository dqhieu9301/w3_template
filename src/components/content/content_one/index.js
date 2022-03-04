import React from "react";
import './style.scss';
import avatar from '../../../Img/avatar.jpg';
const ContentOne = () => {
    return (
        <div id="team" className="contentone">
            <div className="content-one">
                <span>OUR TEAM</span>
                <p>Meet the team - our office rats:</p>
                <div className="content-avatar">
                    <img src={avatar} alt='eror'></img>
                    <h3>Johnny Walker</h3>
                    <p>Web Designer</p>
                </div>
                <div className="content-avatar">
                    <img src={avatar} alt='eror'></img>
                    <h3>Johnny Walker</h3>
                    <p>Web Designer</p>
                </div>
                <div className="content-avatar">
                    <img src={avatar} alt='eror'></img>
                    <h3>Johnny Walker</h3>
                    <p>Web Designer</p>
                </div>
                <div className="content-avatar">
                    <img src={avatar} alt='eror'></img>
                    <h3>Johnny Walker</h3>
                    <p>Web Designer</p>
                </div>
            </div>
        </div>
    )
}

export default ContentOne;