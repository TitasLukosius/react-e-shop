// Selector'ius - tai funkcija kuri gauna state reikšmę, ir gražina jos dalį

export const selectItemsInPriceRange = (state, min = Number.MIN_VALUE, max = Number.MAX_VALUE) =>
    state.catalog.items.filter(({ price }) => price >= min && price <= max)

export const selectItemsByType = (state, itemType) =>
    state.catalog.items.filter(({ type }) => type === itemType)

export const selectItemById = (state, itemId) =>
    state.catalog.items.find(({ id }) => id === itemId)    
