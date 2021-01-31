import { connect } from 'react-redux';
import HelloPage from './HelloPage';
import { loadServicesThunkCreator, selectServiceActionCreator } from '../reducers/mainReducer';

const mapStateToProps = (state) => ({
    services: state.main.services,
    selectedService: state.main.selectedService,
});

const mapDispatchToProps = dispatch => ({
    loadServices: () => {
        dispatch(loadServicesThunkCreator());
    },
    selectService: service => {
        dispatch(selectServiceActionCreator(service));
    },
});

const HelloPageContainer = connect(mapStateToProps, mapDispatchToProps)(HelloPage);

export default HelloPageContainer;