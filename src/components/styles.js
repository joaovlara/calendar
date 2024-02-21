import styled from 'styled-components'

/* 1th separar divisões da tela*/

export const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: yellow;
`

export const LeftContainer = styled.div`
    background-color: orange;
    display:flex;
    width: 35vw;
    justify-content: center;
`

export const Grades = styled.div`
    flex-direction: column;
    background-color: purple;
    width: 100%;
`
/* Separação do contaiter esquerdo com formulario e botoes */

export const ContainerDraw = styled.div`
    display: flex;
    flex-direction:column;
    width: 75%;
    margin-top: 30%;
`
export const FormAdd = styled.form`
    background-color: rebeccapurple;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10% 0 10% 0;
`

export const SortArea = styled.div`
`
export const SortList = styled.ul`
`

export const BtnAdd = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 4px;
    border-radius: 3px;
`

/* Separação do container direito com calendário e semana*/

export const CalendarDays = styled.div`
    display: flex;
    border: solid 2px;
    height: 70vh;
`

export const Week = styled.div`
    background-color: green;
    display: flex;
    justify-content: center; 
    gap: 3%;
`

export const WeekDays = styled.p`
    display: flex;
    background-color: red;
    border: solid 2px;
    padding: 30px;
`
