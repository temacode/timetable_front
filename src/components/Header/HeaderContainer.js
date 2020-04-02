import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => ({
    isOnline: state.main.isLoggedIn,
    isOnLogin: state.main.isOnLogin,
})

const HeaderContainer = connect(mapStateToProps, null)(Header);

export default HeaderContainer;