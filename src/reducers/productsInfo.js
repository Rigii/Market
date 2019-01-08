import {handleActions} from 'redux-actions';

const initialState = {
    products: [],
    currentRequestStatus: true,
    totalProductsNum: 0,
    page: 1,
    renderNum: 0
};

export default handleActions(
    {
        GET_DATA: (state, action) => ({
            ...state,
            products: state.products.concat(action.payload.entities),
            currentRequestStatus: true,
            totalProductsNum: action.payload.total,

        }),
        GET_DATA_ERROR: (state, action) => ({
            ...state,
            currentRequestStatus: false
        }),
        PAGE_NUM: (state, action) => ({
            ...state,
            renderNum: state.renderNum + 4,
            page: state.totalProductsNum < 8 ? state.page + 2 : state.page + 1
        }),
    },
    initialState
)
