import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from '../../context/auth';
import { Navigate } from "react-router-dom";
import Loader from '../../componets/loader';

export default function Login() {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const { signIn, loadingAuth, signed } = useContext(AuthContext);

    function handleSubmit(event) {
        event.preventDefault();
        if (user !== '' && senha !== '') {
            signIn(user, senha);
            setUser('');
            setSenha('');   
        } else {
            toast.error('Os campos usuário e senha não pode estar vazios.');
        }
    }


    if(signed ){
        return <Navigate to="/dashboard" />
    }else{
        return (
            <section className="vh-100" style={{ 'backgroundColor': '#508bfc' }} >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow" style={{ 'borderRadius': '1rem' }} >
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Sign in</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="typeUserX-2"
                                                className="form-control form-control-lg"
                                                autoFocus
                                                required
                                                value={user}
                                                onChange={(e) => { setUser(e.target.value) }}
                                            />
                                            <label className="form-label" htmlFor="typeUserX-2">Login</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="typePasswordX-2"
                                                className="form-control form-control-lg"
                                                required
                                                value={senha}
                                                onChange={(e) => { setSenha(e.target.value) }}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX-2">Senha</label>
                                        </div>
                                        {
                                            loadingAuth ?
                                                <button className="btn btn-primary btn-lg btn-block shadow" type="submit" disabled ><Loader /></button>
                                                :
                                                <button className="btn btn-primary btn-lg btn-block shadow" type="submit">Login</button>
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}