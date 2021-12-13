import './Home.css'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import {getProducts as listProducts} from "../actions/productActions";


const Home = () => {

    const dispatch = useDispatch()
    const getProducts = useSelector((state) => state.getProducts)
    const { products, loading, error } = getProducts;
    // const products = getProducts

    React.useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className={'homescreen'}>
            <h2 className={'homescreen-title'}>Latest Products</h2>

            <div className={'homescreen-products'}>
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map((product) => (
                    <ProductCard
                        key={product._id}
                        productId={product._id}
                        imageUrl={product.imageUrl}
                        price={product.price}
                        description={product.description}
                    />))

                }
            </div>
        </div>
    )
}

export default Home