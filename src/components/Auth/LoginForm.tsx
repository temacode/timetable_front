import React from 'react';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import FieldButton from '../../design-kit/Button/FieldButton';
import { StyledForm } from '../../design-kit/Form/Form';
import LinkButton from '../../design-kit/Button/LinkButton';

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

const validate = values => {
    const errors = {};

    if (!values.login) {
        errors.login = 'Обязательное поле';
    } else if (values.login.length < 5) {
        errors.login = 'Не меньше 5 символов';
    } else if (/^[a-zA-Z0-9]{5,}$/gi.test(values.login)) {
        errors.login = 'Все хорошо';
    }

    return errors;
};

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => (
    <StyledField>
        <StyledFieldInput { ...input } placeholder={ placeholder } type={ type }></StyledFieldInput>
        <StyledFieldMessage>
            {touched && error ? error : ''}
            {touched && warning ? warning : ''}
        </StyledFieldMessage>
    </StyledField>
);

type Props = {
    handleSubmit: any;
    isLoading: boolean;
}

const LoginForm = reduxForm({
    form: 'login',
    validate,
})((props: Props) => {
    const { handleSubmit } = props;

    return (
        <StyledForm onSubmit={ handleSubmit }>
            <FormHeader>Вход</FormHeader>
            <FieldBlock>
                <Field
                    name="email"
                    component={ renderField }
                    type="email"
                    placeholder="Электропочта">
                </Field>
                <Field
                    autoFocus
                    name="password"
                    component={ renderField }
                    type="password"
                    placeholder="Пароль">
                </Field>
            </FieldBlock>
            <FieldButton centered
                isLoading={ props.isLoading }
                name="sibmit"
                component="button"
                type="submit">

                Отправить
            </FieldButton>
            <LinkButton centered
                isLoading={ false }
                to="/login/reg"
                appearance="flat">

                Зарегистрироваться
            </LinkButton>
        </StyledForm>
    );
});

export default LoginForm;