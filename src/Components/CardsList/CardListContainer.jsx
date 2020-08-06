import { connect } from 'react-redux'
import CardList from './CardList';
//import { getList } from '../../Redux/cardList-reducer';
//import { getCard } from '../../Redux/cardEdit-reducer';
import { getCard, deleteCard, getList, callForwardingToCard } from '../../Redux/cardList-reducer';
import { zeroingCardContent, createHints, thisEditPage, thisCreatePage } from '../../Redux/cardEdit-reducer';


const mapStateToProps = (state) => {
    return {

        cardList: state.cardList.cardList,


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
            callForwardingToCard();
        }

    }
}

const CardListContainer = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default CardListContainer;