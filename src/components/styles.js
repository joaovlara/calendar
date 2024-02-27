import styled, { css } from 'styled-components';

/* Separação divisões da tela*/

export const Content = styled.div`
    height: 100vh;
    width:100vw;
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
export const RightContainer = styled.div`
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
    display: flex;
    justify-content: center;
    margin: 4% 0% 10% 0%;
    border: solid 1px;
    border-radius: 5px;
    height: 3vh;
    width: 90%;
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
    display: flex;
    justify-content: center;
    font-size: 26px;
    padding: 8% 0% 8% 0%;
`;
export const TextLeft = styled.p`
    font-size: 15px;
`;
/* Estilos do Calendar */

export const CalendarTable = styled.div`
  width: 100%;
  height: 70vh;
  border-bottom: 1px solid black;
`;
export const Header = styled.div`
  color: white;
  padding: 1.7%;
  display: flex;
  background-color: #B73625;
  cursor: pointer;
`;
export const Button = styled.div`
  cursor: pointer;
`;
export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const DayWeek = styled.div`
    display: flex;
    justify-content: flex-start;
    border-style: solid;
    border-width: 0px .5px .5px .0px;
    width: 14.17%;
    cursor: pointer;
`;

export const Day = styled.div`
    display: flex;
    justify-content: flex-end;
    border-style: solid;
    border-width: 0px .5px .5px .0px;
    height: 10vh;
    width: 14.17%;
  cursor: pointer;

  ${props =>
        props.isToday &&
        css`
      border-color:  #B73625;
      
    `}
`;

/* Estilos CoffeDay */

export const CoffeeDiv = styled.div`
    display: flex;
    flex-direction:column;
    margin: 2%;
`;

export const TextCoffee = styled.p`
    font-weight: bold;
    padding-bottom: 4%;
`;

export const CoffeWeek = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const DayCoffee = styled.span`
    display: flex;
    justify-content: center;
    border: lightblue 1px;
    box-shadow: 0px 4px 6px 4px #747474;
    width: 11vw;
    height: 12vh;
`;
