import { useState, useEffect } from 'react';
import QuestionEditor from './QuestionEditor';

const ExamRunner = ({ filename, config, initialQuestions, onRetry, onExit }) => {
    const [allQuestions, setAllQuestions] = useState([]);
    const [sessionQuestions, setSessionQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [editingQuestion, setEditingQuestion] = useState(null);

    const [userAnswers, setUserAnswers] = useState({});
    const [showAnswer, setShowAnswer] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [savedResult, setSavedResult] = useState(false);

    useEffect(() => {
        if (isFinished || loading) return;
        const interval = setInterval(() => {
            setTimeElapsed(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [isFinished, loading]);

    useEffect(() => {
        // If retry mode, use provided questions immediately
        if (initialQuestions && initialQuestions.length > 0) {
            setSessionQuestions(initialQuestions);
            // We still fetch allQuestions to allow editing/syncing if needed, 
            // but for now, let's just use what we have or fetch silently.
            // Actually, to support editing, we should fetch the file.
            // But let's prioritize the session.
            setLoading(false);
            // Background fetch to keep 'allQuestions' populated for editing logic if needed
            fetch(`http://localhost:3001/api/exams/${filename}`)
                .then(res => res.json())
                .then(data => setAllQuestions(data.questions))
                .catch(console.error);
            return;
        }

        fetch(`http://localhost:3001/api/exams/${filename}`)
            .then(res => res.json())
            .then(data => {
                const raw = data.questions;
                setAllQuestions(raw);

                let processed = [...raw];

                if (config.mode === 'range' && config.range) {
                    // Range mode: Filter by index range first
                    const start = Math.max(0, config.range.start - 1);
                    const end = config.range.end;
                    processed = processed.slice(start, end);

                    // Then shuffle if requested (shuffle questions WITHIN that range)
                    if (config.shuffle) {
                        processed.sort(() => Math.random() - 0.5);
                    }
                } else {
                    // Random mode: Shuffle first (if requested), then take count
                    if (config.shuffle) {
                        processed.sort(() => Math.random() - 0.5);
                    }

                    const count = config.count ? parseInt(config.count, 10) : 0;
                    if (count > 0 && count < processed.length) {
                        processed = processed.slice(0, count);
                    }
                }
                setSessionQuestions(processed);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load exam", err);
                setLoading(false);
            });
    }, [filename, config, initialQuestions]);

    const handleUpdateQuestion = async (updatedQ) => {
        const newAll = allQuestions.map(q =>
            (q.id === updatedQ.id && q.topic === updatedQ.topic) ? updatedQ : q
        );
        // Also update session questions so user sees changes immediately
        const newSession = sessionQuestions.map(q =>
            (q.id === updatedQ.id && q.topic === updatedQ.topic) ? updatedQ : q
        );
        setAllQuestions(newAll);
        setSessionQuestions(newSession);
        setEditingQuestion(null);

        try {
            await fetch(`http://localhost:3001/api/exams/${filename}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ questions: newAll })
            });
        } catch (err) {
            console.error("Failed to save", err);
            alert('Failed to save changes.');
        }
    };

    const getQuestionKey = (q) => `${q.topic}-${q.id}`;

    const handleOptionSelect = (q, optionText) => {
        if (isFinished) return;
        const match = optionText.match(/^([A-Z])\./);
        const letter = match ? match[1] : null;

        setUserAnswers(prev => ({
            ...prev,
            [getQuestionKey(q)]: letter
        }));
    };

    const calculateScore = () => {
        let correctCount = 0;
        sessionQuestions.forEach(q => {
            const userAns = userAnswers[getQuestionKey(q)];
            if (userAns === q.answer) {
                correctCount++;
            }
        });
        return correctCount;
    };

    const formatTime = (s) => {
        const mins = Math.floor(s / 60);
        const secs = s % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Finish & Save Logic
    useEffect(() => {
        if (isFinished && !savedResult) {
            const score = calculateScore();
            const total = sessionQuestions.length;
            const percent = total > 0 ? Math.round((score / total) * 100) : 0;
            const passed = percent >= 70;

            const resultEntry = {
                date: new Date().toISOString(),
                filename,
                score,
                total,
                percent,
                passed,
                timeElapsed: formatTime(timeElapsed)
            };

            const oldHistory = JSON.parse(localStorage.getItem('exam_history') || '[]');
            localStorage.setItem('exam_history', JSON.stringify([...oldHistory, resultEntry]));
            setSavedResult(true);
        }
    }, [isFinished, savedResult, sessionQuestions, filename, timeElapsed, userAnswers]);


    if (loading) return <div>Loading questions...</div>;
    if (sessionQuestions.length === 0) return <div>No questions found.</div>;

    if (isFinished) {
        const score = calculateScore();
        const total = sessionQuestions.length;
        const percent = total > 0 ? Math.round((score / total) * 100) : 0;
        const passed = percent >= 70;

        const wrongQuestions = sessionQuestions.filter(q => {
            const userAns = userAnswers[getQuestionKey(q)];
            return userAns !== q.answer;
        });

        return (
            <div className="exam-results glass-panel">
                <h1 style={{ color: passed ? 'var(--success)' : 'var(--danger)' }}>
                    {passed ? 'Passed!' : 'Failed'}
                </h1>
                <h2>Score: {score} / {total} ({percent}%)</h2>
                <h3>Time: {formatTime(timeElapsed)}</h3>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                    <button onClick={onExit}>Back to Home</button>
                    {wrongQuestions.length > 0 && (
                        <button
                            className="secondary"
                            onClick={() => onRetry && onRetry(wrongQuestions)}
                            title="Start a new exam with only the questions you missed"
                        >
                            Retry Missed ({wrongQuestions.length})
                        </button>
                    )}
                </div>

                <div style={{ textAlign: 'left', marginTop: '2rem' }}>
                    <h3>Review</h3>
                    {sessionQuestions.map((q, idx) => {
                        const userAns = userAnswers[getQuestionKey(q)];
                        const isCorrect = userAns === q.answer;
                        return (
                            <div key={idx} style={{
                                padding: '1rem',
                                margin: '1rem 0',
                                border: `1px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`,
                                borderRadius: '8px',
                                background: 'rgba(255,255,255,0.05)'
                            }}>
                                <div><strong>Q{idx + 1}:</strong> {q.questionText}</div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <span style={{ color: isCorrect ? 'var(--success)' : 'var(--danger)' }}>
                                        Your Answer: {userAns || 'None'}
                                    </span>
                                    {!isCorrect && <span style={{ marginLeft: '1rem', color: 'var(--success)' }}>
                                        Correct: {q.answer}
                                    </span>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    const currentQ = sessionQuestions[currentIndex];
    const currentKey = getQuestionKey(currentQ);
    const selectedAnswer = userAnswers[currentKey];

    return (
        <div className="exam-runner">
            {editingQuestion && (
                <QuestionEditor
                    question={editingQuestion}
                    onSave={handleUpdateQuestion}
                    onCancel={() => setEditingQuestion(null)}
                />
            )}

            <div className="header glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span>Question {currentIndex + 1} of {sessionQuestions.length}</span>
                <span style={{ fontFamily: 'monospace', fontSize: '1.2em' }}>{formatTime(timeElapsed)}</span>
                <button onClick={onExit}>Exit</button>
            </div>

            <div className="question-card glass-panel">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Topic {currentQ.topic} | Question #{currentQ.id}</span>
                    <button onClick={() => setEditingQuestion(currentQ)} style={{ fontSize: '0.8em', padding: '0.3em 0.8em' }}>Edit</button>
                </div>

                <p style={{ fontSize: '1.2em', whiteSpace: 'pre-wrap', textAlign: 'left', margin: '1.5rem 0' }}>
                    {currentQ.questionText}
                </p>

                <div className="options" style={{ textAlign: 'left' }}>
                    {currentQ.options.map((opt, idx) => {
                        const letter = opt.match(/^([A-Z])\./)?.[1];
                        const isSelected = selectedAnswer === letter;
                        const isCorrectAnswer = letter === currentQ.answer;

                        let borderColor = 'transparent';
                        let bgColor = 'rgba(255,255,255,0.05)';

                        if (isSelected) {
                            borderColor = 'var(--primary-color)';
                            bgColor = 'rgba(100, 108, 255, 0.1)';
                        }
                        if (showAnswer && isCorrectAnswer) {
                            borderColor = 'var(--success)';
                        }

                        return (
                            <div
                                key={idx}
                                className="option-item"
                                onClick={() => handleOptionSelect(currentQ, opt)}
                                style={{
                                    padding: '1rem',
                                    margin: '0.5rem 0',
                                    background: bgColor,
                                    borderRadius: '8px',
                                    border: `2px solid ${borderColor}`,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {opt}
                            </div>
                        );
                    })}
                </div>

                <div className="actions" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button onClick={() => setShowAnswer(!showAnswer)}>
                        {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
                    </button>

                    {showAnswer && (
                        <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
                            Correct: <span style={{ color: 'var(--success)' }}>{currentQ.answer}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="navigation" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button disabled={currentIndex === 0} onClick={() => { setCurrentIndex(c => c - 1); setShowAnswer(false); }}>
                    Previous
                </button>
                <button disabled={currentIndex === sessionQuestions.length - 1} onClick={() => { setCurrentIndex(c => c + 1); setShowAnswer(false); }}>
                    Next
                </button>
                <button className="primary" style={{ backgroundColor: 'var(--success)', borderColor: 'var(--success)', marginLeft: 'auto' }} onClick={() => {
                    if (confirm('Finish exam and see results?')) setIsFinished(true);
                }}>
                    Finish Exam
                </button>
            </div>
        </div>
    );
};

export default ExamRunner;
