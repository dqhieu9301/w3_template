import React from 'react';
import './style.scss'
import '../../themify-icons-font/themify-icons/themify-icons.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="nav">
                <ul className='navbar'>
                    <li>
                        <a href='#'><i className="ti-home"></i>Logo</a>
                    </li>
                    <li><a href='#team'>Team</a></li>
                    <li><a href='#work'>Work</a></li>
                    <li><a href='#price'>Price</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li>
                        <a href='/'>Dropdown <i className="ti-angle-down"></i></a>
                        <ul className='subnav'>
                            <li><a href='/'>Link</a></li>
                            <li><a href='/'>Link</a></li>
                            <li><a href='/'>Link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='ti-search'></div>
        </div>
    )
}

export default Header;