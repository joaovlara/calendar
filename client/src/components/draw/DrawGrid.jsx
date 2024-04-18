import React from 'react';
import ToggleButton from "../toggle-button/ToggleButton";
import { ContainerDraw, MainH1, TextLeft } from "..//../styles/styles.draw";
import { ToastContainer } from "react-toastify";
import Form from "./Form";
import Grid from "./Grid"

function DrawGrid({ toggleTheme }) {

    return (
        <ContainerDraw>
            <ToastContainer autoClose={3000} position="bottom-left" />
            <ToggleButton toggleTheme={toggleTheme} />
            <MainH1>Calendário de Limpeza</MainH1>
            <TextLeft>Insira o nome</TextLeft>
            <Form />
            <Grid />
        </ContainerDraw>
    );
}

export default DrawGrid;
