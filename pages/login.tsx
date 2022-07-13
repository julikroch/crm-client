import React from 'react'
import Layout from '../components/Layout'

const Login = () => {
    return (
        <>
            <Layout>
                <h1 className='text-center text-2xl text-white font-light'>Login</h1>

                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-sm">
                        <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
                            <div className='mb-4'>
                                <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                                <input
                                    type="email"
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='email'
                                    placeholder='Enter your email'
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                                <input
                                    type="password"
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='password'
                                    placeholder='Enter your password'
                                />
                            </div>
                            <input
                                type="submit"
                                className="bg-gray-800 w-full mt-5 p-2 text-white uppercase cursor-pointer hover:bg-gray-900 transition-all duration-200"
                                value='Log in'
                            />
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login