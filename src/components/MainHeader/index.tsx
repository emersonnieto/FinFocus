import React, { useMemo } from "react";
import emojis from "../../utils/emojis";
import { Container, Profile, Welcome, UserName } from "./styles";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";



const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice];
    }, []);
    return (
        <Container>
            <Link to="/include">
                <MdAdd />
                Adicionar
            </Link>
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Emerson Nieto</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;