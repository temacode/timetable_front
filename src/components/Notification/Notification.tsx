import React from 'react';
import styled from 'styled-components';

const StyledNotification = styled.div<{isShowing?: boolean}>`
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 30px;
`;

interface INotificationProps {
    isShowing: boolean,
    icon?: string,
    message: string,
}

const Notification = (props: INotificationProps) => (
    <StyledNotification isShowing={props.isShowing}>
        <Icon>{props.icon}</Icon>
        {props.message}
    </StyledNotification>
)

export default Notification;
