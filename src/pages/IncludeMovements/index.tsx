import React from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";

import {
  Container,
  Form,
  FormTitle,
  ContentType

} from "./styles";

const IncludeMovements: React.FC = () => {

  return (
    <Container>

      <Form onSubmit={() => { }}>
        <FormTitle>Adicionar Movimento</FormTitle>

        <label htmlFor="description">Descrição:</label>
        <Input
          type="input"
          placeholder="Descrição"
          required
        />

        <ContentType>
          <label htmlFor="typePayment">Forma de Pgamento:</label>
          <select id="typePayment" name="typePayment">
            <option value="credito">Crédito</option>
            <option value="debito">Débito</option>
          </select>
        </ContentType>

        <label htmlFor="value">Valor:</label>
        <Input
          type="input"
          placeholder="R$"
          required
        />

        <ContentType>
          <label htmlFor="type">Tipo:</label>
          <select id="type" name="type">
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </ContentType>

        <label htmlFor="date">Data:</label>
        <Input
          type="date"
          placeholder=""
          required
        />

        <ContentType>
          <label htmlFor="frequency">Frequência:</label>
          <select id="frequency" name="frequency">
            <option value="recorrente">Recorrente</option>
            <option value="eventual">Eventual</option>
          </select>
        </ContentType>


        <Button type="submit">Adicionar</Button>

      </Form>


    </Container>
  );
}

export default IncludeMovements;