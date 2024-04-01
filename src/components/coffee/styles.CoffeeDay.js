import styled, { css } from 'styled-components';

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
export const DayCoffee = styled.span`
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
        flex-direction:column;
    };
`;

export const EditableText = styled.span`
    margin: 1%;
    font-size: 15px;
    font-family: 'Montserrat';
    @media (max-width: 768px) {
        font-size: 12px;
    };
`;