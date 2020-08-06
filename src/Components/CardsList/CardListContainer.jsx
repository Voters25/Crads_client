import { connect } from 'react-redux'
import CardList from './CardList';
import { getList } from '../../Redux/cardList-reducer';
//import { getCard } from '../../Redux/cardEdit-reducer';
import { getCard } from '../../Redux/cardList-reducer';


const mapStateToProps = (state) => {
    return {

        cardList: state.cardList.cardList,


        cardText: state.cardEdit.cardText,
        cardTitle: state.cardEdit.cardTitle,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getCardList: () => {
            dispatch(getList());
        },

        openThisCard: (id) => {
            dispatch(getCard(id));
        }

    }
}

const CardListContainer = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default CardListContainer;