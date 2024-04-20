import React, { useState } from "react";
import logoimg from '../../assets/logo.svg'
import { Link } from "react-router-dom";

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdDoubleArrow,
    MdAdd,
    MdDelete,
    MdEdit,
    MdArrowDropDown
} from 'react-icons/md'

import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    Dropdown,
    DropdownContent
} from "./styles";

const Aside: React.FC = () => {

    const [showDropdown, setShowDropdown] = useState(false);

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

                <Dropdown onClick={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                    <Link to="#">
                        <MdDoubleArrow />
                        Movimentações
                        <MdArrowDropDown />
                    </Link>
                    {showDropdown && (
                        <DropdownContent>
                            <Link to="/include">
                                <MdAdd />
                                Adicionar
                            </Link>
                            <Link to="#">
                                <MdEdit />
                                Editar
                            </Link>
                            <Link to="#">
                                <MdDelete />
                                Excluir
                            </Link>
                        </DropdownContent>
                    )}
                </Dropdown>

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