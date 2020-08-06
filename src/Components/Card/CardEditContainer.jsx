import { connect } from 'react-redux'
import CardEdit from './CardEdit';
import { updateNewCardText, updateNewCardTitle, editCard, saveCardChanges } from '../../Redux/cardEdit-reducer';
import { deleteCard } from '../../Redux/cardList-reducer';


const mapStateToProps = (state) => {
    return {

        cardText: state.cardEdit.cardText,
        cardTitle: state.cardEdit.cardTitle,

        editMode: state.cardEdit.editMode,
        thisCreatePage: state.cardEdit.thisCreatePage,

        cardId: state.cardEdit.cardId

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
        },
        onEditCard: () => {
            dispatch(editCard());
        },
        saveThisCardChanges: (postFormContent) => {
            dispatch(saveCardChanges(postFormContent));
        },
        deleteThisCard: (cardId) => {
            dispatch(deleteCard(cardId));
        }
        
    }

}

const CardEditContainer = connect(mapStateToProps, mapDispatchToProps)(CardEdit);

export default CardEditContainer;