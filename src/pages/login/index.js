import {Link} from 'react-router-dom';

export default function Login() {


    return (
        <section className="vh-100" style={{'backgroundColor':'#508bfc'}} >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow" style={{'borderRadius':'1rem'}} >
                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5">Sign in</h3>
                                <div className="form-outline mb-4">
                                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="typePasswordX-2">Senha</label>
                                </div>
                                {/* <div className="form-check d-flex justify-content-start mb-4">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                    <label className="form-check-label" htmlFor="form1Example3"> Lembrar senha </label>
                                </div> */}
                                {/* <button className="btn btn-primary btn-lg btn-block shadow" type="submit">Login</button> */}
                                <Link className='btn btn-primary btn-lg btn-block shadow' to="/dashboard">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}