import React, { useState } from 'react';
import styles from './index.module.scss';
import ItemCard from 'components/ItemCard';

const ResultBar = ({count, sortOrder, onSortOrderChange }) => {

    const order = sortOrder ?? 'a-z';

    return (
        <div className={styles.ResultBar}>
            <p>Total search results: {count}</p>
            <div className={styles.Selector}>
                <label>Sort by:
                <select className={styles.SortSelector} value={order} onChange={(e) => onSortOrderChange(e.target.value)}>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="low-to-high">Low to High</option>
                    <option value="high-to-low">High to Low</option>
                    <option value="rating">Rating</option>
                </select>
                </label>
            </div>
        </div>
    )
}

export default ResultBar;