import React, { useState } from 'react'

const Header = () => {


    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };


    return (
        <div className='header d-f-r-j-between'>
            <div className="logo d-f-row-a-center">
                <img src="/logoTanuki_black.png" alt="logo tanuki" />
                <h1>WeatherRyo</h1>
            </div>

            <button class={`hamburger hamburger--collapse ${isActive ? 'is-active' : ''}`} type="button" onClick={toggleMenu}
            >
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>

        </div>
    )
}

export default Header
