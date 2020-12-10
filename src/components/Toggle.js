import React from 'react'
import {func, string} from 'prop-types';
import styled from 'styled-components';
// // Import a couple of SVG files we'll use in the design: https://www.flaticon.com
// import { ReactComponent as MoonIcon } from 'icons/moon.svg';
// import { ReactComponent as SunIcon } from 'icons/sun.svg';
import ToggleContainer from "./Toggle.styled";

const Toggle = ({theme, toggleTheme}) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer className={"ml-3 pl-3"} onClick={toggleTheme}>
            {theme === 'dark' && <i style={{color: "white"}} className="fas fa-sun fa-2x"></i>}
            {theme === "light" && <i className="fas fa-moon fa-2x"></i>}
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
