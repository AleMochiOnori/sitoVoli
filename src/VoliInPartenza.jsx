import { useEffect, useState } from 'react';
import './VoliInPartenza.css'; // Assicuriamoci di avere un file CSS separato

const VoliInPartenza = () => {
    const [voliInPartenza, setVoliInPartenza] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8080/voliInPartenza')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore di rete o del server');
                }
                return response.json();
            })
            .then(data => {
                setVoliInPartenza(data); // Imposta direttamente i dati ricevuti
            })
            .catch(error => {
                console.error('Errore:', error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div className="error">Errore: {error}</div>;
    }

    return (
        <div className='wrapper'>
            <div className="volo-container">
                <h1 className="title">Voli in partenza</h1>
                <div className="table-container">
                    <table className="volo-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Compagnia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {voliInPartenza.map((volo) => (
                                <tr key={volo.id}>
                                    <td>{volo.id}</td>
                                    <td>{volo.compagnia}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VoliInPartenza;