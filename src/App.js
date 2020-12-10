import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Navbar from './components/Navbar'
import Main from "./components/Main";
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './theme';
import {GlobalStyles} from './global';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        // if the theme is not light, then set it to dark
        if (theme === 'light') {
            setTheme('dark');
            // otherwise, it should be light
        } else {
            setTheme('light');
        }
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
