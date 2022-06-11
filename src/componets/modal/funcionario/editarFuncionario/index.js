// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import Loader from "../../loader";
// import api from "../../../services/api";

export default function EditarFuncionario({ dados }) {
    if (dados === undefined) {
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
                                <p>ID: {dados.id}</p>
                                <p>Nome: {dados.name}</p>
                                <p>Salário: {dados.salary}</p>
                                <p>Balanço: {dados.balance}</p>
                                <p>Company: {dados.companyId}</p>
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