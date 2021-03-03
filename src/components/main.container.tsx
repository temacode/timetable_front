import { connect } from 'react-redux';
import MainComponent from './main.component';
import { getScheduleDataThunkCreator, setGroupThunkCreator } from '../reducers/mainReducer';
import { translitToRus } from '../helpers/translitToRus';
import {RootState} from "../reduxStore";
import {Dispatch} from "react";

let mapStateToProps = (state: RootState) => {
    return({
        schedule: state.main.schedule,
        selectedGroup: state.main.selectedGroup,
        selectedGroupRus: translitToRus(state.main.selectedGroup),
        services: state.main.services,
    });
};

let mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return({
        getSchedule: (groupName: string) => {
            dispatch(getScheduleDataThunkCreator(groupName));
        },
        setGroup: (groupName: string) => {
            dispatch(setGroupThunkCreator(groupName));
        },
    });
};

let MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default MainContainer;
