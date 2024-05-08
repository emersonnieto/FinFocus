import React from "react";
import logoimg from '../../assets/logo.svg'
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdAdd
} from 'react-icons/md'

import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemButton

} from "./styles";

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    return (
        <Container>
            <Header>
                <LogImg src={logoimg} alt="Logo Minha Carteira" />
                <Title>FinFocus</Title>
            </Header>

            <MenuContainer>
                <Link to="/">
                    <MdDashboard />
                    DashBoard
                </Link>

                <Link to="/include">
                    <MdAdd />
                    Adicionar
                </Link>


                <Link to="/list/entry-balance" >
                    <MdArrowUpward />
                    Entradas
                </Link>

                <Link to="/list/exit-balance" >
                    <MdArrowDownward />
                    Saídas
                </Link>

                <MenuItemButton onClick={signOut} >
                    <MdExitToApp />
                    Sair
                </MenuItemButton>

            </MenuContainer>
        </Container>
    );
}

export default Aside;