import history from "../history";

const GET_STARTED = 'GET-STARTED';
const CHANGE_CARD_TITLE = 'CHANGE-CARD-TITLE';
const CHANGE_CARD_TEXT = 'CHANGE-CARD-TEXT';
const CHANGE_CARD_CONTENT = 'CHANGE-CARD-CONTENT';


const initialState = {
    cardTitle: '',
    cardText: '',
}

const cardEditReducer = (state = initialState, action) => {
    
    switch (action.type) {

    case CHANGE_CARD_TEXT:
        return {
             ...state,
             cardText: action.newText
        }
    case CHANGE_CARD_TITLE:
        return{
            ...state,
            cardTitle: action.newTitle
        }
    case CHANGE_CARD_CONTENT:
        return {
            ...state,
            cardTitle: action.newTitle,
            cardText: action.newText
        }

    default:
        return state
    }
}



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

let changeCardContent = (result) => {
    return {
        type: 'CHANGE-CARD-CONTENT',
        newTitle: result.Title,
        newText: result.Content
    }
}

const zeroingCardContent = () => {
    return {
        type: 'CHANGE-CARD-CONTENT',
        newTitle: '',
        newText: ''
    }
}




export const updateNewCardTitle = (text) => {
    return {
        type: 'CHANGE-CARD-TITLE',
        newTitle: text
    }
}

export const updateNewCardText = (text) => {
    return {
        type: 'CHANGE-CARD-TEXT',
        newText: text
    }
}





export default cardEditReducer;