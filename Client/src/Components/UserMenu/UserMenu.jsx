import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserPanel.css'; // Import your custom CSS file

const UserPanel = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow admin-card">
                <div className="card-body">
                    <h4 className="card-title mb-3 text-center">USER DASHBOARD</h4>
                    <div className="list-group">
                        <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">
                            PROFILE
                        </NavLink>
                        <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">
                            ORDERS
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPanel;