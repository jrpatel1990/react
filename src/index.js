import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AdminLogin from './AdminLogin';
import AdminCategory from './AdminCategory';
import AdminChangePassword from './AdminChangePassword';
import AdminEditCategory from './AdminEditCategory';
import AdminEditProduct from './AdminEditProduct';
import AdminForgotPassword from './AdminForgotPassword';
import AdminHome from './AdminHome';
import AdminInsertCategory from './AdminInsertCategory';
import AdminInsertProduct from './AdminInsertProduct';
import AdminOrder from './AdminOrder';
import AdminProduct from './AdminProduct';
import AdminUser from './AdminUser';
import AdminViewOrderDetail from './AdminViewOrderDetail';
import AdminMenu from './AdminMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<AdminHome />} />
                    <Route path="/admin-category" index element={<AdminCategory />} />
                    <Route path="/admin-edit-product" index element={<AdminEditProduct />} />
                    <Route path="/admin-edit-category/ :categoryid" index element={<AdminEditCategory />} />
                    <Route path="/admin-forgot-password" element={<AdminForgotPassword />} />
                    <Route path="/admin-order" element={<AdminOrder />} />
                    <Route path="/admin-product" element={<AdminProduct />} />
                    <Route path="/admin-insert-category" element={<AdminInsertCategory />} />
                    <Route path="/admin-insert-product" element={<AdminInsertProduct />} />
                    <Route path="/admin-login" index element={<AdminLogin />} />
                    <Route path="/admin-user" index element={<AdminUser />} />
                    <Route path="/admin-view-order-detail" element={<AdminViewOrderDetail />} />
                    <Route path="/admin-change-password" element={<AdminChangePassword />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);



