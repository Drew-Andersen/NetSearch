import { useEffect, useState } from 'react';

export default function Alerts() {
    const [alerts, setAlerts] = useState([]);
    
    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const keywords = ['unauthorized', 'failed', 'denied'];
                const keywordQuery = keywords.join(' OR ');

                const res = await fetch(`http://localhost:3001/api/logs/search?q=${keywordQuery}&severity=ERROR`)
                const data = await res. json();

                setAlerts([...data.logs]);
            } catch (err) {
                console.error('Failed to fetch alerts', err);
            }
        }
        fetchAlerts();
    }, []);

    return(
        <>
            <div className="my-4">
                <h2 className="text-danger mb-1"><strong>Security Alerts</strong></h2>
                {alerts.length === 0 ? (
                    <p>No error-level alerts found.</p>
                ) : (
                    <ul className='list-group'>
                        {alerts.map((alert, index) => (
                            <li key={index} className='list-group-item list-group-item-danger'>
                                <strong>{alert.timestamp}</strong> - {alert.message}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}