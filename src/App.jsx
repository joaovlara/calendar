import DrawGrid from "./components/DrawGrid";
import Calendar from "./components/Calendar";
import { Content, RightContainer, LeftContainer } from "./components/styles";
import { CoffeDay } from "./components/CoffeeDay";

export function App() {
    return (
        <Content>
            <LeftContainer>
                <DrawGrid />
            </LeftContainer>
            <RightContainer>
                <Calendar />
                <CoffeDay />
            </RightContainer>
        </Content>
    )
}
export default App