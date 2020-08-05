const CHANGE_CARD_TITLE = 'CHANGE-CARD-TITLE';
const CHANGE_CARD_TEXT = 'CHANGE-CARD-TEXT';


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

    default:
        return state
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