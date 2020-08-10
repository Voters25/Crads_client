import { connect } from 'react-redux'
import NavBar from './NavBar';
import { getList } from '../../Redux/cardList-reducer';


const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = (dispatch) => {
    return {

        getAllCard: () => {
            dispatch(getList());
        }


    }
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;