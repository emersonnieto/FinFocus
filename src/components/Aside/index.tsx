import React from "react";
import logoimg from '../../assets/logo.svg'

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'

import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink } from "./styles";

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoimg} alt="Logo Minha Carteira" />
                <Title>FinFocus</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#" >
                    <MdDashboard />
                        DashBoard
                </MenuItemLink>

                <MenuItemLink href="#" >
                    <MdArrowUpward />
                        Entradas
                </MenuItemLink>

                <MenuItemLink href="#" >
                    <MdArrowDownward />
                        Saídas
                </MenuItemLink>

                <MenuItemLink href="#" >
                    <MdExitToApp />
                        Sair
                </MenuItemLink>

            </MenuContainer>
        </Container>
    );
}

export default Aside;