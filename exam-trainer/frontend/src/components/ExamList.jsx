import { useState, useEffect } from 'react';
import { BookOpen, FileText, Loader2 } from 'lucide-react';
import { API_URL } from '../config';

const ExamList = ({ onSelect }) => {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/api/exams`)
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

    if (loading) return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Loader2 className="spin" size={48} />
            <p style={{ marginTop: '1rem' }}>Loading exams...</p>
        </div>
    );

    return (
        <div className="exam-list glass-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <BookOpen size={32} />
                <h1>Select an Exam</h1>
            </div>

            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {exams.map(exam => (
                    <div
                        key={exam}
                        className="exam-card glass-panel interacted"
                        onClick={() => onSelect(exam)}
                        style={{
                            cursor: 'pointer',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            gap: '1rem',
                            transition: 'transform 0.2s, background 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <FileText size={48} style={{ opacity: 0.8 }} />
                        <div>
                            <h3 style={{ margin: '0 0 0.5rem 0' }}>{exam}</h3>
                            <p style={{ fontSize: '0.9em', opacity: 0.7, margin: 0 }}>Practice mode</p>
                        </div>
                    </div>
                ))}
            </div>
            {exams.length === 0 && <p>No exams found in Exams folder.</p>}
        </div>
    );
};

export default ExamList;
