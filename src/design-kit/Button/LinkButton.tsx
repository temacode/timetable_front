import React from 'react';
import { Link } from 'react-router-dom';
import Button, {IButtonProps} from './Button';
import styled from 'styled-components';

const StyledLink = styled(({...rest}) => <Link {...rest}/>)<IButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const LinkButton = ({ to, ...props }: IButtonProps) => (
    <Button { ...props }>
        <StyledLink to={ to }>{props.children}</StyledLink>
    </Button>
);

export default LinkButton;
