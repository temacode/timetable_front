import React from 'react';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import FieldButton from '../design-kit/Button/FieldButton';
import Button from '../design-kit/Button/Button';

const StyledForm = styled.form`
    width: 90%;
    margin: auto;
    margin-top: 20px;
`;

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

    if (!values.password || !values.rep_password) {
        errors.rep_password = 'Заполните пароль'
    } else if (values.password !== values.rep_password) {
        errors.rep_password = 'Пароли не совпадают'
    }

    return errors;
}

const required = value => value ? undefined : 'Обязательное поле';
const length = value => value.length >= 5 ? undefined : 'Не менее 5 символов';
const length3 = value => value.length >=3 ? undefined : 'Не менее 3 символов';
const lengthMax = value => value.length <= 25 ? undefined : 'Не более 25 символов';
const chars = value => /^[a-zA-Z0-9]{5,25}$/giu.test(value) ? undefined : 'Только латинские буквы и  цифры';
const charsRus = value => /^[a-zA-Zа-яА-Я]{5,25}$/giu.test(value) ? undefined : 'Только русские и латинские буквы';

const nameValidation = [required, length3, lengthMax, charsRus];
const loginValidation = [required, length, lengthMax, chars];
const passwordValidation = [required, length, lengthMax, chars];

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => (
    <StyledField>
        <StyledFieldInput {...input} placeholder={placeholder} type={type} spellCheck={false}></StyledFieldInput>
        <StyledFieldMessage>
            {touched && error ? error : ''}
            {touched && warning ? warning : ''}
        </StyledFieldMessage>
    </StyledField>
);

const RegForm = reduxForm({
    form: 'reg',
    validate
})(props => {
    const { handleSubmit } = props;

    const handleClick = () => {
        props.setValues({
            formName: 'reg',
            fields: [
                {name: 'login', value: 'artem'},
                {name: 'name', value: 'Артем'},
                {name: 'surname', value: 'Михайлов'},
                {name: 'password', value: '12345'},
                {name: 'rep_password', value: '12345'},
            ]
        });
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <FormHeader>Регистрация</FormHeader>
            <FieldBlock>
                <Field name="login" component={renderField} type="text" placeholder="Логин" validate={loginValidation}></Field>
                <Field name="name" component={renderField} type="text" placeholder="Имя" validate={nameValidation}></Field>
                <Field name="surname" component={renderField} type="text" placeholder="Фамилия" validate={nameValidation}></Field>
                <Field name="password" component={renderField} type="password" placeholder="Пароль" validate={passwordValidation}></Field>
                <Field name="rep_password" component={renderField} type="password" placeholder="Подтвердите пароль" validate={passwordValidation}></Field>
            </FieldBlock>
            <Button centered onClick={handleClick}>Заполнить</Button>
            <FieldButton centered isLoading={props.isLoading} name="sibmit" component="button" type="submit">Отправить</FieldButton>
        </StyledForm>
    );
});

export default RegForm;