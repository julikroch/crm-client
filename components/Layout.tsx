import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Sidebar from './Sidebar'
import { useRouter } from 'next/router'

const Layout = ({ children }: { children: React.ReactNode }) => {

    const title = 'CRM - Client Admin'

    const router = useRouter()

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossOrigin="anonymous" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
            </Head>

            {router.pathname === '/login' || router.pathname === '/newaccount' ? (
                <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
                    <div>
                        {children}
                    </div>
                </div>
            ) : (
                <div className="bg-gray-200 min-h-screen">
                    <div className="flex min-h-screen">
                        <Sidebar />

                        <main className='sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5'>
                            <Header />
                            {children}
                        </main>
                    </div>
                </div>
            )}
        </>
    )
}

export default Layout