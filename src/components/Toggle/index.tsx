import React, { Component } from "react";
import { Container, ToggleLabel } from "./styles"
import Switch, { ReactSwitchProps } from 'react-switch';
 
const Toggle: React.FC = () => {
    return(
    <Container>
        <ToggleLabel>Ligth</ToggleLabel>
        <Switch
            checked
            uncheckedIcon = {false}
            checkedIcon = {false}
            onChange={() => {}}
            
        />
        <ToggleLabel>Dark</ToggleLabel>
        
    </Container>
    )
}

export default Toggle;