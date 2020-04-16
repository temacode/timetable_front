import React from 'react';
import { HashLoader as LoaderAnimation } from 'react-spinners';

const Spinner = (props) => (
    <LoaderAnimation { ...props }></LoaderAnimation>
);

export default Spinner;