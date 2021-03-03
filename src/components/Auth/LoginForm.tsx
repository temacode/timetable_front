import React from 'react';
import styled from 'styled-components';
import FieldButton from '../../design-kit/Button/FieldButton';
import LinkButton from '../../design-kit/Button/LinkButton';
import {Field, Form} from "react-final-form";
import {ILoginForm} from "../../forms/loginForm";

const FormHeader = styled.p`
    text-align: center;
    font-size: 25px;
    font-family: Rubik Mono One;
`;

const FieldBlock = styled.div`
    width: 100%;
    box-shadow: 0 1px 6px 1px rgba(0,0,0,0.09);
    border-radius: 12px;
    overflow: hidden;
    margin-top: 20px;
`;

const StyledField = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const StyledFieldMessage = styled.p`
    display: block;
    width: 100%;
    padding: 5px 20px;
    color: #eb6565;
    font-size: 12px;
`;

const StyledFieldInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    padding: 5px 20px;
`;

interface CustomFieldProps {
    input: any,
    placeholder: string,
    type: string,
    meta: {
        touched: boolean,
        error: string,
        warning: string
    }
}

const renderField = ({input, placeholder, type, meta: {touched, error, warning}}: CustomFieldProps) => (
    <StyledField>
        <StyledFieldInput {...input} placeholder={placeholder} type={type} />
        <StyledFieldMessage>
            {touched && error ? error : ''}
            {touched && warning ? warning : ''}
        </StyledFieldMessage>
    </StyledField>
);

type Props = {
    onSubmit: any;
    isLoading: boolean;
}

const LoginForm = (props: Props) => {

    return (
        <Form onSubmit={(values: ILoginForm) => {}}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <FormHeader>Вход</FormHeader>
                    <FieldBlock>
                        <Field
                            name="email"
                            component={renderField}
                            type="email"
                            placeholder="Электропочта">
                        </Field>
                        <Field
                            autoFocus
                            name="password"
                            component={renderField}
                            type="password"
                            placeholder="Пароль">
                        </Field>
                    </FieldBlock>
                    <FieldButton centered
                                 isLoading={props.isLoading}
                                 name="submit"
                                 component="button"
                                 type="submit">

                        Отправить
                    </FieldButton>
                    <LinkButton centered
                                isLoading={false}
                                to="/login/reg"
                                appearance="flat">

                        Зарегистрироваться
                    </LinkButton>
                </form>
            )}
        </Form>
    );
}

export default LoginForm;
