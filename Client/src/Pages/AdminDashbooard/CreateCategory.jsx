import React from 'react'
import AdminDashboard from './AdminDashboard'
const CreateCategory = () => {
    return (
        <div style={{ minHeight: "50vh" }}>
            <div className="row">
                <div className="col-md-10">
                    <AdminDashboard />
                </div>
                <div>
                    <h1>CREATE CATEGORY</h1>
                </div>
            </div>
        </div>
    )
}

export default CreateCategory