import './SideDrawer.css'
import {Link} from "react-router-dom";

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ['side_drawer']

    if (show) {
        sideDrawerClass.push('show')
    }
    return (
        <div className={sideDrawerClass.join(' ')}>
            <ul className={'side_drawer_links'} onClick={click}>
                <li>
                    <Link to={'/cart'}>
                        <i className={'fas fa-shopping-cart'}></i>
                        <span>
                            Cart <span className={'side_drawer_cart'}>0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer