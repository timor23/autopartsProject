import './ProductCard.css'
import {Link} from "react-router-dom";

const ProductCard = ({imageUrl, name, price, description, productId}) => {

    return (
        <div className={'product'}>
            <img src={imageUrl} alt={name}/>

            <div className={'product_info'}>
                <p className={'product_name'}>{name}</p>
                <p className={'product_description'}>{description.substring(0,100)}</p>

                <p className={'product_price'}>{price}</p>

                <Link className={'info_button'} to={`/product/${productId}`}>View</Link>
            </div>
        </div>
    )
}

export default ProductCard