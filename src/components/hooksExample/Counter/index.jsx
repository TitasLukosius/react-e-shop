import React, { useState } from 'react';
import styles from "./index.module.scss";
import Button from 'components/Button';

const Counter = () => {
    const [delta, setDelta] = useState(0);
    const [value, setValue] = useState(0);

    const handleValueChange = (type) => {
        if(delta){
            setValue((type === 'add' ? 1 : -1) * delta + value);
            setDelta(0);
        }
    }

    return (
        <div className={styles.Counter}>
            <h1>This is counter</h1>
            <h2>Value: {Number(value)}</h2>
            <div>
                <input type="number" onChange={(e) => {
                    setDelta(Number(e.target.value));
                }} value={delta}/>
                <Button color="Primary" onClick={() => handleValueChange('add')}>Increase</Button>
                <Button color="Secondary" onClick={() => handleValueChange('minus')}>Decrease</Button>
            </div>
        </div>
    )
}

export default Counter;
