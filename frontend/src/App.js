import React, { useState, useEffect } from 'react';

function App() {
    const [motivators, setMotivators] = useState([]);
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetch('/api/motivators')
            .then(response => response.json())
            .then(data => setMotivators(data));
    }, []);

    const addMotivator = async () => {
        await fetch('/api/motivators', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, author })
        });
        window.location.reload();
    };

    return (
        <div>
            <h1>Motivator App</h1>
            <input placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
            <input placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
            <button onClick={addMotivator}>Add</button>
            <ul>
                {motivators.map((m, index) => (
                    <li key={index}>{m.message} - {m.author}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

