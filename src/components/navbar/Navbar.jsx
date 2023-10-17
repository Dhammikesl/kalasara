import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/wlogo.png';
import { useState } from 'react';


const Menu = () => (
    <>
        <p>
            <a href="#surasura">සුරාසුර විශ්වය</a>
        </p>
        <p>
            <a href="#writer">කාලසර</a>
        </p>
        {/* <p>
            <a href="#features">Case Studies</a>
        </p>
        <p>
            <a href="#blog">Library</a>
        </p> */}
    </>
)

const Navbar = () => {
    const [toggleMenu, SetToggleMenu] = useState(false);
    return (
        <div className='navbar-main'>
            <div className='navbar-links'>
                <div className='navbar-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='navbar-content'>
                    <Menu />
                </div>
            </div>
            {/* <div className='navbar-sign'>
                <p>sign in</p>
                <button type='button' className='primary'> Sign Up</button>
            </div> */}

            <div className='navbar-menu'>
                {
                    toggleMenu
                        ? <RiCloseLine color='#fff' size={27} onClick={() => SetToggleMenu(false)} />
                        : <RiMenu3Line color='#fff' size={27} onClick={() => SetToggleMenu(true)} />
                }
                {
                    toggleMenu && (
                        <div className='navbar-menu-content scale-up-center'>
                            <div className='navbar-menu-links'>
                                <Menu />
                                {/* <div className='navbar-menu-sign'>
                                    <hr />
                                    <p>sign in</p>
                                    <button type='button' className='primary'> Sign Up</button>
                                </div> */}
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}


export default Navbar
