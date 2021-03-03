import React from 'react';
import {FieldBlock, FormHeader, StyledField, StyledFieldInput, StyledFieldMessage} from "./register-form-styles";
import {StyledForm} from "../../../../../../design-kit/Form/Form";
import FieldButton from "../../../../../../design-kit/Button/FieldButton";
import {Field, Form} from "react-final-form";
import {requiredValidator} from "../../../../../common/src/lib/validators";
import LinkButton from "../../../../../../design-kit/Button/LinkButton";
import {IRegisterForm} from "../../interfaces/register-form.interface";

interface Props {
    input: any,
    placeholder: string,
    type: string,
    meta: {
        touched: boolean,
        error: string,
        warning: string
    }
}

const renderField = ({input, placeholder, type, meta: {touched, error, warning}}: Props) => (
    <StyledField>
        <StyledFieldInput {...input}
                          placeholder={placeholder}
                          spellCheck={false}
                          type={type}>
        </StyledFieldInput>
        <StyledFieldMessage>
            {touched && error ? error : ''}
            {touched && warning ? warning : ''}
        </StyledFieldMessage>
    </StyledField>
);

interface RegisterFormProps {
    isLoading: boolean
    onSubmit: any
}

const RegisterFormComponent = (props: RegisterFormProps) => (
        <Form onSubmit={(values: IRegisterForm) => {}}>
            {({handleSubmit}) => (
                <StyledForm onSubmit={handleSubmit}>
                    <FormHeader>Регистрация</FormHeader>
                    <FieldBlock>
                        <Field
                            component={renderField}
                            placeholder="Почта"
                            name="email"
                            type="email"
                        >
                        </Field>
                        <Field component={renderField}
                               name="password"
                               placeholder="Пароль"
                               type="password">
                        </Field>
                        <Field component={renderField}
                               name="rep_password"
                               placeholder="Подтвердите пароль"
                               type="password">
                        </Field>
                    </FieldBlock>
                    <FieldButton centered
                                 component="button"
                                 isLoading={props.isLoading}
                                 name="subbmit"
                                 type="submit">Отправить
                    </FieldButton>
                    <LinkButton centered to="/login" appearance="flat"> Уже зарегистрированы?</LinkButton>
                </StyledForm>
            )}
        </Form>
    );

export default RegisterFormComponent;
