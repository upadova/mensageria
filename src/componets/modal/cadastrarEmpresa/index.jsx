// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import api from "../../../services/api";

export default function CadastrarEmpresa() {
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
                            <p>Empresa: </p>
                            <p>Balanço:</p>
                            <p>Email:</p>
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