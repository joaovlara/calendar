import React, { useState, useEffect } from 'react';
import { CoffeeWeek, DayCoffee, TextCoffee, CoffeeContainer, CoffeeDiv } from "./styles";

export function CoffeeDay() {
  const today = new Date();
  const DAYS_OF_THE_WEEK = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
  const [date] = useState(today);
  const [dayOfWeek, setDayOfWeek] = useState(date.getDay());

  useEffect(() => {
    setDayOfWeek(date.getDay());
  }, [date]);

  return (
    <CoffeeContainer>
      <TextCoffee>Dia do Café</TextCoffee>   
      <CoffeeWeek>
        {DAYS_OF_THE_WEEK.map((day, index) => {
          const d = index + 1;
          return (
            <CoffeeDiv
              key={d}
              isToday={d === dayOfWeek}
            >
              <DayCoffee>{day}</DayCoffee>
            </CoffeeDiv>
          );
        })}
      </CoffeeWeek>
    </CoffeeContainer>
  );
}

export default CoffeeDay;
