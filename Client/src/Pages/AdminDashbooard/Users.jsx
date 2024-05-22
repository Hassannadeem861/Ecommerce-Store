import React from 'react'
import AdminDashboard from './AdminDashboard'

const Users = () => {
    return (
        <div style={{ minHeight: "50vh" }}>
            <div className="row">
                <div className="col-md-10">
                    <AdminDashboard />
                </div>
                <div>
                    <h1>ALL USERS</h1>
                </div>
            </div>
        </div>
    )
}

export default Users