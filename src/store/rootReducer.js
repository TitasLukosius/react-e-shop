import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes.js';
import uniqid from 'uniqid';

const store = {
    cart: {
        items: []
    },
    auth: {
        loggedIn: false,
        email: ''
    },
    catalog: {
        search: "",
        items: [
            { id: 1, type: 'electric', title: "Elektrine gitara 'Fender'", price: 1600, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 2, type: 'electric', title: "Elektrine gitara 'Gibson'", price: 1200, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 3, type: 'electric', title: "Elektrine gitara 'Ibanez'", price: 600, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 4, type: 'electric', title: "Elektrine gitara 'Tamsta'", price: 200, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 5, type: 'acoustic', title: "Akustine gitara 'Fender'", price: 1250, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 6, type: 'acoustic', title: "Akustine gitara 'Gibson'", price: 750, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 7, type: 'classical', title: "Klasikine gitara 'Ibanez'", price: 220, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 8, type: 'electro-acoustic', title: "Elektro-akustine gitara 'Tamsta'", price: 850, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 9, type: 'electro-acoustic', title: "Elektro-akustine gitara 'Fender'", price: 2500, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 10, type: 'twelve-string', title: "Dvylikastyge gitara 'Gibson'", price: 550, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 11, type: 'electric', title: "Elektrine gitara 'Ibanez'", price: 950, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },
            { id: 12, type: 'classical', title: "Klasikine gitara 'Tamsta'", price: 380, description: "The company was founded in Fullerton, California, by Clarence Leonidas 'Leo' Fender in 1946. Its headquarters are in Scottsdale, Arizona.", img: "https://www.tamsta.com/media/catalog/product/cache/3edebc757dd350e9168fa28a81a1f67d/1/_/1_101_20.jpg" },],
        filters: [
            {
                id: 1,
                name: "Brands",
                //  curry methodology - function return function, naudojama perduoti papildomiem parametram
                filterFunction: types => {
                    // Funkcija kuris bus naudojama arr.filter(... cia....), turi grazint true arba false
                    return function (item) {
                        const title = item.title;
                        for (let i = 0; i < types.length; i++) {
                            const { name, show } = types[i];
                            if (!show && title.includes(name)) return false;
                        }
                        return true;
                    }
                },
                types: [
                    {
                        name: 'Fender',
                        show: true
                    },
                    {
                        name: 'Gibson',
                        show: true
                    },
                    {
                        name: 'Ibanez',
                        show: true
                    },
                    {
                        name: 'Tamsta',
                        show: true
                    },
                    {
                        name: 'Epiphone',
                        show: true
                    },
                    {
                        name: 'Behringer',
                        show: true
                    },
                    {
                        name: 'Cort',
                        show: true
                    },
                    {
                        name: 'Godin',
                        show: true
                    },
                    {
                        name: 'Hohner',
                        show: true
                    },
                    {
                        name: 'Jackson',
                        show: true
                    },
                    {
                        name: 'Music Man',
                        show: true
                    },
                    {
                        name: 'Schecter',
                        show: true
                    },
                    {
                        name: 'Squier',
                        show: true
                    },
                    {
                        name: 'Tokai',
                        show: true
                    },
                    {
                        name: 'Zemaitis',
                        show: true
                    },
                    {
                        name: 'Washburn',
                        show: true
                    },
                    {
                        name: 'Stagg',
                        show: true
                    },
                    {
                        name: 'VOX',
                        show: true
                    }
                ]
            },
            {
                id: 2,
                name: "Type",
                filterFunction: types => {
                    return function (item) {
                        const type = item.type;
                        for (let i = 0; i < types.length; i++) {
                            const { name, show } = types[i];
                            console.log(name);
                            if (!show && type === name) return false;
                        }
                        return true;
                    }
                },
                types: [
                    {
                        name: 'electric',
                        show: true
                    },
                    {
                        name: 'bass',
                        show: true
                    },
                    {
                        name: 'acoustic',
                        show: true
                    },
                    {
                        name: 'classical',
                        show: true
                    },
                    {
                        name: 'electro-acoustic',
                        show: true
                    },
                    {
                        name: 'twelve-string',
                        show: true
                    }
                ]
            }]
    }

};

// Reduceris - tai funkcija kuri priklausomai nuo action tipo keičia esamą state reikšmę
export default function (state = store, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items.findIndex(({ id }) => id == action.payload.id) >= 0
                        ? state.cart.items.map(item => ({
                            ...item,
                            purchaseAmount: item.id === action.payload.id ? item.purchaseAmount + 1 : item.purchaseAmount
                        }))
                        : [
                            ...state.cart.items,
                            {
                                ...state.catalog.items.find(({ id }) => id === action.payload.id),
                                purchaseAmount: 1
                            }
                        ]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items
                        .map(item => ({
                            ...item,
                            purchaseAmount: item.id === action.payload.id ? item.purchaseAmount - 1 : item.purchaseAmount
                        }))
                        .filter(({purchaseAmount}) => purchaseAmount > 0)
                }
            };
        default: return state;
    }
}


