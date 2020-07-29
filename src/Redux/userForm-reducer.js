const TEST = 'TEST';

const initialState = {
    test: ''
}

const userFormReducer = (state = initialState, action) => {
    
    switch (action.type) {

    case TEST:
        return {
             ...state,
        }

    default:
        return state
    }
}

const test = () => {
    return {
        type: 'TEST'
    }
}


export default userFormReducer;