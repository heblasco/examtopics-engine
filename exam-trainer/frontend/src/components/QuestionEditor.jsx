import { useState } from 'react';

const QuestionEditor = ({ question, onSave, onCancel }) => {
    const [text, setText] = useState(question.questionText);
    const [answer, setAnswer] = useState(question.answer);
    // Flatten options to a single string for easier editing, or keep array
    // Let's use array inputs
    const [options, setOptions] = useState([...question.options]);

    const handleOptionChange = (idx, val) => {
        const newOpts = [...options];
        newOpts[idx] = val;
        setOptions(newOpts);
    };

    const handleSave = () => {
        onSave({
            ...question,
            questionText: text,
            answer: answer,
            options: options
        });
    };

    return (
        <div className="editor-overlay" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.8)', zIndex: 1000,
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <div className="glass-panel" style={{ width: '800px', maxHeight: '90vh', overflowY: 'auto' }}>
                <h2>Edit Question</h2>

                <div className="field-group">
                    <label>Question Text:</label>
                    <textarea
                        value={text}
                        onChange={e => setText(e.target.value)}
                        style={{ width: '100%', minHeight: '100px', background: 'rgba(0,0,0,0.3)', color: 'white', border: '1px solid #444' }}
                    />
                </div>

                <div className="field-group">
                    <label>Correct Answer (A, B, C...):</label>
                    <input
                        type="text"
                        value={answer}
                        onChange={e => setAnswer(e.target.value)}
                        style={{ width: '100px' }}
                    />
                </div>

                <div className="field-group">
                    <label>Options:</label>
                    {options.map((opt, idx) => (
                        <div key={idx} style={{ marginBottom: '0.5rem' }}>
                            <input
                                type="text"
                                value={opt}
                                onChange={e => handleOptionChange(idx, e.target.value)}
                                style={{ width: '100%' }}
                            />
                        </div>
                    ))}
                </div>

                <div className="buttons" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                    <button onClick={onCancel}>Cancel</button>
                    <button className="primary" onClick={handleSave} style={{ backgroundColor: 'var(--primary-color)' }}>Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default QuestionEditor;
