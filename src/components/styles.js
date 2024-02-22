import styled from 'styled-components'

/* Separação divisões da tela*/

export const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
`
export const LeftContainer = styled.div`
    display:flex;
    width: 35vw;
    height: 100vh;
    justify-content: center;
`
export const Grades = styled.div`
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`
/* Separação contaiter esquerdo com formulario e botoes */

export const ContainerDraw = styled.div`
    display: flex;
    flex-direction:column;
    width: 75%;
    margin-top: 30%;

`
export const SortArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20% 0% 10% 0%;
`
export const SortList = styled.ul`
`

/* Separação container direito com calendário e semana*/

export const CalendarDays = styled.div`
    display: flex;
    height: 70%;
    border: solid 1px;
`
export const Week = styled.div`
    display: flex;
    justify-content: center; 
    height: 30%;
    border-left: solid 1px;
`
export const WeekDays = styled.p`
    background-color: red;
    border: solid 2px;
    padding: 3%;
    margin: 4% 2% 4% 2%;
`
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
`
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
`
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
`
export const MainH1 = styled.h1`
    font-size: 23px;
    padding: 10% 0% 10% 0%;
`
export const TextLeft = styled.p `
    font-size: 15px;

`