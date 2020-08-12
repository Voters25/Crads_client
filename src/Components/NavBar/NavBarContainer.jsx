import { connect } from 'react-redux'
import NavBar from './NavBar';
import { getList } from '../../Redux/cardList-reducer';
import { callForwardingToLogIn, logOut } from '../../Redux/userForm-reducer';
import { callForwardingToList } from '../../Redux/cardEdit-reducer';


const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = (dispatch) => {
    return {

        getAllCard: () => {
            callForwardingToList();
            dispatch(getList());
        },
        getLogPage: () => {
            callForwardingToLogIn();
        },
        onLogOut: () => {
            dispatch(logOut());
        }

    }
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;