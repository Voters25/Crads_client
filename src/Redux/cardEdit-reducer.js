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






export let changeCardContent = (result) => {
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