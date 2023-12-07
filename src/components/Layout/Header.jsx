import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiShoppingCart } from "react-icons/hi";
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';


const Header = () => {
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({ ...auth, user: null, token: '' });
        localStorage.removeItem('auth');
        toast.success('Logout Successfully')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand">
                            <HiShoppingCart /> ECommerce App
                        </Link>
                        {/* <Link to="/" className="navbar-brand">
                            🛒ECommerce App
                        </Link> */}
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/category">Category</NavLink>
                            </li>
                            {/* {!auth.user ? (<></>) : (<></>)} */}
                            {!auth.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/register">Register</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </li>
                                </>) : (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login" onClick={handleLogout} >Logout</NavLink>
                                    </li>
                                </>)}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">Cart (0)</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header