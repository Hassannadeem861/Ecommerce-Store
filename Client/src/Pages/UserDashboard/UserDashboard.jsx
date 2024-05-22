import React from 'react';
import UserMenu from '../../Components/UserMenu/UserMenu.jsx';
import { useAuth } from '../../Components/Context-Api/Auth';
import './UserDashboard.css'; // Import your custom CSS file

const AdminDashboard = () => {
    const [auth] = useAuth();

    return (
        <div style={{ minHeight: "80vh" }}>
            <div className="row">
                <div className="col-md-5">
                    <UserMenu />
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;




//                     <div className="admin-details">
//                         <h4>Admin Name: {auth.user.name}</h4>
//                         <h4>Admin Email: {auth.user.email}</h4>
//                         <h4>Admin Role: {auth.user.role}</h4>
//                     </div>