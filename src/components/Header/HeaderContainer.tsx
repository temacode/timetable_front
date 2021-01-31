import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state: any) => ({
    isOnline: state.main.isLoggedIn || undefined,
    isOnLogin: state.main.isOnLogin || undefined,
});

const HeaderContainer = connect(mapStateToProps, null)(Header);

export default HeaderContainer;