import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Spinner = ({ path = 'login' }) => {
    const [count, setCount] = useState(3)
    // console.log("local variable :", count);
    const navigate = useNavigate()
    const Location = useLocation()
    console.log("Location :", Location);


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000)
        // console.log("prevValue :", prevValue);
        // console.log("--prevValue :", --prevValue);
        console.log("interxval :", interval);
        count === 0 && navigate(`/${path}`, {
            state: Location.pathname
        })
        return () => clearInterval(interval)

    }, [count, navigate, Location, path])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', height: '100vh' }}>
            <h1 style={{ textAlign: 'center' }}>Redirecting to you in {count} second</h1>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner