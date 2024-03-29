import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import Layout from '../components/Layout';
import AssignClient from '../components/orders/AssignClient';
import AssignProducts from '../components/orders/AssignProducts';
import OrderSummary from '../components/orders/OrderSummary';
import { showMsg } from '../utils';
import { NEW_ORDER, GET_ORDERS_FROM_SELLER } from '../graphql';
import OrderContext from '../context/orders/OrderContext';
import OrderTotal from '../components/orders/OrderTotal';

const NewOrder = () => {

    const [msg, setMsg] = useState('');
    const router = useRouter();

    const orderContext = useContext(OrderContext);
    const { client, products, total } = orderContext;

    const [newOrder] = useMutation(NEW_ORDER, {
        update(cache, { data: { newOrder } }) {
            const { getOrdersBySeller } = cache.readQuery({ query: GET_ORDERS_FROM_SELLER });

            cache.writeQuery({
                query: GET_ORDERS_FROM_SELLER,
                data: {
                    getOrdersBySeller: [...getOrdersBySeller, newOrder]
                }
            })

        }
    });

    const validateOrder = () => !products.every(product => product?.quantity && product.quantity > 0) || !total || Object.keys(client).length === 0 ? ' opacity-50 cursor-not-allowed ' : '';

    const createNewOrder = async () => {

        const productOrderInput = products.map(({ stock, __typename, ...product }) => product);


        try {
            await newOrder({
                variables: {
                    input: {
                        client: client.id,
                        total,
                        order: productOrderInput
                    }
                }
            });

            router.push('/orders');

            Swal.fire(
                'Done',
                'Order has been created succesfully',
                'success'
            )
        } catch (error) {
            setMsg(error.message.replace('GraphQL error: ', ''));

            setTimeout(() => {
                setMsg(null);
            }, 5000);
        }
    }

    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Create product</h1>

            {msg && showMsg(msg)}

            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <AssignClient />
                    <AssignProducts />
                    <OrderSummary />
                    <OrderTotal />

                    <button
                        type="button"
                        className={`bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 ${validateOrder()}`}
                        onClick={() => createNewOrder()}
                    >Create order</button>
                </div>
            </div>

        </Layout>
    );
}

export default NewOrder;