import styled, { css } from 'styled-components';

/* Separação divisões da tela*/

export const Content = styled.div`
    height: 100vh;
    width:100vw;
    display: flex;
    flex-direction: row;
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
    width: 100%;
`
export const FormAdd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const BtnAdd = styled.button`

    background-color: #B73625;
    font-family: 'Montserrat';
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
    font-family: 'Montserrat';
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
    font-family: 'Montserrat';
    display: flex;
    justify-content: center;
    font-size: 26px;
    padding: 8% 0% 8% 0%;
`;
export const TextLeft = styled.p`
    font-family: 'Montserrat';
    font-size: 15px;
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
    
`
export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const DayWeek = styled.div`
    font-family: 'Montserrat';
    display: flex;
    align-items: end;
    border: outset 1px;
    width: 14.07%;
    height: 4vh;
    cursor: pointer;
`;
export const StrongWeek = styled.strong`
    font-family: 'Montserrat';
`
export const DayDiv = styled.div`
    font-family: 'Montserrat';
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    border: outset 1px;
    height: 10vh;
    width: 14.07%;
    cursor: pointer;

  ${props =>
        props.isToday &&
        css`
      border: solid 1px #B73625;
    `}
`;
export const Day = styled.p`
    font-family: 'Montserrat';
    margin: 4%;
`;
/* Estilos CoffeDay */

export const CoffeeDiv = styled.div`
    display: flex;
    flex-direction:column;
    margin: 3%;
`;
export const TextCoffee = styled.strong`
    font-family: 'Montserrat';
    font-size: 20px;
    padding-bottom: 2%;
`;
export const CoffeWeek = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const DayCoffee = styled.span`
    display: flex;
    font-family: 'Montserrat';
    padding-top: 5%;
    justify-content: center;
    border: lightblue 1px;
    box-shadow: 0px 4px 4px 4px #747474;
    width: 11vw;
    height: 12vh;

    ${props =>
        props.isToday &&
        css`
      border: solid 1px #B73625;
    `}
`;
