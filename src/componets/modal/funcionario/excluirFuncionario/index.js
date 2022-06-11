import { FcHighPriority } from "react-icons/fc";
// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import Loader from "../../../loader";
// import api from "../../../services/api";

export default function ExcluirEmpresa({ dados }) {
    if (dados === undefined) {
        return (
            <div className="modal fade" id="excluir" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Excluir</h5>
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
                <div className="modal fade" id="excluir" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Excluir</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p><FcHighPriority size={20}/> Deseja excluir o funcionário <b className="text-danger">{dados.name}</b> ?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}