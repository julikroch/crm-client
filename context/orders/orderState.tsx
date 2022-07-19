import React, { useReducer } from 'react';
import OrderContext from './OrderContext';
import OrderReducer from './OrderReducer';
import { SELECT_CLIENT, SELECT_PRODUCT, PRODUCT_QUANTITY, UPDATE_TOTAL } from '../../types'

const OrderState = ({ children }: { children: React.ReactNode }) => {

    const initialState = {
        client: null,
        products: [],
        total: 0
    }

    const [state, dispatch] = useReducer(OrderReducer, initialState);

    const addClient = (client) => {
        dispatch({
            type: SELECT_CLIENT,
            payload: client
        })
    }

    const addProducts = (productlist) => {

        let newState;

        if (state.products.length > 0) {

            newState = productlist.map(product => {
                const newObject = state.products.find((productState) => productState.id === product.id);
                return {
                    ...product,
                    ...newObject
                }
            })

        } else {
            newState = productlist;
        }

        dispatch({
            type: SELECT_PRODUCT,
            payload: newState
        })
    }

    const updateProductQuantity = (product) => {
        dispatch({
            type: PRODUCT_QUANTITY,
            payload: product
        })
    }

    const updateTotal = () => {
        dispatch({
            type: UPDATE_TOTAL
        })
    }

    const values = {
        client: state.client,
        products: state.products,
        total: state.total,
        addClient,
        addProducts,
        updateProductQuantity,
        updateTotal
    }

    return (
        <OrderContext.Provider
            value={values}
        >
            {children}
        </OrderContext.Provider>
    )
}

export default OrderState;