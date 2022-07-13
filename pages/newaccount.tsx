import React from 'react'
import Layout from '../components/Layout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation, gql } from '@apollo/client'

const NewAccount = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is mandatory'),
            lastname: Yup.string().required('Last name is mandatory'),
            email: Yup.string().email('Email not valid').required('Email is mandatory'),
            password: Yup.string().required('Password is mandatory').min(6, 'Password must have more than 6 characters')
        }),
        onSubmit: values => {

        }
    })

    return (
        <>
            <Layout>
                <h1 className='text-center text-2xl text-white font-light'>Create new account</h1>

                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-sm">
                        <form
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className='mb-4'>
                                <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
                                <input
                                    type="text"
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='name'
                                    placeholder='Enter your name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleChange}
                                />
                            </div>
                            {formik.touched.name && formik.errors.name ?
                                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.name}</p>
                                </div>
                                : null
                            }
                            <div className='mb-4'>
                                <label htmlFor="lastname" className='block text-gray-700 text-sm font-bold mb-2'>Last Name</label>
                                <input
                                    type="text"
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='lastname'
                                    placeholder='Enter your last name'
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleChange}
                                />
                            </div>
                            {formik.touched.lastname && formik.errors.lastname ?
                                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.lastname}</p>
                                </div>
                                : null
                            }
                            <div className='mb-4'>
                                <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                                <input
                                    type="email"
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='email'
                                    placeholder='Enter your email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleChange}
                                />
                            </div>
                            {formik.touched.email && formik.errors.email ?
                                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.email}</p>
                                </div>
                                : null
                            }
                            <div>
                                <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                                <input
                                    type="password"
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='password'
                                    placeholder='Enter your password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleChange}
                                />
                            </div>
                            {formik.touched.password && formik.errors.password ?
                                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className="font-bold">Error</p>
                                    <p>{formik.errors.password}</p>
                                </div>
                                : null
                            }
                            <input
                                type="submit"
                                className="bg-gray-800 w-full mt-5 p-2 text-white uppercase cursor-pointer hover:bg-gray-900 transition-all duration-200"
                                value='Create new account'
                            />
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default NewAccount