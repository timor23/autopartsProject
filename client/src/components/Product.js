import './Product.css';
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {getProductDetails} from "../actions/productActions";
import {addToCart} from "../actions/cartActions";
import {useParams} from "react-router-dom";
// import {useHistory} from "react-router/ts4.0";
// import {useHistory} from "react-router";
// import {useHistory} from "react-router";


const Product = () => {

    // const history = useHistory()
    const {id} = useParams()
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.getProductDetails)
    const {loading, error, product} = productDetails
    // const {product} = productDetails
    React.useEffect(() => {
        if (product && id !== product._id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id, product]);
    console.log(product)
    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        // history.push(`/cart`)
    }

    return (
        <div className={'productscreen'}>
            {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (
                <>
                    <div className={'productscreen-left'}>
                        <div className={'left-image'}>
                            <img src={product.imageUrl} alt={product.name}/>
                        </div>

                        <div className={'left-info'}>
                            <p className={'left-name'}>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className={'productscreen-right'}>
                        <div className={'right-info'}>
                            <p>
                                Price: <span>${product.price}</span>
                            </p>
                            <p>
                                Status: <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                            </p>
                            <p>
                                Qty
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </p>
                            <p>
                                <button type={'button'} onClick={addToCartHandler}>Add To Cart</button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Product