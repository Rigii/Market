import { GET_DATA } from '../constants/Const.js'
import { GET_DATA_ERROR } from '../constants/Const.js'
import {PAGE_NUM} from '../constants/Const.js'
import { getDataFetch } from '../components/helpers/helpers.js'

export const getProductsData = (url) => {
    return function (dispatch) {
        dispatch ({
            type: PAGE_NUM
        });
        return getDataFetch(url).then(function (data) {
            if (data !== null) {
                dispatch ({
                    type: GET_DATA,
                    payload: data
                })
            } else {
            dispatch ({
                type: GET_DATA_ERROR
            })}
        })
    }
};

