import { Main } from '../models/Main';
import { Cart } from '../models/Cart';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';


interface storeState {
    main: Main[];
    cart: Cart[];
    isLoading: boolean;
    error: string;
}

const initialState: storeState = {
    main: [],
    cart: [],
    isLoading: false,
    error: '',
}

export const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        valueFetching(state) {
            state.isLoading = true;
        },
        valueFetchingSuccess(state, action: PayloadAction<Main[]>) {
            state.isLoading = false
            state.error = ''
            state.main = action.payload
        },
        valueFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },

        add: (state, action: PayloadAction<Cart>) => {
            state.cart.push(action.payload);
        },

        remove: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(
                (obj:Cart) => obj.ID !== action.payload
            );
        },

        clear: (state) => {
            state.cart = [];
        },
    }
})

export const { valueFetching, valueFetchingSuccess, valueFetchingError, add, remove, clear } = storeSlice.actions;

export default storeSlice.reducer;