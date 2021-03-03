
import { connect } from 'react-redux';
import Notification from './Notification';
import {RootState} from "../../reduxStore";

let mapStateToProps = (state: RootState) => ({
    isShowing: state.notification.isShowing,
    message: state.notification.message,
    icon: state.notification.icon,
});

let mapDispatchToProps = () => ({

});

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(Notification);

export default NotificationContainer;
