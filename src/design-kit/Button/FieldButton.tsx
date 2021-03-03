import React from 'react';
import Button, {IButtonProps} from './Button';
import styled from "styled-components";
import {Field} from "react-final-form";

const StyledField = styled(Field)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    background: none;
    border: none;
    outline: none;
`;

interface IFieldButtonProps extends IButtonProps {
    component?: 'input'| 'select' | 'textarea' | 'button';
    name: string,
    type: string,
    placeholder?: string
}

const renderField = ({placeholder, type, name}: IFieldButtonProps) => {
    return <input placeholder={placeholder} type={type} name={name}/>
}


const FieldButton = ({ name, component, type, placeholder, top, ...props }: IFieldButtonProps) => (
    <Button { ...props } top={ top || '30' }>
        <StyledField name={ name }
            component={ renderField }
            type={ type }
            placeholder={ placeholder }>

            {props.children}
        </StyledField>
    </Button>
);

export default FieldButton;
