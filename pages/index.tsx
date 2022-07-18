import Layout from "../components/Layout"
import Link from "next/link"
import { useQuery } from "@apollo/client"
import { GET_CLIENTS_FROM_USER } from "../graphql"
import Client from "../components/Client"

const Home = () => {

  const { data } = useQuery(GET_CLIENTS_FROM_USER)

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Clients</h1>

      <Link href="/newclient">
        <a href="" className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold w-full lg:w-auto text-center">New Client</a>
      </Link>

      <table className="tablet-fixed shadow-md mt-10 w-full w-lg">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th className="w-1/5 py-2">Name</th>
            <th className="w-1/5 py-2">Company</th>
            <th className="w-1/5 py-2">Email</th>
            <th className="w-1/5 py-2">Edit</th>
            <th className="w-1/5 py-2">Delete</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {data?.getClientsSeller && data?.getClientsSeller.map((item: any) =>
            <Client
              key={item.id}
              client={item}
            />
          )}
        </tbody>
      </table>
    </Layout>
  )
}

export default Home
