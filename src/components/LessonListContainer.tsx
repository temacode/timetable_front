import { connect } from 'react-redux';
import LessonList from './LessonList';
import {RootState} from "../reduxStore";

let mapStateToProps = (state: RootState) => {
    return ({
        savedAt: state.main.savedAt,
    });
};

let mapDispatchToProps = () => {
    return ({});
};

const LessonListContainer = connect(mapStateToProps, mapDispatchToProps)(LessonList);

export default LessonListContainer;
