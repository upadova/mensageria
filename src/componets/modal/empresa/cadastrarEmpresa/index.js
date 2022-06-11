import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../../../services/api";

export default function CadastrarEmpresa({empresas}) {
    const [empresa, setEmpresa] = useState('');
    const [balanco, setBalanco] = useState('');
    const [email, setEmail] = useState('');

    async function insertEmpresa(){
        await api.post('/empresa',{
            balance : balanco,
            corporateName: empresa,
            email: email
        })
        .then((res)=>{
            empresas();
            toast.success('Empresa inserida com sucesso');
            setEmpresa('');
            setBalanco('');
            setEmail('');
        })
        .catch((err)=>{
            toast.error(err.mensage);
        });
    }

    function handleSubmit() {
        if(empresa !== '' && balanco !== '' && email !== ''){
            insertEmpresa();
        }else{
            toast.error('Falta campos a ser preenchido !')
        }
        
    }

    return (
        <>
            <div className="modal fade" id="cadastrar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Cadastrar Empresa</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 mt-3">
                                <label htmlFor="empresa" className="form-label">Empresa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="empresa"
                                    placeholder="Nome da Empresa"
                                    name="empresa"
                                    required
                                    value={empresa}
                                    onChange={(e) => { setEmpresa(e.target.value) }}
                                />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="balanco" className="form-label">Balanço</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="balanco"
                                    placeholder="Balanço da Empresa"
                                    name="balanco"
                                    required
                                    value={balanco}
                                    onChange={(e) => { setBalanco(e.target.value) }}
                                />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email da Empresa"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick={handleSubmit}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}