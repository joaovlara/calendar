import DrawGrid from "./components/DrawGrid";
import Calendar from "./components/Calendar";
import CoffeeDay from "./components/CoffeeDay";
import { Content, RightContainer, LeftContainer } from "./components/styles";

export function App() {
    return (
        <Content>
            <LeftContainer>
                
                <DrawGrid />
            </LeftContainer>
            <RightContainer>
                <Calendar />
                <CoffeeDay />
            </RightContainer>
        </Content>
    )
}
export default App