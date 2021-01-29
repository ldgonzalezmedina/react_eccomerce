import { CartActionTypes } from './cart.types.js';

export const toggleCartHidden = () => ({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

export const AddItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const RemoveItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const ClearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
})