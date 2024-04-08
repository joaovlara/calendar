import React, { useState } from 'react';
import DrawGrid from "./components/draw/DrawGrid";
import Calendar from './components/calendar/Calendar';
import CoffeeDay from "./components/coffee/CoffeeDay";
import { Content, RightContainer, LeftContainer, lightTheme, darkTheme } from "./components/styles";
import { ThemeProvider } from "styled-components";

function App() {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');    
    };

    const [pairs, setPairs] = useState([]);

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <Content>
                <LeftContainer>
                <DrawGrid toggleTheme={toggleTheme} setPairs={setPairs} />
                </LeftContainer>
                <RightContainer>
                    <Calendar pairs={pairs} />
                    <CoffeeDay />
                </RightContainer>
            </Content>
        </ThemeProvider>
    );
};

export default App;
