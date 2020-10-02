import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes.js';

// Action'as tai yra objektas, kuris 2 savybes:
// type - tiesiog string reikšmė, pagal ką reduceris identifikuos, kaip reikia keisti state
// payload - galimi duomenys, kurie reikalingi atlikti state pakeitimus

// Actios creatorius, tai funkcija, kuri sukuria Action'ą
export const addToCart = (id) => ({
    type: ADD_TO_CART,
    payload: {id}
})

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: {id}
})

