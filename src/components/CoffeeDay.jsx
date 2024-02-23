import { CoffeWeek, DayCoffee, TextCoffee } from "./styles";

export function CoffeDay() {
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
    return (
    <>
    <TextCoffee>Dia do Café</TextCoffee>
    <CoffeWeek>
        {DAYS_OF_THE_WEEK.map(d => (
          <div key={d}>
            <DayCoffee>{d}</DayCoffee>
          </div>
        ))}
    </CoffeWeek>
    </>
    )
}

export default CoffeDay