import styled from 'styled-components';

export const ContainerDraw = styled.div`
    display: flex;
    flex-direction:column;
    width: 80%;
    margin-top: 8%;
`;

export const MainH1 = styled.h1`
    font-family: 'Montserrat';
    display: flex;
    font-size: 28px;
    padding-top: 10%;
    padding-bottom: 7%;
    color: ${(props) => props.theme.withe};
`;
export const TextLeft = styled.p`
    display:flex;
    padding-left: 8%;
    font-family: 'Montserrat';
    font-size: 15px;
    color: ${(props) => props.theme.withe};
`;

export const FormAdd = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.withe};
`;

export const InputText = styled.input`
    display: flex;
    justify-content: center;
    margin: 4% 0% 8% 0%;
    border: solid 1px;
    border-radius: 5px;
    height: 4vh;
    width: 85%;
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
  };
`;

export const Grid = styled.div`
`;

export const SortArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10% 0% 10% 0%;
    width: 90%;
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
  };
`;

export const SortList = styled.ul`
    overflow: auto; 
    margin-bottom: 8%;
    height: 55vh;
    color: ${(props) => props.theme.withe};
`;

export const ListaMemb = styled.li`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;