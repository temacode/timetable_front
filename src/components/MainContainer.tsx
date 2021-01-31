import { connect } from 'react-redux';
import Main from './Main';
import { getSheduleDataThunkCreator, setGroupThunkCreator } from '../reducers/mainReducer';
import { translitToRus } from '../helpers/translitToRus';

let mapStateToProps = (state) => {
    return({
        groups: state.main.groups,
        selectedGroup: state.main.selectedGroup,
        selectedGroupRus: translitToRus(state.main.selectedGroup),
        isSelectingGroup: state.main.isSelectingGroup,
        services: state.main.services,
    });
};

let mapDispatchToProps = dispatch => {
    return({
        getShedule: (groupName) => {
            dispatch(getSheduleDataThunkCreator(groupName));
        },
        setGroup: (value) => {
            dispatch(setGroupThunkCreator(value));
        },
    });
};

let MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;