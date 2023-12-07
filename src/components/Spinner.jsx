import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Spinner = () => {

    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000);
        count === 0 && navigate('/login', { state: location.pathname });
        return () => clearInterval(interval);
    }, [count, navigate, location.pathname])
    return (
        <>
            <div className="text-center m-5 align-items-center" role="status">
                <h1>Redirecting in {count} seconds</h1>
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner