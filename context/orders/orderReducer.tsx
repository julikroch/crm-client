import { SELECT_CLIENT, SELECT_PRODUCT, PRODUCT_QUANTITY, UPDATE_TOTAL } from '../../types'

const OrderReducer = (state, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case SELECT_CLIENT:
            return {
                ...state,
                client: payload
            }
        case SELECT_PRODUCT:
            return {
                ...state,
                products: payload
            }
        case PRODUCT_QUANTITY:
            return {
                ...state,
                products: state.products.map(product => product.id === payload.id ? product = payload : product)
            }
        case UPDATE_TOTAL:
            return {
                ...state,
                total: state.products.reduce((newTotal, product) => newTotal += product.price * product.quantity, 0)
            }
        default:
            return state;
    }
}

export default OrderReducer;