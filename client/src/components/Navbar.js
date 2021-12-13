import React from "react"
import './SideDrawer'
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = ({click}) => {
    return (
        <nav className={'navbar'}>
            <div className={'navbar_logo'}>
                <h2>Auto Parts Shop</h2>
            </div>

            <ul className={'navbar_links'}>
                <li>
                    <Link to={'/cart'} className={'cart_link'}>
                        <i className={'fas fa-shopping-cart'}></i>
                        CART
                        <span className={'cart_logo'}>0</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        Shop
                    </Link>
                </li>
            </ul>

            <div className={'hamburger_menu'} onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar