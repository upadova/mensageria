import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../context/auth';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Empresas from '../pages/empresas';
import Funcionarios from '../pages/funcionarios';

export default function Rotas() {
    const { signed } = useContext(AuthContext);
    function PrivateOutlet() {
        return signed ? <Outlet /> : <Navigate to="/" />;
    }

    return (
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route element={<PrivateOutlet />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/empresas" element={<Empresas />} />
                <Route exact path="/funcionarios" element={<Funcionarios />} />
            </Route>
        </Routes>
    );

}