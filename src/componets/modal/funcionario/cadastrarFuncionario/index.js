import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../../../services/api";

export default function CadastrarFuncionario({ funcionarios }) {
    const [nome, setNome] = useState('');
    const [balanco, setBalanco] = useState('');
    const [salario, setSalario] = useState('');
    const [companyId, setComapanyId] = useState('');
    const [empresa, setEmpresa] = useState([]);

    async function insertFuncionario() {
        await api.post('/funcionario', {
            balance: balanco,
            companyId: companyId,
            id: companyId,
            name: nome,
            salary: salario
        })
            .then((res) => {
                funcionarios();
                toast.success('Funcionário inserido com sucesso');
                setNome('');
                setBalanco('');
                setSalario('');
                setComapanyId('');
            })
            .catch((err) => {
                toast.error(err.mensage);
                setComapanyId('');
            });
    }

    useEffect(() => {
        async function empresas() {
            await api.get('/empresa/all')
                .then((res) => {
                    console.log(res.data);
                    setEmpresa(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        empresas();
    }, []);
    

    function handleSubmit() {
        if (nome !== '' && balanco !== '' && salario !== '') {
            insertFuncionario();
        } else {
            toast.error('Falta campos a ser preenchido !')
        }

    }

    return (
        <>
            <div className="modal fade" id="cadastrar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Cadastrar Funcionário</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 mt-3">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    placeholder="Nome"
                                    name="nome"
                                    required
                                    value={nome}
                                    onChange={(e) => { setNome(e.target.value) }}
                                />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="balanco" className="form-label">Balanço</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="balanco"
                                    placeholder="Balanço"
                                    name="balanco"
                                    required
                                    value={balanco}
                                    onChange={(e) => { setBalanco(e.target.value) }}
                                />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="salario" className="form-label">Salário</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="salario"
                                    placeholder="Salário"
                                    name="salario"
                                    required
                                    value={salario}
                                    onChange={(e) => { setSalario(e.target.value) }}
                                />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="empresa" className="form-label">Empresa</label>
                                <select id="empresa" className="form-control form-select" onChange={(e) => { setComapanyId(e.target.value) }}>
                                    <option value={0}>Selecione</option>
                                    {empresa ?
                                        empresa.map((item) => (
                                            <option key={item.id} value={item.id}>{item.corporateName}</option>
                                        ))
                                        :
                                        <option>Aguarde ...</option>
                                    }
                                </select>
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