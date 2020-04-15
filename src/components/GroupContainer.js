import { connect } from 'react-redux';
import Group from './Group';

let mapStateToProps = () => {
    return ({
    });
};

let mapDispatchToProps = () => {
    return ({});
};

const GroupContainer = connect(mapStateToProps, mapDispatchToProps)(Group);

export default GroupContainer;