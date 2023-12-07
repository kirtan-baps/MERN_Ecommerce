import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { useAuth } from '../context/auth';


import toast from 'react-hot-toast';

// lol@gmail.com


const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();


    const navigate = useNavigate();
    const location = useLocation();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(process.env.REACT_APP_API);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
                { email, password }
            )
            if (res.data && res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                // navigate('/');
                navigate(location.state || '/');
                // setTimeout(() => { navigate('/login') }, 2000)
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            // console.log(error)
            toast.error("Something Went Wrong");
        }
    };


    return (
        <Layout>
            <div className="container px-5 w-50 my-5" style={{ textAlign: "center" }} >

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your Email "
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">LOGIN</button>
                </form>
            </div >

        </Layout >
    )
}

export default Login