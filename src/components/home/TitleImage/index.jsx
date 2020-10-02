import React from 'react';
import styles from './index.module.scss';

const TitleImage = () => {
    return (
        <div className={styles.TitleImage}>
            <div className={styles.img}>
                <img src="https://i.pinimg.com/originals/5a/2b/bb/5a2bbb85f26b16b0d2d1b1a47a05a09a.jpg"></img>
            </div>
            <h1>Tito Gitaros!</h1>
        </div>
    )
}

export default TitleImage;
