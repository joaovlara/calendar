import React from 'react';
import ToggleButton from "./ToggleButton";
import { ContainerDraw, MainH1, TextLeft, FormAdd, InputText, BtnAdd, SortArea, BtnSort, SortList } from "./styles";

function DrawGrid({ toggleTheme }) {
    return (
        <ContainerDraw>
            <ToggleButton toggleTheme={toggleTheme} />
            <MainH1>Calendário de Limpeza</MainH1>
            <TextLeft>Insira o nome</TextLeft>
            <FormAdd>
                <InputText />
                <BtnAdd>Adicionar</BtnAdd>
            </FormAdd>
            <SortArea>
                <TextLeft>Lista de participantes</TextLeft>
                <BtnSort>Sortear</BtnSort>
            </SortArea>
            <SortList>
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
            </SortList>        </ContainerDraw>
    );
}

export default DrawGrid;
