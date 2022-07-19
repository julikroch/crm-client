import React from 'react'
import Layout from '../components/Layout'
import AssignClient from '../components/orders/AssignClient'
import AssignProducts from '../components/orders/AssignProducts'

const NewOrder = () => {

    return (
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Create New Order</h1>
            <AssignClient />
            <AssignProducts />
        </Layout>
    )
}

export default NewOrder