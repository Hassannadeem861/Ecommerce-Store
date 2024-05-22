import React from 'react';
import AdminMenu from '../../Components/AdminMenu/AdminMenu';
import { useAuth } from '../../Components/Context-Api/Auth';
import './AdminDashboard.css'; // Import your custom CSS file

const AdminDashboard = () => {
    const [auth] = useAuth();

    return (
        <div className="">
            <div className="row">
                <div className="col-md-5">
                    <AdminMenu />
                </div>
                <div className="">
                    <br />
                    <br />

                    <div className="admin-details">
                        <h4>Admin Name: {auth.user.name}</h4>
                        <h4>Admin Email: {auth.user.email}</h4>
                        <h4>Admin Role: {auth.user.role}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
