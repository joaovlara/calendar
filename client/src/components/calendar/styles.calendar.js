import styled, { css } from 'styled-components';

export const CalendarTable = styled.div`
    height: 70vh;
    width: 70vw;
    @media (max-width: 768px) {
        width: 100vw;
    };
`;
export const Header = styled.div`
    font-family: 'Montserrat';
    padding-left: 1%;
    display: flex;
    align-items: center;
    color: white;  
    height: 5%;
    background-color: #B73625;
    cursor: pointer;
`;
export const MonthP = styled.p`
    font-family: 'Montserrat';
`;
export const Body = styled.div`
    display:flex;
    flex-direction:column;
    height: 95%;
    width: 70vw;
    @media (max-width: 768px) {
        width: 100vw;
    };
`;

export const WeekContainer = styled.div`
    display: flex;
    @media (max-width: 768px) {
    };

`;
export const DayWeek = styled.div`
    font-family: 'Montserrat';
    height: 4vh;
    width: 9.83vw;
    border: solid 1px;    
    border-color: ${(props) => props.theme.lines};
    cursor: pointer;

    @media (max-width: 768px) {
        width: 14vw;
    };
`;
export const TextWeek = styled.strong`
    font-family: 'Montserrat';
    color: ${(props) => props.theme.withe};
`;
export const DaysContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

export const DayCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  align-items: flex-end;
  font-family: 'Montserrat';
  height: 10vh;
  width: 9.83vw;
  border: solid 1px;
  border-color: ${(props) => props.theme.lines};
  color: ${(props) => props.theme.withe};
  cursor: pointer;

  ${(props) =>
        props.isToday &&
        css`
      border-color: #B73625;
    `}

    /*regras de midia*/

    @media (width: 1024px) {
        width: 9.8vw;
    };
    @media (max-width: 768px) {
        width: 14vw;
    };
    
    @media (max-width: 450px) {
            width: 13.8vw;
    };
    @media (max-width: 375px) {
        width:13.75vw;
    };
    @media (max-width: 320px) {
        width:13.6vw;
    };
`;

export const Dupla = styled.p`
    display: flex;
    flex-direction: column;
    padding-left: 8%;
    font-size: 16px;
    font-family: 'Roboto';
`;
export const Day = styled.span`
    font-family: 'Montserrat';
    display: flex;
    justify-content: flex-end;
    margin: 4%;
`;