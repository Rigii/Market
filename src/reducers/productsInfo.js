import {handleActions} from 'redux-actions';

const initialState = {
    products: [],
    currentRequestStatus: true,
    totalProductsNum: 0
};

export default handleActions(
    {
        GET_DATA: (state, action) => ({
            ...state,
            products: state.products.concat(action.payload.entities),
            currentRequestStatus: true,
            totalProductsNum: action.payload.total
        }),
        GET_DATA_ERROR: (state, action) => ({
            ...state,
            currentRequestStatus: false
        })
    },
    initialState
)
