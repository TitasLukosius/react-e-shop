import React from 'react';
import styles from './index.module.scss';
import ItemCard from 'components/ItemCard';

const ItemGrid = ({items}) => {

    const itemCards = items.map(item => <ItemCard key={item.id} {...item} />)
    return (
        <div className={styles.itemGrid}>
            {itemCards}
        </div>
    )
}

export default ItemGrid;