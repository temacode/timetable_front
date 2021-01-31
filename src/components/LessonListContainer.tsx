import { connect } from 'react-redux';
import LessonList from './LessonList';
let mapStateToProps = state => {
    return ({
        savedAt: state.main.savedAt,
    });
};

let mapDispatchToProps = () => {
    return ({});
};

const LessonListContainer = connect(mapStateToProps, mapDispatchToProps)(LessonList);

export default LessonListContainer;