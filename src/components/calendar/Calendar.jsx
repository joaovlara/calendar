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

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(startOfMonth(date).getDay());
    setFridays(findFridaysInMonth(date));
  }, [date]);

  useEffect(() => {
    setFridays(findFridaysInMonth(new Date(year, month, 1)));
  }, [month, year]);

  function changeMonth(amount) {
    setDate(prevDate => addMonths(prevDate, amount));
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

  function distributePairsOverYear() {
    const distributedPairs = {};

    for (const friday of fridays) {
      const monthKey = MONTHS[date.getMonth()]; // Chave do mês
      if (!distributedPairs[monthKey]) {
        distributedPairs[monthKey] = {}; // Inicializar o objeto do mês, se ainda não existir
      }

      if (pairs.length > 0) {
        // Verificar se há duplas disponíveis
        const pairIndex = (friday - 1) % pairs.length; // Calcular o índice da dupla com base no dia
        distributedPairs[monthKey][friday] = pairs[pairIndex]; // Atribuir a dupla correspondente ao dia
      }
    }

    console.log("Distributed Pairs:");
    for (const month in distributedPairs) {
      console.log(`${month}:`);
      for (const friday in distributedPairs[month]) {
        console.log(`   - ${friday}, ${distributedPairs[month][friday][0].name}, ${distributedPairs[month][friday][1].name}`);
      }
    }

    return distributedPairs;
  }

  const distributedPairs = distributePairsOverYear();

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
                  {d > 0 && d <= (isLeapYear(year) ? endOfMonth(new Date(year, month, 1)).getDate() : endOfMonth(new Date(year, month, 1)).getDate()) && (
                    <>
                      {fridays.includes(d) && pairs && pairs.length > 0 && (
                        <Dupla>
                          {distributedPairs[MONTHS[month]] && distributedPairs[MONTHS[month]][d] && (
                            <>
                              {distributedPairs[MONTHS[month]][d][0]?.name}
                              {distributedPairs[MONTHS[month]][d][1]?.name &&
                                <span> {distributedPairs[MONTHS[month]][d][1].name}</span>}
                            </>
                          )}
                        </Dupla>
                      )}
                      <Day>{d}</Day>
                    </>
                  )}
                </DayCard>
              );
            })}
        </DaysContainer>
      </Body>
    </CalendarTable>
  );
};

export default Calendar;
