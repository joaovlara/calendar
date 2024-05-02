import styled, { css } from 'styled-components';
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

export const CoffeeContainer = styled.div`
    display: flex;
    flex-direction:column;
    margin: 3%;

    @media (max-width: 768px) {
        margin: 1%;
    };
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

    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    };
`;
export const CoffeeDiv = styled.div`
    ${props =>
        props.isToday &&
        css`
        border-top: solid 3px #B73625;
        `}

        @media (max-width: 768px) { 
            margin: 1%;
        };
`;
export const CardCoffee = styled.span`
    display: flex;
    flex-direction: column; 
    font-family: 'Montserrat';
    padding-top: 5%;
    border: lightblue 1px;
    box-shadow: 0px 2px 2px 2px ${(props) => props.theme.shadow};;
    width: 12vw;
    height: 12vh;
    background-color: ${(props) => props.theme.card};

        @media (max-width: 768px) {
            padding-top: 0%;
            height: 6.5vh;
            width: 45vw;  
            justify-content: space-around;
            flex-direction:row;  
        };
`;
export const DayCoffee = styled.strong`
    display: flex;
    justify-content: center;
    font-family: 'Montserrat';
    color: ${(props) => props.theme.withe};

    @media (max-width: 768px) {
        font-weight: 20px;
        align-items:center;
        justify-content: start;
    };
`;
export const MemberName = styled.span`
    display:flex;
    padding-top: 8%;
    flex-wrap: wrap;
    justify-content: space-around;
    color: ${(props) => props.theme.withe};

    @media (max-width: 768px) {
        align-items:center;
        justify-content:center;
        padding-top: 0%;
    };
`;

export const EditableText = styled.span`
    margin: 1%;
    font-size: 15px;
    font-family: 'Montserrat';

    @media (max-width: 768px) {
        flex-direction:column;
        font-size: 12px;
    };
`;

//modal

export const Modal = styled.div`
    display:flex;
    justify-content: space-around;
    width: 50%;
    margin-top: 1%;
    font-family: 'Montserrat';
    border: lightblue 1px;
    box-shadow: 0px 2px 2px 2px ${(props) => props.theme.shadow};;
    background-color: ${(props) => props.theme.card};

        @media (max-width: 768px) {
            padding-top: 0%;
            height: 6.5vh;
            justify-content: space-around;
            flex-direction:row;  
        };
`

export const EditName = styled.p`
    font-family: 'Montserrat';
    font-size: 15px;
    color: ${(props) => props.theme.withe};

`

export const BtnCancel = styled(MdOutlineCancel)`
    width: 2vw;
    color: ${(props) => props.theme.withe};

    cursor: pointer;  
    &:hover {
        transform: scale(1.2);
    }

`;

export const BtnSave = styled(FaRegSave)`
    width: 2vw;
    color: ${(props) => props.theme.withe};
    cursor: pointer;  
    &:hover {
        transform: scale(1.2);
    }

`;