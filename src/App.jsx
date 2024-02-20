import DrawGrid from "./components/DrawGrid"
import Calendar from "./components/Calendar"
import BottomBar from "./components/BottomBar"
import { Content, Limpeza, Grades } from "./components/styles"
export function App() {
    return (
        <>
            <Content>
                <Limpeza>
                    <DrawGrid />
                </Limpeza>
            <Grades>                    
                <Calendar />
                <BottomBar />
            </Grades>
             </Content>

        </>
    )
}
export default App