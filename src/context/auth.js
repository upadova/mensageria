import { useState, createContext, useEffect } from 'react';

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
        let data = {
            user : login,
            senha : senha
        }
        setLogin(data);
        storageUser(data);
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