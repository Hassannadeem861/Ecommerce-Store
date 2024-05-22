// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './AdminPanel.css'; // Import your custom CSS file

// const AdminPanel = () => {
//     return (
//         <div className="container mt-5">
//             <div className="card shadow admin-card">
//                 <div className="card-body">
//                     <h4 className="card-title mb-3 text-center">ADMIN PANEL</h4>
//                     <div className="list-group">
//                         <NavLink to="/create-category" className="list-group-item list-group-item-action">
//                             CREATE CATEGORY
//                         </NavLink>
//                         <NavLink to="/create-product" className="list-group-item list-group-item-action">
//                             CREATE PRODUCT
//                         </NavLink>
//                         <NavLink to="/users" className="list-group-item list-group-item-action">
//                             USERS
//                         </NavLink>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminPanel;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminPanel.css'; // Import your custom CSS file

const AdminPanel = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow admin-card">
                <div className="card-body">
                    <h4 className="card-title mb-3 text-center">ADMIN PANEL</h4>
                    <div className="list-group">
                        <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">
                            CREATE CATEGORY
                        </NavLink>
                        <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">
                            CREATE PRODUCT
                        </NavLink>
                        <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">
                            USERS
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
