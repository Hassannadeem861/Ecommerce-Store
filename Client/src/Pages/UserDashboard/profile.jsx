import React from 'react'
import UserDashboard from './UserDashboard'

const profile = () => {
    return (
        <div style={{ minHeight: "50vh" }}>
            <div className="row">
                <div className="col-md-10">
                    <UserDashboard />
                </div>
                <div>
                    <h1>PROFILE</h1>
                </div>
            </div>
        </div>
    )
}

export default profile