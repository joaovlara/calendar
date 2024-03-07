import { useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as DeleteListaWhite } from '../img/icones/DeleteListaWhite.svg';
import { ReactComponent as DeleteListaBlack } from '../img/icones/DeleteListaBlack.svg';




/* Themes */
export const darkTheme = {
    black: "#171717",
    withe: "#f1f1f1",
    card: "#1B1B1B",
    shadow: "#0d0d0d",
    lines: "#747474",
};
export const lightTheme = {
    body: "#F1F1F1",
    shadow: "#747474",
    lines: "#747474",
    svg: DeleteListaBlack,
};

export const SvgIcon = styled.svg`
    height: 2vh;
    fill: ${(props) => props.theme.svg}; 
`;

/* Separação divisões da tela*/

export const Content = styled.div`
    height: 100vh;
    width:100vw;
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.black};
`;
export const LeftContainer = styled.div`
    border-right: outset 1px;
    display:flex;
    width: 30vw;
    height: 100vh;
    justify-content: center;
`;
export const RightContainer = styled.div`
    height: 100vh;
    width: 70vw;
`;

/* Separação contaiter esquerdo com formulario e botoes */

export const ContainerDraw = styled.div`
    display: flex;
    flex-direction:column;
    width: 80%;
    margin-top: 10%;
`;
export const SortArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20% 0% 10% 0%;
    width: 90%;
`;
export const SortList = styled.ul`
    color: ${(props) => props.theme.withe};
`;

/* Estilo DRAWGRID*/

export const InputText = styled.input`
    display: flex;
    justify-content: center;
    margin: 4% 0% 10% 0%;
    border: solid 1px;
    border-radius: 5px;
    height: 4vh;
    width: 85%;
`;
export const FormAdd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.withe};
`;
export const BtnAdd = styled.button`
    background-color: #B73625;
    font-family: 'Montserrat';
    cursor: pointer;
    color: white;
    border: none;
    padding: 4px;
    border-radius: 5px;
    width: 100px;
    &:hover {
        box-shadow: 4px 4px 0px 0px #772419;
  }
`;
export const BtnSort = styled.button`
    font-family: 'Montserrat';
    background-color: #B73625;
    cursor: pointer;
    color: white;
    border: none;
    padding: 4px;
    border-radius: 5px;
    &:hover {
        box-shadow: 4px 4px 0px 0px #772419;
  }
`;
export const MainH1 = styled.h1`
    font-family: 'Montserrat';
    display: flex;
    font-size: 28px;
    padding: 40% 0% 8% 0%;
    color: ${(props) => props.theme.withe};
`;
export const TextLeft = styled.p`
    display:flex;
    padding-left: 8%;
    font-family: 'Montserrat';
    font-size: 15px;
    color: ${(props) => props.theme.withe};
`;

export const ListaMemb = styled.li`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;

/* Estilos do Calendar */

export const CalendarTable = styled.div`
    width: 100%;
    height: 70vh;
`;
export const Header = styled.div`
    font-family: 'Montserrat';
    padding-left: 1%;
    display: flex;
    align-items: center;
    color: white;  
    height: 5vh;
    background-color: #B73625;
    cursor: pointer;
`;
export const MonthP = styled.p`
    font-family: 'Montserrat';
    
`;
export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const DayWeek = styled.div`
    font-family: 'Montserrat';
    display: flex;
    align-items: end;
    border: solid 1px;    
    border-color: ${(props) => props.theme.lines};
    width: 14.07%;
    height: 4vh;
    cursor: pointer;
`;
export const StrongWeek = styled.strong`
    font-family: 'Montserrat';
    color: ${(props) => props.theme.withe};
`
export const DayDiv = styled.div`
    font-family: 'Montserrat';
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    border: solid 1px;    
    border-color: ${(props) => props.theme.lines};
    height: 10vh;
    width: 14.07%;
    color: ${(props) => props.theme.withe};
    cursor: pointer;
  ${props =>
        props.isToday &&
        css`
      border-color: #B73625;
    `}
`;
export const Day = styled.p`
    font-family: 'Montserrat';
    margin: 4%;
`;

/* Estilos CoffeDay */

export const CoffeeContainer = styled.div`
    display: flex;
    flex-direction:column;
    margin: 3%;
`;
export const TextCoffee = styled.strong`
    font-family: 'Montserrat';
    font-size: 20px;
    padding-bottom: 2%;
    color: ${(props) => props.theme.withe};
`;
export const CoffeeWeek = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const CoffeeDiv = styled.div`
    ${props =>
        props.isToday &&
        css`
        border-top: solid 3px #B73625;
        `}
`;

export const CardCoffee = styled.span`
    display: flex;
    flex-direction: column; 
    font-family: 'Montserrat';
    padding-top: 5%;
    border: lightblue 1px;
    box-shadow: 0px 2px 2px 2px ${(props) => props.theme.shadow};;
    width: 11vw;
    height: 12vh;
    background-color: ${(props) => props.theme.card};
`;

export const DayCoffee = styled.span`
    display: flex;
    justify-content: center;
    font-family: 'Montserrat';
    color: ${(props) => props.theme.withe};
`;

export const EditableText = styled.p`
    font-size: 15px;
    display:flex;
    justify-content: center;
    padding-top: 15%;
    font-family: 'Montserrat';
    color: ${(props) => props.theme.withe};
`;

