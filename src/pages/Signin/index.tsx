import React, { useState } from "react";
import logoImg from '../../assets/logo.svg';
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/auth";
import {
    Container,
    Logo,
    Form,
    FormTitle,

} from "./styles";

const SigIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {signIn} = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="FinFocus" />
                <h2>FinFocus</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>

                <Input
                    type="email"
                    placeholder="e-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit">Acessar</Button>

                <label>Não possui cadastro?
                <Link to="/Register" >
                    Cadastre-se aqui!
                </Link>
                </label>
                

            </Form>

            


        </Container>
    );
}

export default SigIn;