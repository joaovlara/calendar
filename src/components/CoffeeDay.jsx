import { useState, useEffect } from 'react';
import { CoffeWeek, DayCoffee, TextCoffee, CoffeeDiv } from "./styles";

export function CoffeeDay() {
  const today = new Date();
  const DAYS_OF_THE_WEEK = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [dayOfWeek, setDayOfWeek] = useState(DAYS_OF_THE_WEEK[date.getDay()]);

  useEffect(() => {
    const currentDayOfWeek = DAYS_OF_THE_WEEK[date.getDay()];
    setDayOfWeek(currentDayOfWeek);
  }, [date]);

  return (
    <CoffeeDiv>
      <TextCoffee>Dia do Café</TextCoffee>
      <CoffeWeek>
        {DAYS_OF_THE_WEEK.map(d => (
          <div 
            key={d} 
            isToday={d === dayOfWeek}>
            <DayCoffee>{d}</DayCoffee>
          </div>
        ))}
      </CoffeWeek>
    </CoffeeDiv>
  );
}

export default CoffeeDay;
