import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Empresas from '../pages/empresas';

function PrivateOutlet() {
    const auth = true;
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default function Rotas() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/dashboard" element={<PrivateOutlet />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/empresas" element={<PrivateOutlet />}>
                <Route path="/empresas" element={<Empresas />} />
            </Route>
        </Routes>
    );

}