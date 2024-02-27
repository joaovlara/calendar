import * as React from 'react';
import { useState, useEffect } from 'react';
import { CalendarTable, Header, Button, Body, Day, DayWeek } from './styles';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";



export function Calendar() {

  const GRID_DAYS = Array(42);
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date = Date) {
    return new Date(date.getFullYear(), date.getMonth(), 2).getDay();
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  return (
    <CalendarTable>
      <Header>
        <SlArrowLeft onClick={() => setDate(new Date(year, month - 1, day))}></SlArrowLeft>
        <div>
          {MONTHS[month]}
        </div>
        <SlArrowRight onClick={() => setDate(new Date(year, month + 1, day))}></SlArrowRight>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map(d => (
          <DayWeek key={d}>
            <strong>{d}</strong>
          </DayWeek>
        ))}
        {GRID_DAYS

        .fill(null)
        .map((_, index) => {
          const d = index - (startDay - 2);
          return (
            <Day
              key={index}
              isToday={d === today.getDate()}
              isSelected={d === day}
            >
              {d > 0 && d <= days[month] ? d : ''}

            </Day>
          );
        })}
      </Body>
    </CalendarTable>
  );

}

export default Calendar