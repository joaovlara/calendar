import DrawGrid from "./components/DrawGrid";
import Calendar from "./components/Calendar";
import BottomBar from "./components/BottomBar";
import { Content, Grades, Week, WeekDays, WeekTable, LeftContainer } from "./components/styles";
import { GlobalStyle } from "./components/GlobalStyle";

export function App() {
    return (
        <Content>
            <LeftContainer>
                <DrawGrid />
            </LeftContainer>
            <Grades>
                <Calendar />
                <BottomBar />
            </Grades>
        </Content>
    )
}
export default App