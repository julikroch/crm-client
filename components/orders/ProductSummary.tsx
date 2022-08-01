import React, { useState, useContext, useEffect } from 'react';
import OrderContext from '../../context/orders/OrderContext';

const ProductSummary = (props) => {

    const orderContext = useContext(OrderContext);
    const { updateProductQuantity, updateTotal } = orderContext;

    const [quantity, setQuantity] = useState('');

    const { name, price } = props;

    const updateQuantity = () => {
        const newProduct = {
            ...props,
            quantity: Number(quantity)
        }

        updateProductQuantity(newProduct);
    }

    useEffect(() => {
        if (quantity) {
            updateQuantity();
            updateTotal()
        }
    }, [quantity])

    return (
        <div className="md:flex md:justify-between md:items-center mt-5">
            <div className="md:w-2/4 mb-2 md:mb-0">
                <p className="text-sm">{name}</p>
                <p className="text-sm">$ {price}</p>
            </div>

            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="shadow apperance-none border-rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:ml-4"
            />
        </div>
    );
}

export default ProductSummary;