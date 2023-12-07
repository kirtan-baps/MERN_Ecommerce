import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// import { toast } from "react-toastify";;
import toast from 'react-hot-toast';


const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(process.env.REACT_APP_API);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
                { name, email, password, phone, address }
            )
            if (res.data && res.data.success) {
                toast(res.data.message, {
                    duration: 1500,
                });
                // navigate('/login');
                setTimeout(() => { navigate('/login') }, 2000)
            } else {
                // toast.error(res.data.message);
                toast(res.data.message, {
                    duration: 1500,
                });
            }
        } catch (error) {
            // console.log(error)
            toast.error("Something Went Wrong");
        }
    };
    return (
        <Layout>
            <div className="container px-5 w-50" style={{ textAlign: "center" }} >

                <form onSubmit={handleSubmit}>
                    <div className='my-5 mx-3'>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                placeholder="Enter Your Name"
                                required
                                autoFocus
                            />
                        </div>
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
                        <div className="mb-3">
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"
                                placeholder="Enter Your Phone"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-control"
                                placeholder="Enter Your Address"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>

        </Layout>
    )
}

export default Register