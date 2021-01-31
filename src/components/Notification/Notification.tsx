import React from 'react';
import styled from 'styled-components';

const StyledNotification = styled.div`
    box-sizing: border-box;
    position: fixed;
    display: flex;
    align-items: center;
    max-width: 350px;
    width: 90%;
    padding: 25px 20px;
    border-radius: 6px;
    background: black;
    bottom: ${props => props.isShowing ? '20px' : '-100px'};
    left: 50%;
    transform: translateX(-50%);
    transition: 0.3s;
    color: white;
    font-weight: 900;
    font-size: 14px;
    box-shadow: 0 1px 6px 1px rgba(0,0,0,0.29);
`;

const Icon = styled.div`
    position: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 30px;
`;

class Notification extends React.Component {
    render() {
        return (
            <StyledNotification isShowing={ this.props.isShowing }>
                <Icon>{ this.props.icon }</Icon>
                {this.props.message}
            </StyledNotification>
        );
    }
}

export default Notification;