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



let changeCardList = (result) => {
    return {
        type: 'CHANGE-CARD-LIST',
        newList: result
    }
}






export default cardListReducer;