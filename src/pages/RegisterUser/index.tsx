import React from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";


import {
  Container,
  Form,
  FormTitle,

} from "./styles";

const RegisterUser: React.FC = () => {

  return (
    <Container>

      <Form onSubmit={() => { }}>
        <FormTitle>Cadastrar</FormTitle>

        <Input
          type="text"
          placeholder="nome completo"
          required
        />

        <Input
          type="email"
          placeholder="e-mail"
          required
        />

        <Input
          type="password"
          placeholder="senha"
          required
        />

        <Input
          type="password"
          placeholder="confirme a senha a senha"
          required
        />

        <Button type="submit">Cadastar</Button>


      </Form>




    </Container>
  );
}

export default RegisterUser;