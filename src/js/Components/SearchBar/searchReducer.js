const defaultState = {
        city: ''     
};

export default function searchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH': {
            return {
                ...state, 

                city: payload.city
            };
        }
        // case 'GET_WEATHER': {
        //     const { city } = action.payload;
        //     return {
        //         city: ''
        //     }
        // }
        default: {
            return state;
        }
    }
}