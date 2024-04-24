import React from "react";
import logoimg from '../../assets/logo.svg'
import { Link } from "react-router-dom";

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

} from "./styles";

const Aside: React.FC = () => {

    return (
        <Container>
            <Header>
                <LogImg src={logoimg} alt="Logo Minha Carteira" />
                <Title>FinFocus</Title>
            </Header>

            <MenuContainer>
                <Link to="/dashboard">
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

                <Link to="#" >
                    <MdExitToApp />
                    Sair
                </Link>

            </MenuContainer>
        </Container>
    );
}

export default Aside;