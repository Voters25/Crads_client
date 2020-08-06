import history from "../history";
import { changeCardContent } from './cardEdit-reducer'

const CHANGE_CARD_LIST = 'CHANGE-CARD-LIST';
const GET_STARTED = 'GET-STARTED';


const initialState = {
    cardList: []
}

const cardListReducer = (state = initialState, action) => {
    
    switch (action.type) {

    case CHANGE_CARD_LIST:
        return {
             ...state,
             cardList: action.newList
        }

    default:
        return state
    }
}



/*===================================================================================*/
// Get list

export const getList = () => {
    return dispatch => {
        dispatch(getListStarted());


        fetch('http://localhost:5000/list', {
            credentials: "include"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                dispatch(changeCardList(result));
            }).catch(err => console.log(err))
    }
}

const getListStarted = () => ({
    type: GET_STARTED
});



/*===================================================================================*/


/*===================================================================================*/
// Get Card

export const getCard = (id) => {
    return dispatch => {
        dispatch(getCardStarted());


        fetch(`http://localhost:5000/card/${id}`, {
            credentials: "include"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                //dispatch(zeroingCardContent());
                dispatch(changeCardContent(result));
                callForwarding();

                // НННЕЕЕЕЕ ППААААШШЕЕЕЕТТТТ ПЕРЕАДРЕСАЦИЯ. Компонента не отрисовывается. Только при релоуде страницы (но без стэйта)
                // FIX ME

            }).catch(err => console.log(err))
    }
}

const getCardStarted = () => ({
    type: GET_STARTED
});



/*===================================================================================*/

const callForwarding = () => {
    history.push('/card');
}



let changeCardList = (result) => {
    return {
        type: 'CHANGE-CARD-LIST',
        newList: result
    }
}






export default cardListReducer;