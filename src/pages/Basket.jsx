import React, { useState, useEffect } from 'react';
import BasketTable from 'components/basket/BasketTable';
import { connect } from 'react-redux';

const Basket = ({initItems}) => {

    return (
        <div>
            <BasketTable items={initItems}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    initItems: state.cart.items,
    // filteredItems: (min, max) => selectItemsInPriceRange(state, min, max)
});

export default connect(mapStateToProps)(Basket);
