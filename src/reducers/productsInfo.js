import { handleActions } from 'redux-actions';

const initialState = {
    products: [],
    renderNum: 0,
    currentRequestStatus: true,
    totalProductsNum: 0
  //  page: 1
};

export default handleActions(

    {
        GET_DATA: (state, action) => ({
            ...state,
            products: state.products.concat(action.payload.entities),
            renderNum: state.renderNum + (state.products.length - state.renderNum),
            currentRequestStatus: true,
            totalProductsNum: action.payload.total,
          //  page: ++state.page
        }),
        GET_DATA_ERROR: (state, action) => ({
            ...state,
            currentRequestStatus: false
        })
    },
initialState
)
