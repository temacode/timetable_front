import { connect } from 'react-redux';
import {
    IMainState,
    IService,
    loadServicesThunkCreator,
    selectServiceActionCreator
} from "../../../../../../reducers/mainReducer";
import IntroductionComponent from "./introduction.component";
import {Dispatch} from "react";
import {RootState} from "../../../../../../reduxStore";

const mapStateToProps = (state: RootState) => ({
    services: state.main.services,
    selectedService: state.main.selectedService,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    loadServices: () => {
        dispatch(loadServicesThunkCreator());
    },
    selectService: (service: IService) => {
        dispatch(selectServiceActionCreator(service));
    },
});

export const IntroductionContainer = connect(mapStateToProps, mapDispatchToProps)(IntroductionComponent);
