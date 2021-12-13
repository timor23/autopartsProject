import './CartItem.css';
import {Link} from "react-router-dom";



const CartItem = () => {
    return (
        <div className={'cartItem'}>
            <div className={'cartItem-image'}>
                <img
                    src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                    alt="product name"/>
            </div>
            
            <Link to={`/product/${111}` } className={'cartItem-name'}>
                <p>Product 1</p>
            </Link>
            
            <p className={'cartItem-price'}>$0000</p>

            <select className={'cartItem-select'}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <button className={'cartItem-deleteBtn'}>
                <i className={'fas fa-trash'}></i>
            </button>
        </div>
    )
}

export default CartItem