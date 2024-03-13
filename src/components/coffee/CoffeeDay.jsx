import React, { useState } from 'react';
import { CoffeeWeek, DayCoffee, TextCoffee, CoffeeContainer, CoffeeDiv, CardCoffee, EditableText, MemberName } from "../styles";

const DAYS_OF_THE_WEEK = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];

export function CoffeeDay() {
  const [texts, setTexts] = useState(DAYS_OF_THE_WEEK.map(() => ({ member1: 'Membro 1', member2: 'Membro 2' })));

  const handleTextChange = (index, member, newText) => {
    const newtexts = [...texts];
    newtexts[index][member] = newText;
    setTexts(newtexts);
  };

  return (
    <CoffeeContainer>
      <TextCoffee>Dia do Café</TextCoffee>
      <CoffeeWeek>
        {DAYS_OF_THE_WEEK.map((day, index) => {
          const isToday = new Date().getDay() === index + 1;
          return (
            <CoffeeDiv key={index} isToday={isToday}>
              <CardCoffee>
                <DayCoffee>{day}</DayCoffee>
                <MemberName>
                  <EditableText
                    contentEditable
                    onBlur={(event) => handleTextChange(index, 'member1', event.target.innerText)}
                  >
                    {texts[index].member1}
                  </EditableText>
                  <EditableText
                    contentEditable
                    onBlur={(event) => handleTextChange(index, 'member2', event.target.innerText)}
                  >
                    {texts[index].member2}
                  </EditableText>
                </MemberName>
              </CardCoffee>
            </CoffeeDiv>
          );
        })}
      </CoffeeWeek>
    </CoffeeContainer>
  );
}

export default CoffeeDay;
