import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../Context-Api/Auth.jsx'
import axios from 'axios'
import Spinner from '../Spinner/Spinner.jsx'
import { toast } from "react-toastify";

const AdminRoute = () => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()
    console.log("local variable: ", auth);


    const authCheck = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/admin/dashboard", {
            headers: {
                Authorization: auth?.token
            }
        })
        if (response?.data) {
            // toast.success(response?.data?.message);
            setOk(true)
        } else {
            setOk(false)
        }
        console.log("response in http://localhost:8080/api/v1/admin/dashboard: ", response);
    }

    useEffect(() => {
        if (auth?.token) authCheck()
    }, [auth?.token]); // Dependency array (optional
    return ok ? <Outlet /> : <Spinner />

    return (
        <div>

        </div>
    )
}

export default AdminRoute