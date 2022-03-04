import React, { useState } from 'react';
import './style.scss'
import '../../themify-icons-font/themify-icons/themify-icons.css'
const Header = () => {
    // open-close menu mobile
    const [openMenu, setOpenMenu] = useState(false)
    const handleOnclickMenu = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <div className='header' style={{ height: openMenu ? 'auto' : '38px' }}>
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
            <div className='ti-menu' onClick={handleOnclickMenu}></div>
        </div>
    )
}

export default Header;