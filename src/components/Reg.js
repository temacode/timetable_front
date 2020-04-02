import React from 'react';
import Header from './Header';
import RegForm from './RegForm';
import LinkButton from '../design-kit/LinkButton';

const Reg = props => (
    <>
        <Header></Header>
        <RegForm></RegForm>
        <LinkButton to="/login" appearance="flat"> Уже зарегистрированы?</LinkButton>
    </>
);

export default Reg;