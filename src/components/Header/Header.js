import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../design-kit/LinkButton';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    height: 58px;
    background: #fff;
    border-bottom: 1px solid #eaeaea;
    overflow: hidden;
    padding: 5px 20px;
    h1 {
        color: #393939;
        font-size: 20px;
        margin-top: 12px;
        font-family: Rubik Mono One;
    }
    span {
        color: #999999;
        font-size: 12px;
        margin-left: 5px;
    }
`;

const Header = ({isOnline, isOnLogin, ...props}) => {
    return (
        <HeaderBlock>
            <Link to="/"><h1>КАРАНТИН<span> в МИРЭА</span></h1></Link>
            {(!isOnline && !isOnLogin) ? <LinkButton to="/login" top="3" size="s" appearance="outline">Вход</LinkButton> : ''}
        </HeaderBlock>
    );
}

export default Header;