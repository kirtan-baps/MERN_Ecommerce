import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth';


const HomePage = () => {
    const [auth, setAuth] = useAuth();
    console.log(auth)
    console.log(JSON.stringify(auth, null, 4))
    // console.log(JSON.parse(JSON.stringify(auth, null, 4)))
    return (
        <Layout>
            <h1>HomePage</h1>
            {/* <pre>{JSON.stringify(auth)}</pre> */}
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </Layout>
    )
}

export default HomePage