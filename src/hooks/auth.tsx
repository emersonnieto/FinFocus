import React, { createContext, useState, useContext, ReactNode } from "react";

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [logged, setLogged ] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@finfocus:logged');

        return !!isLogged;
    });

    const signIn = (email: string, password: string) => {
        if(email === 'emerson@gamil.com' && password === '19930926'){
            localStorage.setItem('@finfocus:logged', 'true');
            setLogged(true);
        }else {
            alert('Usuário ou senha Inválidos')
        }
    }

    const signOut = () => {
        localStorage.removeItem('@finfocus:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}} >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() : IAuthContext{
    const context  = useContext(AuthContext);

    return context;
}

export {AuthProvider, useContext, useAuth};