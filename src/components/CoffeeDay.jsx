import { CoffeWeek, DayCoffee, TextCoffee, CoffeeDiv } from "./styles";

export function CoffeDay() {
    const DAYS_OF_THE_WEEK = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
    return (
    <CoffeeDiv>
    <TextCoffee>Dia do Café</TextCoffee>
    <CoffeWeek>
        {DAYS_OF_THE_WEEK.map(d => (
          <div key={d}>
            <DayCoffee>{d}</DayCoffee>
          </div>
        ))}
    </CoffeWeek>
    </CoffeeDiv>
    )
}

export default CoffeDay