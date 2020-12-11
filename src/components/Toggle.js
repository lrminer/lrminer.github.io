import React from 'react'
import {func, string} from 'prop-types';
import ToggleContainer from "./Toggle.styled";

const Toggle = ({theme, toggleTheme}) => {
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
