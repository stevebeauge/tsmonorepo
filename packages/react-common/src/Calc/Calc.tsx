import { add } from '@tsmonorepo/common';
import * as React from 'react';

const Calc: React.FC = () => {
    const [first, setFirst] = React.useState(0);
    const [second, setSecond] = React.useState(0);

    const [result, setResult] = React.useState(0);

    return (
        <div>
            <input type="number" value={first} onChange={(e) => setFirst(Number(e.target.value))} />
            <input type="number" value={second} onChange={(e) => setSecond(Number(e.target.value))} />
            <button onClick={() => add(first, second)}>+</button>
            <p>{result}</p>
        </div>
    );

}