const initialState = {
    show: false,
    message: '',
};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ALERT':
            return { ...state, show: true, message: action.message };
        case 'HIDE_ALERT':
            return { ...state, show: false, message: '' };
        default:
            return state;
    }
};

export default alertReducer;
