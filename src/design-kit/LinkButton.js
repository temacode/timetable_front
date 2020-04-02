import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button/Button';

const LinkButton = ({ to, ...props}) => (
    <Link to={to}>
        <Button {...props}></Button>
    </Link>
);

export default LinkButton;