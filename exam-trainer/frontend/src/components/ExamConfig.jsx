import { useState, useEffect } from 'react';

const ExamConfig = ({ filename, onStart, onBack }) => {
    const [count, setCount] = useState(10);
    const [shuffle, setShuffle] = useState(false);

    // Range mode state
    const [mode, setMode] = useState('random'); // 'random' or 'range'
    const [totalQuestions, setTotalQuestions] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3001/api/exams/${filename}`)
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
            <button onClick={onBack} style={{ marginBottom: '1rem' }}>&larr; Back</button>
            <h1>Configure Session</h1>
            <h2>{filename}</h2>
            {totalQuestions > 0 && <p style={{ color: 'var(--text-muted)' }}>Total Questions: {totalQuestions}</p>}

            <div className="config-tabs" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
                <button
                    className={mode === 'random' ? 'primary' : 'secondary'}
                    onClick={() => setMode('random')}>
                    Random Set
                </button>
                <button
                    className={mode === 'range' ? 'primary' : 'secondary'}
                    onClick={() => setMode('range')}>
                    Study Range
                </button>
            </div>

            {mode === 'random' ? (
                <div className="field-group">
                    <label>
                        Number of Questions:
                        <input
                            type="number"
                            value={count}
                            onChange={(e) => setCount(parseInt(e.target.value))}
                            min="1"
                            max={totalQuestions || 1000}
                        />
                    </label>
                </div>
            ) : (
                <div className="field-group">
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                        <label>
                            Start:
                            <input
                                type="number"
                                value={rangeStart}
                                onChange={(e) => setRangeStart(parseInt(e.target.value))}
                                min="1"
                                max={totalQuestions}
                                style={{ width: '80px' }}
                            />
                        </label>
                        <span>to</span>
                        <label>
                            End:
                            <input
                                type="number"
                                value={rangeEnd}
                                onChange={(e) => setRangeEnd(parseInt(e.target.value))}
                                min={rangeStart}
                                max={totalQuestions}
                                style={{ width: '80px' }}
                            />
                        </label>
                    </div>

                    <div className="presets" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                        }}>Next 20</button>
                    </div>
                </div>
            )}

            <div className="field-group">
                <label>
                    <input
                        type="checkbox"
                        checked={shuffle}
                        onChange={(e) => setShuffle(e.target.checked)}
                        style={{ width: 'auto', marginRight: '0.5rem' }}
                    />
                    Shuffle Questions
                </label>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <button className="primary" onClick={() => onStart({
                    count,
                    shuffle,
                    mode,
                    range: { start: rangeStart, end: rangeEnd }
                })}>
                    Start Exam
                </button>
            </div>
        </div>
    );
};

export default ExamConfig;
