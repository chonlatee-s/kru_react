const initialState = {
    data: {
        UserId:'',
        Name:'',
        Profile:'',
        IsLoggedIn:false,
        type:''
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DEL_DATA':
            const deletedState = state
            return deletedState
        case 'ADD_DATA':
            const addedState = {
                data:action.playload
            }
            return addedState
        default:
            break
    }
    return state;
}

export default reducer;