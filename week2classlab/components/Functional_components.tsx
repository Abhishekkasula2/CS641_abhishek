import React, { useState } from 'react';

const CounterA: React.FC<{ initialCount: number }> = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + 1);

    return (
        <div>
            <h2>Counter A</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment A</button>
        </div>
    );
};

const CounterB: React.FC<{ initialCount: number }> = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + 1);

    return (
        <div>
            <h2>Counter B</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment B</button>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div>
            <h1>Counter Components</h1>
            <CounterA initialCount={5} />  
            <CounterB initialCount={10} /> 
        </div>
    );
};

export default App;
