import React, { ReactChild } from 'react';
import * as styled from 'styled-components';
import { Field } from 'redux-form';
import Button from './Button';

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

type FieldButtonProps = {
    name: string;
    component: string;
    type: string;
    placeholder: string;
    top: string;
    children: ReactChild
}

const FieldButton = ({ name, component, type, placeholder, top, ...props }: FieldButtonProps) => (
    <Button { ...props } top={ top || '30' }>
        <StyledField name={ name }
            component={ component }
            type={ type }
            placeholder={ placeholder }>

            {props.children}
        </StyledField>
    </Button>
);

export default FieldButton;