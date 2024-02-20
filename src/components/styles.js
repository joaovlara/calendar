import styled from 'styled-components'

/* 1th separar divisões da tela*/

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    background-color: yellow;
`;

export const Limpeza = styled.div`
    background-color: orange;
    padding: 1.5%;
`

export const Grades = styled.div`
    background-color: purple;

`
/* Seração do contaiter esquerdo com formulario e botoes */


export const ContainerDraw = styled.div`
    padding: 1.5%;
`
export const FormAdd = styled.form`
    display: flex;
    padding: 5%;
    flex-direction: column;
    background-color: rebeccapurple;
    `
export const BtnAdd = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 4px;
    border-radius: 3px;
`

/* Separação do container direito com calendário e café*/ 

export const CalendarDays = styled.div`
    display: flex;
    justify-content: center;
    border: solid 2px;
    height: 90vh;
    width: 100vh;
    `