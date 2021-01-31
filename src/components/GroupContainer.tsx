import { connect } from 'react-redux';
import Group from './Group';
import { updateSavedTimeActionCreator } from '../reducers/mainReducer';

let mapStateToProps = state => {
    return ({
    });
};

let mapDispatchToProps = dispatch => {
    return ({
        updateSavedTime: () => {
            dispatch(updateSavedTimeActionCreator());
        },
    });
};

const GroupContainer = connect(mapStateToProps, mapDispatchToProps)(Group);

export default GroupContainer;