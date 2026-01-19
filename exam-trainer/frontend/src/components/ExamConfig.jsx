import { useState, useEffect } from 'react';
import { ArrowLeft, Play, Settings, Shuffle, ListOrdered, Hash } from 'lucide-react';
import { API_URL } from '../config';

const ExamConfig = ({ filename, onStart, onBack }) => {
    const [count, setCount] = useState(10);
    const [shuffle, setShuffle] = useState(false);

    // Range mode state
    const [mode, setMode] = useState('random'); // 'random' or 'range'
    const [totalQuestions, setTotalQuestions] = useState(0);

    useEffect(() => {
        fetch(`${API_URL}/api/exams/${filename}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.questions) {
                    setTotalQuestions(data.questions.length);
                }
            })
            .catch(console.error);
    }, [filename]);

    const [rangeStart, setRangeStart] = useState(1);
    const [rangeEnd, setRangeEnd] = useState(20);

    // Fetch exam details to get total questions



    return (
        <div className="exam-config glass-panel">
            <button onClick={onBack} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ArrowLeft size={16} /> Back
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Settings size={32} />
                <h1 style={{ margin: 0 }}>Configure Session</h1>
            </div>
            <h2 style={{ opacity: 0.8, fontWeight: 'normal', marginBottom: '2rem' }}>{filename}</h2>

            {totalQuestions > 0 && (
                <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '2rem',
                    color: 'var(--text-muted)'
                }}>
                    <Hash size={16} />
                    <span>Total Questions: {totalQuestions}</span>
                </div>
            )}

            <div className="config-tabs" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
                <button
                    className={mode === 'random' ? 'primary' : 'secondary'}
                    onClick={() => setMode('random')}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Shuffle size={18} />
                    Random Set
                </button>
                <button
                    className={mode === 'range' ? 'primary' : 'secondary'}
                    onClick={() => setMode('range')}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ListOrdered size={18} />
                    Study Range
                </button>
            </div>

            {mode === 'random' ? (
                <div className="field-group card-styled">
                    <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <span>Number of Questions</span>
                        <input
                            type="number"
                            value={count}
                            onChange={(e) => setCount(parseInt(e.target.value))}
                            min="1"
                            max={totalQuestions || 1000}
                            style={{ fontSize: '1.5rem', width: '120px', textAlign: 'center', padding: '0.5rem' }}
                        />
                    </label>
                </div>
            ) : (
                <div className="field-group card-styled">
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            Start
                            <input
                                type="number"
                                value={rangeStart}
                                onChange={(e) => setRangeStart(parseInt(e.target.value))}
                                min="1"
                                max={totalQuestions}
                                style={{ width: '80px', textAlign: 'center' }}
                            />
                        </label>
                        <span style={{ marginTop: '1.5rem', opacity: 0.5 }}>&mdash;</span>
                        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            End
                            <input
                                type="number"
                                value={rangeEnd}
                                onChange={(e) => setRangeEnd(parseInt(e.target.value))}
                                min={rangeStart}
                                max={totalQuestions}
                                style={{ width: '80px', textAlign: 'center' }}
                            />
                        </label>
                    </div>

                    <div className="presets" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button className="small" onClick={() => { setRangeStart(1); setRangeEnd(20); }}>1-20</button>
                        <button className="small" onClick={() => { setRangeStart(21); setRangeEnd(40); }}>21-40</button>
                        <button className="small" onClick={() => { setRangeStart(1); setRangeEnd(40); }}>1-40</button>
                        <button className="small" onClick={() => {
                            const nextStart = rangeEnd + 1;
                            const nextEnd = Math.min(nextStart + 19, totalQuestions);
                            if (nextStart <= totalQuestions) {
                                setRangeStart(nextStart);
                                setRangeEnd(nextEnd);
                            }
                        }}>Next 20 &rarr;</button>
                    </div>
                </div>
            )}

            <div className="field-group" style={{ marginTop: '2rem', justifyContent: 'center', display: 'flex' }}>
                <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', userSelect: 'none' }}>
                    <input
                        type="checkbox"
                        checked={shuffle}
                        onChange={(e) => setShuffle(e.target.checked)}
                        style={{ width: 'auto' }}
                    />
                    Shuffle Questions
                </label>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <button className="primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => onStart({
                    count,
                    shuffle,
                    mode,
                    range: { start: rangeStart, end: rangeEnd }
                })}>
                    <Play size={20} fill="currentColor" />
                    Start Exam
                </button>
            </div>
        </div>
    );
};

export default ExamConfig;
