import { connect } from 'react-redux'
import CardList from './CardList';
//import { getList } from '../../Redux/cardList-reducer';
//import { getCard } from '../../Redux/cardEdit-reducer';
import { getCard, deleteCard, getList, callForwardingToCard, getListWithByTag } from '../../Redux/cardList-reducer';
import { zeroingCardContent, createHints, thisEditPage, thisCreatePage, switchOfEditCard } from '../../Redux/cardEdit-reducer';


const mapStateToProps = (state) => {
    return {

        cardList: state.cardList.cardList,
        tagList: state.cardList.tagList


        //cardText: state.cardEdit.cardText,
        //cardTitle: state.cardEdit.cardTitle,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getCardList: () => {
            dispatch(getList());
        },

        openThisCard: (id) => {
            dispatch(getCard(id));
        },

        deleteThisCard: (id) => {
            dispatch(deleteCard(id));
        },

        createNewCard: () => {
            dispatch(zeroingCardContent());
            dispatch(thisCreatePage());
            dispatch(createHints());
            dispatch(switchOfEditCard());
            callForwardingToCard();
        },

        getCardsWithTag: (tag) => {
            dispatch(getListWithByTag(tag));
        }

    }
}

const CardListContainer = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default CardListContainer;