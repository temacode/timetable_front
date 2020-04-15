import { connect } from 'react-redux';
import LessonList from './LessonList';
let mapStateToProps = () => {
    return ({
    });
};

let mapDispatchToProps = () => {
    return ({});
};

const LessonListContainer = connect(mapStateToProps, mapDispatchToProps)(LessonList);

export default LessonListContainer;