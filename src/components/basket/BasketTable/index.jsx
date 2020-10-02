import React from 'react';
import styles from './index.module.scss';
import BasketItem from 'components/basket/BasketItem';


const BasketTable = ({items, count}) => {

    const itemsList = items.map(item => {
        return (
            <BasketItem {...item}/>
        )
    })


    return (
        <div className={styles.tableCon}>
            <h2>Your Basket!</h2>
            <table className={styles.table}>
                <tr>
                    <th></th>
                    <th>Item name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Remove</th>

                </tr>
                {itemsList}
            </table>
            <button>checkout</button>
        </div>
    )
}

export default BasketTable;
