import styled, { css } from 'styled-components';

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
};

export const SvgIcon = styled.svg`
    height: 2vh;
    fill: ${(props) => props.theme.svg}; 
`;

/* Separação divisões da tela*/

export const Content = styled.div`
    /* height: 100vh; */
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.black};

    @media (max-width: 768px) {
        flex-direction: column;
        height: 210vh;
        width: 100vw;}

    @media (max-width: 450px) {
        height: 200vh;
    };
`;
export const LeftContainer = styled.div`
    border-right: solid 1px;    
    border-color: ${(props) => props.theme.lines};
    display:flex;
    height: 100vh;
    width: 30vw;
    justify-content: center;
    @media (max-width: 768px) {
        height:100vh;
        width:100vw;
    };
`;
export const RightContainer = styled.div`
    height: 100vh;
    width: 70vw;

    @media (max-width: 768px) {
        flex-direction:column;
        height:100vh;
        width:100vw;
    };
`;