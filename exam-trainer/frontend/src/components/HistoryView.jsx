import { useState, useEffect } from 'react';

const HistoryView = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('exam_history');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // Sort by date desc
                parsed.sort((a, b) => new Date(b.date) - new Date(a.date));
                setHistory(parsed);
            } catch (e) {
                console.error("Failed to parse history", e);
            }
        }
    }, []);

    const clearHistory = () => {
        if (confirm('Clear all history?')) {
            localStorage.removeItem('exam_history');
            setHistory([]);
        }
    };

    return (
        <div className="history-view glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h1>Exam History</h1>
                {history.length > 0 && <button className="secondary" onClick={clearHistory}>Clear History</button>}
            </div>

            {history.length === 0 ? (
                <p>No exams taken yet.</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <th style={{ padding: '0.8rem', textAlign: 'left' }}>Date</th>
                            <th style={{ padding: '0.8rem', textAlign: 'left' }}>Exam</th>
                            <th style={{ padding: '0.8rem', textAlign: 'left' }}>Score</th>
                            <th style={{ padding: '0.8rem', textAlign: 'left' }}>Status</th>
                            <th style={{ padding: '0.8rem', textAlign: 'left' }}>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((entry, idx) => (
                            <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '0.8rem', color: 'var(--text-muted)' }}>
                                    {new Date(entry.date).toLocaleString()}
                                </td>
                                <td style={{ padding: '0.8rem' }}>{entry.filename}</td>
                                <td style={{ padding: '0.8rem' }}>
                                    {entry.score} / {entry.total} ({entry.percent}%)
                                </td>
                                <td style={{ padding: '0.8rem', color: entry.passed ? 'var(--success)' : 'var(--danger)' }}>
                                    {entry.passed ? 'PASS' : 'FAIL'}
                                </td>
                                <td style={{ padding: '0.8rem', fontFamily: 'monospace' }}>
                                    {entry.timeElapsed}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default HistoryView;
