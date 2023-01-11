import { valueFetching, valueFetchingError, valueFetchingSuccess } from './storeSlice';
import axios from 'axios';
import { AppDispatch } from '../store';
import { Main } from '../models/Main';


export const fetchValue = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(valueFetching())
        const response = await axios.get<Main[]>('https://www.cbr-xml-daily.ru/daily_json.js')
        dispatch(valueFetchingSuccess(response.data))
    } catch (e:any) {
        dispatch(valueFetchingError(e.message))
    }
}