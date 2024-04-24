import React from 'react';
import { CoffeeWeek, DayCoffee, TextCoffee, CoffeeContainer, CoffeeDiv, CardCoffee, EditableText, MemberName } from "..//../styles/styles.CoffeeDay"
import useCoffee from '../../hooks/useCoffee';

function CoffeeDay() {
  const DAYS_OF_THE_WEEK = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const coffeeData = useCoffee();

  return (
    <CoffeeContainer>
      <TextCoffee>Dia do Café</TextCoffee>
      <CoffeeWeek>
        {DAYS_OF_THE_WEEK.map((dayWeek, index) => {
          const isToday = new Date().getDay() === index + 1;
          const member = coffeeData[dayWeek] || []; // Verifica se há dados para este dia
          return (
            <CoffeeDiv key={dayWeek} isToday={isToday}>
              <CardCoffee>
                <DayCoffee>{dayWeek}</DayCoffee>
                <MemberName>
                  {member.map((employee, index) => (
                    <EditableText key={index}>{employee.nome}</EditableText>
                  ))}
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
