import { Link } from "react-router-dom";
import { BsHouse, BsSpeedometer2, BsTable, BsPerson } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from '../../context/auth';
import Loader from "../loader";

export default function Sidebar({children}) {
    const { login, signOut } = useContext(AuthContext);
    return (
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">Menu</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link align-middle px-0">
                                <i><BsHouse size={20} /></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='#submenu1' data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i><BsSpeedometer2 size={20} /></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                            </Link>
                            <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <Link to='/dashboard' className="nav-link px-0"><span className="d-none d-sm-inline">Item</span> 1 </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard' className="nav-link px-0"><span className="d-none d-sm-inline">Item</span> 2 </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/empresas" className="nav-link px-0 align-middle">
                                <i><BsTable size={20} /></i> <span className="ms-1 d-none d-sm-inline">Empresas</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/funcionarios" className="nav-link px-0 align-middle">
                                <i><BsPerson size={20} /></i> <span className="ms-1 d-none d-sm-inline">Funcionarios</span>
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
                        <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                            {login ?
                                <span className="d-none d-sm-inline mx-1">{login.user}</span>
                                :
                                <span className="d-none d-sm-inline mx-1"><Loader /></span>
                            }
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><Link to="#" className="dropdown-item">Configura????es</Link></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><button className="dropdown-item" onClick={()=>{signOut()}}>Sair</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col py-3">
                {children}
            </div>
        </div>
    );
}