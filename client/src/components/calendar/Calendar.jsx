import React, { useState } from "react";
import axios from "axios";
import { CalendarTable, Header, MonthP, Body, DayCard, Day, DaysContainer, Dupla } from "..//../styles/styles.calendar";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { isToday, addMonths, startOfMonth, endOfMonth, isFriday, format } from "date-fns";
import WeekContainer from "./Week";

export default function Calendar() {
  const GRID_DAYS = Array.from({ length: 42 });
  const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const today = new Date();
  const [date, setDate] = useState(today);
  const [fridaysData, setFridaysData] = useState([]);

  fetchDataFromAPI();

  function fetchDataFromAPI() {
    axios.get('http://192.168.18.32:8800/getLimpeza')
      .then(response => {
        setFridaysData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados do banco:', error);
      });
  }

  function changeMonth(amount) {
    setDate(prevDate => addMonths(prevDate, amount));
  }

  return (
    <CalendarTable>
      <Header>
        <SlArrowLeft onClick={() => changeMonth(-1)}></SlArrowLeft>
        <MonthP> {MONTHS[date.getMonth()]} </MonthP>
        <SlArrowRight onClick={() => changeMonth(1)}></SlArrowRight>
      </Header>
      <Body>
        <WeekContainer />
        <DaysContainer>
          {GRID_DAYS.map((_, index) => {
            const d = new Date(date.getFullYear(), date.getMonth(), index + 1 - startOfMonth(date).getDay());
            const isValidDay = d.getMonth() === date.getMonth();
            const isFridayInYear = isValidDay && isFriday(d);
            const fridayData = fridaysData.find(item => format(new Date(item.data), 'yyyy MM dd') === format(d, 'yyyy MM dd'));

            return (
              <DayCard
                key={index}
                isToday={isToday(d)}
                isFriday={isFridayInYear}>

                {isFridayInYear && fridayData && (
                  <Dupla>
                    {`${fridayData.funcionario1} e ${fridayData.funcionario2}`}
                  </Dupla>
                )}
                {isValidDay && <Day>{d.getDate()}</Day>}
              </DayCard>
            );
          })}
        </DaysContainer>
      </Body>
    </CalendarTable>
  );
}

export function findFridaysInYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const fridays = [];
  for (let month = currentMonth; month < 12; month++) {
    const startDay = (month === currentMonth) ? currentDate.getDate() : 1; // Começa a partir do dia atual no mês atual
    const daysInMonth = endOfMonth(new Date(currentYear, month)).getDate();
    for (let day = startDay; day <= daysInMonth; day++) {
      const currentDate = new Date(currentYear, month, day);
      if (isFriday(currentDate)) {
        fridays.push(format(currentDate, 'yyyy MM dd'));
      }
    }
  }
  return fridays;
}
