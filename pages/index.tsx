import Layout from "../components/Layout"
import { useQuery } from "@apollo/client"
import { GET_CLIENTS_FROM_USER } from "../graphql"

const Home = () => {

  const { data } = useQuery(GET_CLIENTS_FROM_USER)

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Clients</h1>
      <table className="tablet-fixed shadow-md mt-10 w-full w-lg">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th className="w-1/5 py-2">Name</th>
            <th className="w-1/5 py-2">Company</th>
            <th className="w-1/5 py-2">Email</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {data?.getClientsSeller && data?.getClientsSeller.map((item: any) =>
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.name} {item.lastname}</td>
              <td className="border px-4 py-2">{item.company}</td>
              <td className="border px-4 py-2">{item.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Layout>
  )
}

export default Home
