import React, { useState } from 'react'

const Header = ({ setSearch }) => {


    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };


    return (
        <div className='header d-f-row-j-between'>

            <button onClick={() => { setSearch(false) }}>
                <div className="logo d-f-row-a-center">
                    <img src="/logoTanuki_black.png" alt="logo tanuki" />
                    <h4>WeatherRyo</h4>
                </div>

            </button>

            <button className={`hamburger hamburger--collapse ${isActive ? 'is-active' : ''}`} type="button" onClick={toggleMenu}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

        </div>
    )
}

export default Header
