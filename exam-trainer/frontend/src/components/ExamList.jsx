import { useState, useEffect } from 'react';

const ExamList = ({ onSelect }) => {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/api/exams')
            .then(res => res.json())
            .then(data => {
                setExams(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load exams", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading exams...</div>;

    return (
        <div className="exam-list glass-panel">
            <h1>Select an Exam</h1>
            <div className="grid">
                {exams.map(exam => (
                    <div
                        key={exam}
                        className="exam-card glass-panel"
                        onClick={() => onSelect(exam)}
                        style={{ cursor: 'pointer', margin: '1rem 0' }}
                    >
                        <h3>{exam}</h3>
                        <p>Practice mode</p>
                    </div>
                ))}
            </div>
            {exams.length === 0 && <p>No exams found in Exams folder.</p>}
        </div>
    );
};

export default ExamList;
