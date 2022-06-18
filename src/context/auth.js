import { useState, createContext, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [login, setLogin] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        const storageUser = localStorage.getItem('SistemaUser');

        function loadStorage() {
            if (storageUser) {
                setLogin(JSON.parse(storageUser));
            }
        }
        loadStorage();
    }, [])

    async function signIn(login, senha) {
        setLoadingAuth(true);
        await api.post('/oauth/token',
            {
                username: login,
                password: senha
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Credentials': 'true'
                }
            }
        )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        // setLogin(data);
        // storageUser(data);
        setLoadingAuth(false);
    }

    function storageUser(data) {
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    //Função para deslogar
    async function signOut() {
        localStorage.removeItem('SistemaUser');
        setLogin(null);
    }

    return (
        <AuthContext.Provider value={{
            signed: !!login,
            login,
            signIn,
            loadingAuth,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;