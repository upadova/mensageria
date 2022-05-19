import { useState, createContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storageUser = localStorage.getItem('SistemaUser');

        function loadStorage() {
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();

    }, [])

    async function signUp() {
        setLoading(true);

    }

    async function signIn(login, senha) {
        setLoadingAuth(true);
        await api.post("/login", {
            "login": login,
            "senha": senha
        })
            .then((res) => {
                let dados = {
                    "login": login,
                    "access_token": res.data.access_token,
                    "refresh_token": res.data.refresh_token
                };
                setUser(dados);
                storageUser(dados);
                setLoadingAuth(false);
                toast.success(`Seja bem vindo, ${login}`);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
                setLoadingAuth(false);
            })

    }

    function storageUser(data) {
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    async function tokenRefresh(){
        const storageUser = localStorage.getItem('SistemaUser');
        let data = JSON.parse(storageUser);
        await api.get("/refreshToken",{
            headers:{
                'Authorization' : `Bearer ${data.refresh_token}`
            }
        })
        .then((res)=>{
            storageUser(res.data);
            console.log('[ Token Refresh]');
        })
        .catch(()=>{
            console.log('[ Token Refresh Error]');
        })
    }

    //Função para deslogar
    async function signOut() {
        let storage = localStorage.getItem('SistemaUser');
        let data = JSON.parse(storage);
        await api.post("/logout", data, {
            headers: {
                "authorization": `Bearer ${data.access_token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                toast.success('Até a próxima.');
            })
            .catch((err) => {
                toast.error('Erro ao tentar deslogar.');
            })
        localStorage.removeItem('SistemaUser');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            signUp,
            signOut,
            signIn,
            loadingAuth,
            setUser,
            storageUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;