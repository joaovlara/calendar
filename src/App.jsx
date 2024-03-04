import React, { useState } from 'react';
import DrawGrid from "./components/DrawGrid";
import Calendar from "./components/Calendar";
import CoffeeDay from "./components/CoffeeDay";
import { Content, RightContainer, LeftContainer, lightTheme, darkTheme } from "./components/styles";
import { ThemeProvider } from "styled-components";


function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <Content>
                <LeftContainer>
                    <DrawGrid toggleTheme={toggleTheme} />
                </LeftContainer>
                <RightContainer>
                    <Calendar />
                    <CoffeeDay />
                </RightContainer>
            </Content>
        </ThemeProvider>
    )
}

export default App;
