import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                state.items[existingIndex] = {
                    ...state.items[existingIndex],
                    quantity: state.items[existingIndex].quantity + 1,
                };
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;