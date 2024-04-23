import React from "react";

import {
  Container,
  ContentForm,
  ContentDescription,
  ContentAmount,
  ContentType,
  ContentFrequency,
  ContentDate,
  ContentButton
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
        <ContentForm>
          <form action="#" method="post">
            <ContentDescription>
              <label htmlFor="description">Descrição:</label>
              <input type="text" id="description" name="description" />
            </ContentDescription>

            <ContentAmount>
              <label htmlFor="value">Valor:</label>
              <input type="number" id="value" name="value" />
              <ContentType>
                <label htmlFor="type">Tipo:</label>
                <select id="type" name="type">
                  <option value="entrada">Entrada</option>
                  <option value="saida">Saída</option>
                </select>
              </ContentType>
            </ContentAmount>

            <ContentFrequency>
              <label htmlFor="frequency">Frequência:</label>
              <select id="frequency" name="frequency">
                <option value="recorrente">Recorrente</option>
                <option value="eventual">Eventual</option>
              </select>
              <ContentDate>
                <label htmlFor="date">Data:</label>
                <input type="date" id="date" name="date" />
              </ContentDate>
            </ContentFrequency>

            <ContentButton>
              <button type="submit">Adicionar Movimento</button>
            </ContentButton>

          </form>
        </ContentForm>
      </Content>

    </Container>
  )
}

export default IncludeMovements;