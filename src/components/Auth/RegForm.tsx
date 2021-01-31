import React from 'react';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import FieldButton from '../../design-kit/Button/FieldButton';
/* import Button from '../../design-kit/Button/Button'; */
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

    if (!values.password || !values.rep_password) {
        errors.rep_password = 'Заполните пароль';
    } else if (values.password !== values.rep_password) {
        errors.rep_password = 'Пароли не совпадают';
    }

    return errors;
};

const required = value => value ? undefined : 'Обязательное поле';
const length = value => value.length >= 5 ? undefined : 'Не менее 5 символов';
//const length3 = value => value.length >=3 ? undefined : 'Не менее 3 символов';
const lengthMax = value => value.length <= 25 ? undefined : 'Не более 25 символов';
const chars = value => /^[a-zA-Z0-9]{5,25}$/giu.test(value) ? undefined : 'Только латинские буквы и  цифры';
//const charsRus = value => /^[a-zA-Zа-яА-Я]{5,25}$/giu.test(value) ? undefined : 'Только русские и латинские буквы';
// eslint-disable-next-line max-len
const email = value => /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(value) ? undefined : 'Неверный формат почты';

const passwordValidation = [ required, length, lengthMax, chars ];
const emailValidation = [ required, email ];

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => (
    <StyledField>
        <StyledFieldInput { ...input }
            placeholder={ placeholder }
            spellCheck={ false }
            type={ type }>
        </StyledFieldInput>
        <StyledFieldMessage>
            {touched && error ? error : ''}
            {touched && warning ? warning : ''}
        </StyledFieldMessage>
    </StyledField>
);

const RegForm = reduxForm({
    form: 'reg',
    validate,
})(props => {
    const { handleSubmit } = props;

    /* const handleClick = () => {
        props.setValues({
            formName: 'reg',
            fields: [
                { name: 'email', value: 'artemmikhailov@icloud.com' },
                { name: 'password', value: '12345' },
                { name: 'rep_password', value: '12345' },
            ],
        });
    }; */

    return (
        <StyledForm onSubmit={ handleSubmit }>
            <FormHeader>Регистрация</FormHeader>
            <FieldBlock>
                <Field
                    component={ renderField }
                    placeholder="Почта"
                    name="email"
                    type="email"
                    validate={ emailValidation }
                >
                </Field>
                <Field component={ renderField }
                    name="password"
                    placeholder="Пароль"
                    type="password"
                    validate={ passwordValidation }>
                </Field>
                <Field component={ renderField }
                    name="rep_password"
                    placeholder="Подтвердите пароль"
                    type="password"
                    validate={ passwordValidation }>
                </Field>
            </FieldBlock>
            {/* <Button centered appearance="flat" onClick={ handleClick }>Заполнить</Button> */}
            <FieldButton centered
                component="button"
                isLoading={ props.isLoading }
                name="sibmit"
                type="submit">Отправить
            </FieldButton>
            <LinkButton centered to="/login" appearance="flat"> Уже зарегистрированы?</LinkButton>
        </StyledForm>
    );
});

export default RegForm;