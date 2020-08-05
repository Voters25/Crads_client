import { connect } from 'react-redux'
import CardElement from './CardElement';
import { getCard } from '../../../Redux/cardEdit-reducer';


const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = (dispatch) => {
    return {

        openThisCard: (id) => {
            dispatch(getCard(id));
        }

    }
}

const CardElementContainer = connect(mapStateToProps, mapDispatchToProps)(CardElement);

export default CardElementContainer;