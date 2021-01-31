
import { connect } from 'react-redux';
import Notification from './Notification';

let mapStateToProps = state => ({
    isShowing: state.notification.isShowing,
    message: state.notification.message,
    icon: state.notification.icon,
});

let mapDispatchToProps = () => ({

});

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(Notification);

export default NotificationContainer;