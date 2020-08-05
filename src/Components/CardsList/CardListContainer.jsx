import { connect } from 'react-redux'
import CardList from './CardList';
import { getList } from '../../Redux/cardList-reducer';


const mapStateToProps = (state) => {
    return {

        cardList: state.cardList.cardList

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getCardList: () => {
            dispatch(getList());
        }

    }
}

const CardListContainer = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default CardListContainer;