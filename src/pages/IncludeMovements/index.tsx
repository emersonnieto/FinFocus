import React from "react";

import {
  Container,
} from "./styles";

import ContentHeader from "../../components/ContentHeader";
import Content from "../../components/Content";

const IncludeMovements: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Adicionar" linecolor="#4e41f0">
        <div />
      </ContentHeader>

      <Content>
        <form action="#" method="post">
          <label htmlFor="description">Descrição:</label>
          <input type="text" id="description" name="description" />

          <label htmlFor="value">Valor:</label>
          <input type="number" id="value" name="value" />

          <label htmlFor="type">Tipo:</label>
          <select id="type" name="type">
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>

          <label htmlFor="frequency">Frequência:</label>
          <select id="frequency" name="frequency">
            <option value="recorrente">Recorrente</option>
            <option value="eventual">Eventual</option>
          </select>

          <label htmlFor="date">Data:</label>
          <input type="date" id="date" name="date" />

          <button type="submit">Adicionar Movimento</button>
        </form>
      </Content>

    </Container>
  )
}

export default IncludeMovements;