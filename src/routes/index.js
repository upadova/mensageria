import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';

function PrivateOutlet() {
    const auth = false;
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default function Rotas() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/dashboard" element={<PrivateOutlet />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );

}