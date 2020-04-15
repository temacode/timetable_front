import React from 'react';
import styled from 'styled-components';
import { PongSpinner } from 'react-spinners-kit';

const PrimaryButton = styled.div`
    position: relative;
    width: ${props => props.size === 's' ? '100px' : '250px'};
    height: ${props => props.size === 's' ? '40px' : '50px'};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${props => props.centered ? 'auto' : '20px'};
    margin-top: ${props => props.top ? (props.top + 'px') : '10px'};
    cursor: pointer;
    transition: 0.3s;
    background: black;
    &, * {
        color: white;
    }
    :hover {
        background: '#393939';
    }
`;

const FlatButton = styled(PrimaryButton)`
    background: white;
    color: #393939;
    background: none;
    &, * {
        color: #393939;
    }
    :hover {
        background: #eaeaea;
    }
`;

const OutlineButton = styled(FlatButton)`
    border: 1px solid #393939;
`;

const StyledLoader = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    background: ${props => props.loading ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0)'};
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = (props) => {
    const loader = props.isLoading ?
        <StyledLoader loading={ true }>
            <PongSpinner size={ 40 }
                color="#393939"
                loading={ true }>
            </PongSpinner>
        </StyledLoader>
        : undefined;
    const buttonSwitcher = ({ appearance, ...props }) => {
        switch (appearance) {
            case 'flat':
                return <FlatButton { ...props }>{loader}{props.children}</FlatButton>;
            case 'outline':
                return <OutlineButton { ...props }>{loader}{props.children}</OutlineButton>;
            default:
                return <PrimaryButton { ...props }>{loader}{props.children}</PrimaryButton>;
        }
    };

    return (
        <>
            {buttonSwitcher({ ...props })}
        </>
    );
};

export default Button;