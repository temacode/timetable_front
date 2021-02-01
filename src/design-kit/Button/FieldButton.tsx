import React, {ComponentType, ReactChild} from 'react';
import Button from './Button';
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

interface CustomFieldProps {
    type: string;
    name: string;
    placeholder?: string;
}

interface FieldButtonProps extends CustomFieldProps {
    component?: 'input'| 'select' | 'textarea' | 'button';
    top?: string;
    children: ReactChild;
    centered?: boolean,
    isLoading?: boolean
}

const renderField = ({placeholder, type, name}: CustomFieldProps) => {
    return <input placeholder={placeholder} type={type} name={name}/>
}


const FieldButton = ({ name, component, type, placeholder, top, ...props }: FieldButtonProps) => (
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
