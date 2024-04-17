import React, { useState, useEffect } from "react";
import { CalendarTable, Header, MonthP, Body, DayCard, Day, DaysContainer } from "..//../styles/styles.calendar";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { isToday, addMonths, startOfMonth, endOfMonth, isFriday, format, isLeapYear } from "date-fns";
import WeekContainer from "./Week";

export default function Calendar() {
  const GRID_DAYS = Array.from({ length: 42 });
  const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const today = new Date();
  const [date, setDate] = useState(today);
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(startOfMonth(date).getDay());

  useEffect(() => {
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(startOfMonth(date).getDay());
  }, [date]);

  function changeMonth(amount) {
    setDate(prevDate => addMonths(prevDate, amount));
  }
  return (
    <CalendarTable>
      <Header>
        <SlArrowLeft onClick={() => changeMonth(-1)}></SlArrowLeft>
        <MonthP> {MONTHS[month]} </MonthP>
        <SlArrowRight onClick={() => changeMonth(1)}></SlArrowRight>
      </Header>
      <Body>
        <WeekContainer />
        <DaysContainer>
          {GRID_DAYS.map((_, index) => {
            const d = index - (startDay - 1);
            const isValidDay = d > 0 && d <= endOfMonth(date).getDate() && isLeapYear(new Date(year, month));
            return (
              <DayCard key={index} isToday={isToday(new Date(year, month, d))}>
                {isValidDay && <Day>{d}</Day>}
              </DayCard>
            );
          })}
        </DaysContainer>
      </Body>
    </CalendarTable>
  );
};

export function findFridaysInYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const fridays = [];
  for (let month = currentMonth; month < 12; month++) {
    const daysInMonth = endOfMonth(new Date(currentYear, month)).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(currentYear, month, day);
      if (isFriday(currentDate)) {
        fridays.push(format(currentDate, 'yyyy MM dd')); 
      }
    }
  }
  return fridays; 
}