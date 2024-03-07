import React, { useState, useEffect } from 'react';
import { CoffeeWeek, DayCoffee, TextCoffee, CoffeeContainer, CoffeeDiv, EditableText, CardCoffee } from "./styles";

export function CoffeeDay() {
  const today = new Date();
  const DAYS_OF_THE_WEEK = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
  const [date] = useState(today);
  const [dayOfWeek, setDayOfWeek] = useState(date.getDay());

  useEffect(() => {
    setDayOfWeek(date.getDay());
  }, [date]);

  const CardEdit = () => {
    const [text, setText] = useState('Membro');


    const handleTextChange = (event) => {
      setText(event.target.innerText);

    };

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
                <CardCoffee>
                  <DayCoffee>
                    {day}
                  </DayCoffee>
                  <EditableText
                    contentEditable
                    onClick={handleTextChange}
                  >
                    {text}
                  </EditableText>
                </CardCoffee>
              </CoffeeDiv>
            );
          })}
        </CoffeeWeek>
      </CoffeeContainer >
    );
  };

  return <CardEdit />;
}

export default CoffeeDay;
