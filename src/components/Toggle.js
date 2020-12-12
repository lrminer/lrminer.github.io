import React from 'react'
import {func, string} from 'prop-types';
import ToggleContainer from "./Toggle.styled";

const Toggle = ({theme, toggleTheme}) => {
    return (
        <ToggleContainer className={"ml-3"} onClick={toggleTheme}>
            {theme === 'dark' && <i style={{color: "white"}} className="fas fa-sun fa-2x ml-3"></i>}
            {theme === "light" && <i className="fas fa-moon fa-2x mr-3"></i>}
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
