import React from 'react';
import './style.scss'

const Information = () => {
    return (
        <div id='contact' className='information'>
            <div className='address'>
                <h2>Contact Us</h2>
                <h3>Address</h3>
                <p>Swing by for a cup of coffee, or whatever.</p>
                <p><i className='ti-location-pin'></i> Chicago, US</p>
                <p><i className='ti-mobile'></i> +00 1515151515</p>
                <p><i className='ti-email'></i> test@test.com</p>
            </div>
            <form className='form-input'>
                <label>Name</label>
                <input className='input-text' type="text" required></input>
                <label>Email</label>
                <input className='input-text' type="email" required></input>
                <label>Message</label>
                <input className='input-text' type="text" required></input>
                <button>Send</button>
                <input className='checkbox' type="checkbox"></input> <pre>I like it!</pre>
            </form>
        </div>
    )
}

export default Information;