import {useState, useEffect} from "react";
import {toast} from "react-toastify";
import Loader from "../../loader";
import api from "../../../services/api";

export default function EditarEmpresa({id}){
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function getEmpresa(){
            await api.get(`/empresa/${id}`)
            .then((res)=>{
                console.log(res.data);
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err);
            })
        }

        getEmpresa();
    },[id !== undefined]);

    if (loading) {
        return (
            <div className="modal fade" id="editar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Editar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Loader />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <div className="modal fade" id="editar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Editar</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3 mt-3">
                                    <label htmlFor="login" className="form-label">Nome: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="login"
                                        placeholder="Nome"
                                        name="nome"
                                        onChange={(e) => {}}
                                        value={id}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd" className="form-label">Senha:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="pwd"
                                        placeholder="Senha"
                                        name="pswd"
                                        // onChange={(e) => setSenha(e.target.value)}
                                        // value={senha}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal">Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}