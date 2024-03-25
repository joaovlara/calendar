import React, { useState, useEffect } from 'react';
import { CalendarTable, Header, MonthP, Body, DayCard, Day, DayWeek, TextWeek, WeekContainer, DaysContainer, Dupla } from '../styles';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { isToday, addMonths, startOfMonth, endOfMonth, isFriday, isLeapYear } from 'date-fns'; 

export function Calendar({ pairs }) {
  const GRID_DAYS = Array(42);
  const DAYS_OF_THE_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(startOfMonth(date).getDay());
  const [fridays, setFridays] = useState([]);
  const [remainingPairs, setRemainingPairs] = useState([]);

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(startOfMonth(date).getDay());
    setFridays(findFridaysInMonth(date));
    updateRemainingPairs(date);
  }, [date]);

  useEffect(() => {
    updateRemainingPairs(startOfMonth(new Date(year, month, 1)));
  }, [month, year]);

  function changeMonth(amount) {
    setDate(prevDate => addMonths(prevDate, amount));
  }

  function updateRemainingPairs(date) {
    const remaining = [];
    const daysInMonth = isLeapYear(date.getFullYear()) ? endOfMonth(date).getDate() : endOfMonth(date).getDate();
    const monthFridays = findFridaysInMonth(date);

    if (pairs && pairs.length > monthFridays.length) {
      const usedIndices = new Set(monthFridays);
      for (let i = 1; i <= daysInMonth; i++) {
        if (!usedIndices.has(i)) {
          remaining.push(i);
        }
      }
    }
    setRemainingPairs(remaining);
  }

  function findFridaysInMonth(date) {
    const fridays = [];
    const daysInMonth = isLeapYear(date.getFullYear()) ? endOfMonth(date).getDate() : endOfMonth(date).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
      if (isFriday(currentDate)) {
        fridays.push(i);
      }
    }
    return fridays;
  }

  return (
    <CalendarTable>
      <Header>
        <SlArrowLeft onClick={() => changeMonth(-1)}></SlArrowLeft>
        <MonthP> {MONTHS[month]} </MonthP>
        <SlArrowRight onClick={() => changeMonth(1)}></SlArrowRight>
      </Header>

      <Body>
        <WeekContainer>
          {DAYS_OF_THE_WEEK.map(d => (
            <DayWeek key={d}>
              <TextWeek>{d}</TextWeek>
            </DayWeek>
          ))}
        </WeekContainer>
        <DaysContainer>
          {GRID_DAYS
            .fill(null)
            .map((_, index) => {
              const d = index - (startDay - 1);

              return (
                <DayCard
                  key={index}
                  isToday={isToday(new Date(year, month, d))}
                >
                  {d > 0 && d <= (isLeapYear(year) ? endOfMonth(new Date(year, month, 1)).getDate() : endOfMonth(new Date(year, month, 1)).getDate()) ? (
                    <>
                      {fridays.includes(d) && pairs && pairs.length > 0 && (
                        <Dupla>
                          {pairs[fridays.indexOf(d)] && (
                            <>
                              {pairs[fridays.indexOf(d)][0]?.name}
                              {pairs[fridays.indexOf(d)][1]?.name &&
                                <span> {pairs[fridays.indexOf(d)][1].name}</span>}
                            </>
                          )}
                        </Dupla>
                      )}
                      {!fridays.includes(d) && remainingPairs && remainingPairs.length > 0 && (
                        <Dupla>
                          {remainingPairs[remainingPairs.indexOf(d)] && (
                            <>
                              {remainingPairs[remainingPairs.indexOf(d)]?.name}
                            </>
                          )}
                        </Dupla>
                      )}
                      <Day>{d}</Day>
                    </>
                  ) : null}
                </DayCard>
              );
            })}
        </DaysContainer>
      </Body>
    </CalendarTable>
  );
};

export default Calendar;
