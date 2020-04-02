import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import Button from './Button/Button';

const StyledField = styled(Field)`
    display: block;
    margin: auto;
    margin-top: ${props => props.top ? props.top + 'px' : props.theme.marginTop};
    background: none;
    border: none;
    outline: none;
`;

const FieldButton = ({ name, component, type, placeholder, top, ...props }) => (
    <StyledField name={name}
           component={component}
           type={type}
           placeholder={placeholder}
           top={top || "30"}>
        
        <Button {...props}>
        </Button>
    </StyledField>
);

export default FieldButton;