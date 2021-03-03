import { connect } from 'react-redux';
import HeaderComponent from './header.component';
import {HeaderInterface} from "../interfaces/header.interface";
import React from "react";

const mapStateToProps = (state: any): HeaderInterface => ({
    isOnline: state.main.isLoggedIn || undefined,
    isOnLogin: state.main.isOnLogin || undefined,
});

export const HeaderContainer = connect<HeaderInterface, null, HeaderInterface>(mapStateToProps, null)(HeaderComponent);
