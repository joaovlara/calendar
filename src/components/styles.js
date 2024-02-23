import styled, { css } from 'styled-components';

/* Separação divisões da tela*/

export const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
`;
export const LeftContainer = styled.div`
    border-right: solid 1px;
    display:flex;
    width: 30vw;
    height: 100vh;
    justify-content: center;
`;
export const Grades = styled.div`
    height: 100vh;
    width: 70vw;
`;
/* Separação contaiter esquerdo com formulario e botoes */
export const ContainerDraw = styled.div`
    display: flex;
    flex-direction:column;
    width: 75%;
    margin-top: 30%;

`;
export const SortArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20% 0% 10% 0%;
`;
export const SortList = styled.ul`
`;
/* Estilo DRAWGRID*/

export const InputText = styled.input`
    margin: 4% 0% 10% 0%;
    border: solid 1px;
    border-radius: 5px;
    height: 25px;
    width: 100%;
`
export const FormAdd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const BtnAdd = styled.button`
    background-color: #B73625;
    cursor: pointer;
    color: white;
    border: none;
    padding: 4px;
    border-radius: 3px;
    width: 100px;
    &:hover {
        box-shadow: 4px 4px 0px 0px rgba(119,36,25,1);
  }
`;
export const BtnSort = styled.button`
    background-color: #B73625;
    cursor: pointer;
    color: white;
    border: none;
    padding: 4px;
    border-radius: 3px;
    &:hover {
        box-shadow: 4px 4px 0px 0px rgba(119,36,25,1);
  }
`;
export const MainH1 = styled.h1`
    font-size: 23px;
    padding: 10% 0% 10% 0%;
`;
export const TextLeft = styled.p`
    font-size: 15px;

`;
/* Estilos do Calendar */

export const CalendarTable = styled.div`
  height: auto;
  width: 70vw;
  border-bottom: 1px solid black;
`;
export const Header = styled.div`
  padding: 1.4%;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  background-color: #B73625;
`;
export const Button = styled.div`
  cursor: pointer;
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: red;
`;
export const Day = styled.div`
  height: 87px;
  width: 14.2%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props =>
        props.isToday &&
        css`
      border: 1px solid #B73625;
    `}
`;

/* Estilos CoffeDay */

export const TextCoffee = styled.p`
    margin: 2%;

`;

export const CoffeWeek = styled.div`
    display: flex;
    justify-content: space-around;
`;
export const DayCoffee = styled.span`
    align-items: center;
    display: flex;
    border: 1px solid lightgrey;
    box-shadow: 2px 2px 2px #D9D9D9;    
    width: 110px;
`;
