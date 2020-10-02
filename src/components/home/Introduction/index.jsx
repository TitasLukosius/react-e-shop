import React from 'react';
import styles from './index.module.scss';
import IntroText from 'components/home/IntroText';
import IntroImage from 'components/home/IntroImage';

const Introduction = () => {
    return (
        <div className={styles.Introduction}>
            <IntroText />
            <IntroImage />
        </div>
    )
}

export default Introduction;
