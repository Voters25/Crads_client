import history from "../history";

const POST_STARTED = 'POST-STARTED';
const CHANGE_CARD_TITLE = 'CHANGE-CARD-TITLE';
const CHANGE_CARD_TEXT = 'CHANGE-CARD-TEXT';
const CHANGE_CARD_CONTENT = 'CHANGE-CARD-CONTENT';
const CHANGE_EDIT_MODE = 'CHANGE-EDIT-MODE';
const CHANGE_THIS_CREATE_PAGE = 'CHANGE-THIS-CREATE-PAGE';
const CHANGE_CARD_ID = 'CHANGE-CARD-ID';


const initialState = {
    cardTitle: '',
    cardText: '',
    editMode: false,
    thisCreatePage: false,
    cardId: ''
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
    case CHANGE_EDIT_MODE:
        return {
            ...state,
            editMode: action.newModeValue
        }
    case CHANGE_THIS_CREATE_PAGE:
        return {
            ...state,
            thisCreatePage: action.newAnswer
        }
    case CHANGE_CARD_ID:
        return {
            ...state,
            cardId: action.newId
        }

    default:
        return state
    }
}


/*===================================================================================*/
// Save Card Changes

export const saveCardChanges = (postFormContent) => {
    return dispatch => {
        dispatch(postCardStarted());

        let formData = new FormData();
        formData.append('id', postFormContent.cardId);
        formData.append('Title', postFormContent.cardTitle);
        formData.append('Content', postFormContent.cardText);


        fetch(`http://localhost:5000/edit`, {
            method: 'POST',
            credentials: "include",
            body: formData
        })
            .then(res => res.text())
            .then(result => {
                console.log(result);

                dispatch(zeroingCardId());
                callForwardingToList();
                

            }).catch(err => console.log(err))
    }
}

const postCardStarted = () => ({
    type: POST_STARTED
});



/*===================================================================================*/

/*===================================================================================*/
// Save Card Changes

export const createCard = (postFormContent) => {
    return dispatch => {
        dispatch(postCardStarted());

        let formData = new FormData();
        formData.append('title', postFormContent.cardTitle);
        formData.append('content', postFormContent.cardText);


        fetch('http://localhost:5000/create', {
            method: 'POST',
            credentials: "include",
            body: formData
        })
            .then(res => res.text())
            .then(result => {
                console.log(result);

                callForwardingToList();

            }).catch(err => console.log(err))
    }
}


/*===================================================================================*/



export const callForwardingToList = () => {
    history.push('/');
}



export let changeCardContent = (result) => {
    return {
        type: 'CHANGE-CARD-CONTENT',
        newTitle: result.Title,
        newText: result.Content
    }
}

export const zeroingCardContent = () => {
    return {
        type: 'CHANGE-CARD-CONTENT',
        newTitle: '',
        newText: ''
    }
}

export const createHints = () => {
    return {
        type: 'CHANGE-CARD-CONTENT',
        newTitle: '   Title...',
        newText: '   Text...'
    }
}

export const editCard = () => {
    return {
        type: 'CHANGE-EDIT-MODE',
        newModeValue: !initialState.editMode
    }
}

export const thisCreatePage = () => {
    return {
        type: 'CHANGE-THIS-CREATE-PAGE',
        newAnswer: true
    }
}
export const thisEditPage = () => {
    return {
        type: 'CHANGE-THIS-CREATE-PAGE',
        newAnswer: false
    }
}

export const changeCardId = (id) => {
    return {
        type: 'CHANGE-CARD-ID',
        newId: id
    }
}
export const zeroingCardId = () => {
    return {
        type: 'CHANGE-CARD-ID',
        newId: ''
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