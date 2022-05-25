import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import api from '../../services/api';
import Container from "../../componets/container";
import Sidebar from '../../componets/sidebar';
import Loader from "../../componets/loader";

export default function Empresas() {
const [values, setValues] = useState();
const [value, setValue] = useState();
const [loading, setLoading] = useState(true);

    const empresas = useCallback(()=>{
        async function getEmpresas() {
            await api.get("/empresa/all")
                .then((res) => {
                    let data = res.data.map((empresa) => ({
                        id: empresa.id,
                        corporateName: empresa.corporateName,
                        balance: empresa.balance,
                        email: empresa.email
                    }));
                    console.log(data);
                    setValues(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.message);
                })
        }

        getEmpresas();
    },[]);

    useEffect(() => {
        empresas();
    },[empresas]);


    const paginationComponentOptions = {
        rowsPerPageText: 'Linhas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const columms = [
        {
            id: 1,
            name: 'Empresa',
            selector: (row) => row.corporateName,
            sortable: true,
            reorder: true,
            grow: 2,
        },
        {
            id: 2,
            name: 'Balanço',
            selector: (row) => row.balance,
            sortable: true,
            reorder: true,
            hide: 'md',
        },
        {
            id: 3,
            name: 'Email',
            selector: (row) => row.email,
            sortable: true,
            reorder: true,
            hide:'md',
        },
        {
            id: 4,
            name: 'Editar / Excluir',
            cell: (row) => <>
                <button
                    className="btn btn-sm btn-success me-2 text-nowrap"
                    onClick={(e) => { setValue(e.target.value) }}
                    value={row.editar}
                >
                    Editar
                </button>
                <button
                    className="btn btn-sm btn-danger text-nowrap"
                    onClick={(e) => { setValue(e.target.value) }}
                    value={row.editar}
                >
                    Excluir
                </button>
            </>,
            sortable: false,
            reorder: false
        }
    ];


    return (
        <>
            <Container>
                <Sidebar>
                    <DataTable
                    title='Empresas'
                    columns={columms}
                    data={values}
                    progressPending={loading}
                    highlightOnHover
                    pointerOnHover
                    paginationComponentOptions={paginationComponentOptions}
                    progressComponent={<Loader />}
                    pagination
                />
                </Sidebar>
            </Container>
        </>
    );
}