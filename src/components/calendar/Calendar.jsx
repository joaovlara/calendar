import React, { useState, useEffect } from 'react';
import { CalendarTable, Header, MonthP, Body, DayCard, Day, DayWeek, TextWeek, WeekContainer, DaysContainer, Dupla } from '../styles';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export function Calendar({ pairs }) {
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
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  return (
    <CalendarTable>
      <Header>
        <SlArrowLeft onClick={() => setDate(new Date(year, month - 1, day))}></SlArrowLeft>
        <MonthP> {MONTHS[month]} </MonthP>
        <SlArrowRight onClick={() => setDate(new Date(year, month + 1, day))}></SlArrowRight>
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
              const currentDate = new Date(year, month, d);
              const isFriday = currentDate.getDay() === 5;

              return (
                <DayCard
                  key={index}
                  isToday={d === today.getDate()}
                  isSelected={d === day}
                >
                  {d > 0 && d <= days[month] ? (
                    <>
                      <Day>{d}</Day>
                      {isFriday && pairs && pairs.length > 0 && (
                        <Dupla>
                          {pairs.map((pair, pairIndex) => (
                            <div key={pairIndex}>
                              {pair.map((member, memberIndex) => (
                                <div key={memberIndex}>{member.name}</div>
                              ))}
                            </div>
                          ))}
                        </Dupla>
                      )}
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
