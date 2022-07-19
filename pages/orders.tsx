import React from 'react'
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import Order from '../components/Order';
import { GET_ORDERS_FROM_SELLER } from '../graphql';

const Orders = () => {

    const { data, loading } = useQuery(GET_ORDERS_FROM_SELLER);

    const getOrdersBySeller = data?.getOrdersBySeller;

    if (loading) return <Spinner />

    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Orders</h1>

            <Link href="/neworder">
                <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white hover:bg-gray-800 hover:text-gray-200 mb-3 rounded uppercase font-bold text-sm">New Order</a>
            </Link>

            {getOrdersBySeller && getOrdersBySeller?.length !== 0 ? (
                getOrdersBySeller?.map(order => (
                    <Order
                        key={order.id}
                        {...order}
                    />
                ))
            ) :
                <p className="mt-5 text-center text-2xl">There are no orders yet</p>
            }
        </Layout>
    )
}

export default Orders