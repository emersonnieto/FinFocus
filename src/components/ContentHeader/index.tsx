import React, { ReactNode } from "react";
import { Container, TitleContainer, Controllers } from "./styles";
import SelectInput from "../SelectInput";


const ContentHeader: React.FC = () => {

    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
    ]

    return (
        <Container>
            <TitleContainer>
                <h1>Titulo</h1>
            </TitleContainer>
            <Controllers>
                <SelectInput options={options} />
                <SelectInput options={options}/>
            </Controllers>
        </Container>
    );
};

export default ContentHeader;