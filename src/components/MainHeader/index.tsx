import React, {useMemo} from "react";
import emojis from "../../utils/emojis";
import { Container, Profile, Welcome, UserName } from "./styles";



const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice];
    },[]);
    return (
        <Container>
            <div />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Emerson Nieto</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;