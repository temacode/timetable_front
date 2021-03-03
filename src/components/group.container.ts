import { connect } from 'react-redux';
import GroupComponent from './group.component';
import { updateSavedTimeActionCreator } from '../reducers/mainReducer';
import {Dispatch} from "react";

let mapStateToProps = () => {
    return ({
    });
};

let mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return ({
        updateSavedTime: () => {
            dispatch(updateSavedTimeActionCreator());
        },
    });
};

const GroupContainer = connect(mapStateToProps, mapDispatchToProps)(GroupComponent);

export default GroupContainer;
