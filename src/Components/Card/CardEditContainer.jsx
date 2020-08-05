import { connect } from 'react-redux'
import CardEdit from './CardEdit';
import { updateNewCardText, updateNewCardTitle } from '../../Redux/cardEdit-reducer copy';


const mapStateToProps = (state) => {
    return {

        cardText: state.cardEdit.cardText,
        cardTitle: state.cardEdit.cardTitle,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        changeCardText: (text) => {
            let action = updateNewCardText(text);
            dispatch(action);
        },
        changeCardTitle: (text) => {
            let action = updateNewCardTitle(text);
            dispatch(action);
        }
        
    }

}

const CardEditContainer = connect(mapStateToProps, mapDispatchToProps)(CardEdit);

export default CardEditContainer;