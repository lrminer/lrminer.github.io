import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Navbar from './components/Navbar'
import Main from "./components/Main";
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './theme';
import {GlobalStyles} from './global';
import { useDarkMode } from './useDarkMode';


function App() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    };

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <div  className={'pt-5'}>
                <div id="topOfPage"></div>
                <Navbar theme={theme} toggleTheme={toggleTheme}/>
                <Main/>

            </div>
        </ThemeProvider>
    )
}

export default App;
