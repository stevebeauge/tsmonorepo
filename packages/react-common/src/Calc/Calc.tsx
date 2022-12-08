import { add } from '@tsmonorepo/common';
import * as React from 'react';

const Calc: React.FC = () => {
    const [first, setFirst] = React.useState(0);
    const [second, setSecond] = React.useState(0);

    const [result, setResult] = React.useState(0);

    const handleFirstChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirst(Number(e.target.value));
    };

    const handleSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecond(Number(e.target.value));
    }

    return (
        <div>
            <input type="number" value={first} onChange={handleFirstChange} />
            <input type="number" value={second} onChange={handleSecondChange} />
            <button onClick={() => add(first, second)}>+</button>
        </div>
    );

}