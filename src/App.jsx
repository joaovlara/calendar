import DrawGrid from "./components/DrawGrid";
import Calendar from "./components/Calendar";
import { Content, Grades, LeftContainer } from "./components/styles";
import { CoffeDay } from "./components/CoffeeDay";

export function App() {
    return (
        <Content>
            <LeftContainer>
                <DrawGrid />
            </LeftContainer>
            <Grades>
                <Calendar />
                <CoffeDay/>
            </Grades>
        </Content>
    )
}
export default App