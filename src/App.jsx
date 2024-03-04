import React, { useState } from 'react';
import DrawGrid from "./components/DrawGrid";
import Calendar from "./components/Calendar";
import CoffeeDay from "./components/CoffeeDay";
import { Content, RightContainer, LeftContainer } from "./components/styles";
import { ThemeProvider } from "styled-components";

const darkTheme = {
    body: "#171717",
    text: "#f1f1f1",
    card: "#1b1b1b",
};
const lightTheme = {
    body: "red",

};

function App() {
    const [theme, setTheme] = useState('');
    // const isDarkTheme = theme === "dark";

    function checkTheme() {
        if(theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    const toggleTheme = () => {
        checkTheme();
        
    };

    return (
        <ThemeProvider theme={darkTheme === 'dark' ? darkTheme : lightTheme}>
            <Content>
                <LeftContainer>
                    <DrawGrid />
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