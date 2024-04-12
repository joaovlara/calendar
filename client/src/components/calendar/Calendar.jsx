import React, { useState, useEffect } from "react";
import { CalendarTable, Header, MonthP, Body, DayCard, Day, DayWeek, TextWeek, WeekContainer, DaysContainer, Dupla } from "..//../styles/styles.calendar";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { isToday, addMonths, startOfMonth, endOfMonth, isFriday, isLeapYear } from "date-fns";

export function Calendar({ pairs }) {
  const GRID_DAYS = Array(42);
  const DAYS_OF_THE_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const today = new Date();
  const currentMonth = today.getMonth();
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
    setFridays(findFridaysInYear(date.getFullYear()));
  }, [date]);

  function changeMonth(amount) {
    setDate(prevDate => addMonths(prevDate, amount));
  }

  function findFridaysInYear(year) {
    const fridays = [];
    for (let month = 0; month < 12; month++) {
      const daysInMonth = isLeapYear(year) ? endOfMonth(new Date(year, month, 1)).getDate() : endOfMonth(new Date(year, month, 1)).getDate();
      for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(year, month, day);
        if (isFriday(currentDate)) {
          fridays.push(currentDate);
        }
      }
    }
    return fridays;
  }

  function distributePairsOverYear() {
    const distributedPairs = {};
    const nextFridayIndex = fridays.findIndex(friday => friday > today); // Encontrar o índice da próxima sexta-feira após hoje

    if (nextFridayIndex !== -1) {
      const nextFriday = fridays[nextFridayIndex];
      const nextFridayMonthKey = MONTHS[nextFriday.getMonth()]; // Chave do mês da próxima sexta-feira

      let totalPairsToDistribute = pairs.length; // Número total de duplas a serem distribuídas

      for (let i = nextFridayIndex; i < fridays.length; i++) {
        const friday = fridays[i];
        const monthKey = MONTHS[friday.getMonth()]; // Chave do mês

        if (!distributedPairs[monthKey]) {
          distributedPairs[monthKey] = {}; // Inicializar o objeto do mês, se ainda não existir
        }

        if (totalPairsToDistribute === 0) {
          // Todas as duplas já foram distribuídas, sair do loop
          break;
        }

        if (pairs.length > 0) {
          const pairIndex = i % pairs.length; // Calcular o índice da dupla com base no índice da sexta-feira
          const dayOfMonth = friday.getDate();
          if (!distributedPairs[monthKey][dayOfMonth]) {
            // Verificar se a dupla ainda não foi atribuída
            distributedPairs[monthKey][dayOfMonth] = pairs[pairIndex]; // Atribuir a dupla correspondente ao dia
            totalPairsToDistribute--; // Reduzir o número total de duplas restantes para distribuir
          }
        }
      }

      console.log("Distributed Pairs:");
      for (const month in distributedPairs) {
        console.log(`${month}:`);
        for (const dayOfMonth in distributedPairs[month]) {
          console.log(`   - ${dayOfMonth}, ${distributedPairs[month][dayOfMonth][0].nome}, ${distributedPairs[month][dayOfMonth][1].nome}`);
        }
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
                      {fridays.find(friday => friday.getDate() === d) && pairs && pairs.length > 0 && (
                        <Dupla>
                          {distributedPairs[MONTHS[month]] && distributedPairs[MONTHS[month]][d] && (
                            <>
                              {distributedPairs[MONTHS[month]][d][0]?.nome}
                              {distributedPairs[MONTHS[month]][d][1]?.nome &&
                                <span> {distributedPairs[MONTHS[month]][d][1].nome}</span>}
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