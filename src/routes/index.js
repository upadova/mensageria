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
            <Route exact path='/' element={<Login />} />
            <Route exact path="/dashboard" element={<PrivateOutlet />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route exact path="/empresas" element={<PrivateOutlet />}>
                <Route exact path="/empresas" element={<Empresas />} />
            </Route>
        </Routes>
    );

}