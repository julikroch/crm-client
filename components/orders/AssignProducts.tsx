import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import { useQuery } from '@apollo/client';
import OrderContext from '../../context/orders/OrderContext';
import { GET_PRODUCTS } from '../../graphql';
import Spinner from '../Spinner';

const AssignProducts = () => {

    const orderContext = useContext(OrderContext);
    const { addProducts } = orderContext;

    const [products, setProducts] = useState([]);

    const { data, loading } = useQuery(GET_PRODUCTS);

    const selectProduct = productlist => setProducts(productlist)

    const getProducts = data?.getProducts;

    useEffect(() => {
        if (products.length !== 0) addProducts(products)
    }, [products]);

    if (loading) return <Spinner />

    return (
        <>
            <p
                className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold"
            >2.- Assign products to this order</p>
            <Select
                className="mt-3"
                options={getProducts}
                isMulti={true}
                onChange={(option) => selectProduct(option)}
                getOptionValue={(options: any) => options.id}
                getOptionLabel={(options: any) => `${options.name} - ${options.stock} available`}
                placeholder="Select your product"
                noOptionsMessage={() => "No product found"}
            />
        </>
    );
}

export default AssignProducts;