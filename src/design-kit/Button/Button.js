import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PongSpinner } from 'react-spinners-kit';

const StyledButton = styled.div`
    position: relative;
    width: ${props  => props.size === 's' ? '100px' : props.theme.buttonWidth};
    height: ${props  => props.size === 's' ? '40px' : props.theme.buttonHeight};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${props => props.centered ? 'auto' : '20px'};
    margin-top: ${props => props.top ? (props.top + 'px') : props.theme.marginTop};
    cursor: pointer;
    transition: 0.3s;

    background: ${props => props.theme.background || ''};
    color: ${props => props.theme.color || 'white'};
    * {
        color: ${props => props.theme.color || 'white'};
    }
    box-shadow: ${props => props.theme.boxShadow || ''};
    border: ${props => props.theme.border || ''};

    :hover {
        background: ${props => props.theme.hoverBackground};
    }
`;

const StyledLoader = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    background: ${props => props.isLoading ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0)'};
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const buttonThemes = {
    regular: {
        background: 'black',
        boxShadow: '0 1px 6px 1px rgba(0,0,0,0.15)',
        color: 'white',
        hoverBackground: '#595959',
    },
    flat: {
        background: 'white',
        color: '#393939',
        hoverBackground: '#eaeaea',
    },
    outline: {
        background: 'white',
        color: '#393939',
        border: '1px solid #393939',
        hoverBackground: '#eaeaea',
    }
}
const Button = ({ isLoading = false, appearance = 'regular', top, size, centered, onClick, ...props}) => {
    const theme = buttonThemes[appearance];
    return (
        <ThemeProvider theme={theme}>
            <StyledButton top={top} size={size} appearance={appearance} props={props} centered={centered} onClick={onClick}>
                {isLoading ?
                <StyledLoader isLoading={isLoading}>
                        <PongSpinner size={40} color="#393939" loading={isLoading}></PongSpinner>
                </StyledLoader>
                : undefined}

                {props.children}
            </StyledButton>
        </ThemeProvider>
    );
}

export default Button;