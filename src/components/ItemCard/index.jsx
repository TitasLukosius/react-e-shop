import React from 'react';
import styles from "./index.module.scss";
import Card from 'components/Card';
import { connect } from 'react-redux';
import { addToCart } from 'store/actionCreators';
import {
    Link
} from 'react-router-dom';


const ItemCard = ({id, title, price, img, addToCart, description}) => {

    return (
        <Card>
            <div className={styles.Item} key={id}>
                <img className ={styles.Image} src={img} alt={title} />
                <div className={styles.ItemBody}>
                    <h2>{title}</h2>
                    <div className={styles.Price}>
                        <strong>Price: {(Math.round(price * 100) / 100).toFixed(2)} $</strong>
                    </div>
                    <div className ={styles.Buttons}>
                        <button className={styles.Button} onClick={() => addToCart(id)}>Add to Cart</button>
                        <button className={styles.Button}><Link className={styles.ButtonLink}to={`/item/${id}`}>Learn more</Link>
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

//funkcija kuri duoda galimybe siusti action'us redux reduceriui
const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch(addToCart(id))
});

export default connect(null, mapDispatchToProps)(ItemCard);