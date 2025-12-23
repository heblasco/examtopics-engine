import { useState } from 'react';
import './App.css';
import ExamList from './components/ExamList';
import ExamConfig from './components/ExamConfig';
import ExamRunner from './components/ExamRunner';
import HistoryView from './components/HistoryView';

function App() {
  const [view, setView] = useState('list'); // 'list', 'config', 'runner', 'history'
  const [selectedExam, setSelectedExam] = useState(null);
  const [examConfig, setExamConfig] = useState({ count: 10, shuffle: false });
  const [customQuestions, setCustomQuestions] = useState(null); // For retry mode

  const handleSelectExam = (filename) => {
    setSelectedExam(filename);
    setCustomQuestions(null);
    setView('config');
  };

  const handleStartExam = (config) => {
    setExamConfig(config);
    setView('runner');
  };

  const handleRetry = (missedQuestions) => {
    setCustomQuestions(missedQuestions);
    setExamConfig({ count: missedQuestions.length, shuffle: false }); // Force no shuffle for retry usually? or maybe keep it.
    setView('runner');
  };

  const handleBack = () => {
    if (view === 'runner') setView('config');
    else if (view === 'config') setView('list');
    else if (view === 'history') setView('list');
  };

  return (
    <div className="app-container">
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
        {view === 'list' && (
          <button onClick={() => setView('history')}>View History</button>
        )}
        {view === 'history' && (
          <button onClick={() => setView('list')}>Back to Home</button>
        )}
      </div>

      {view === 'list' && (
        <ExamList onSelect={handleSelectExam} />
      )}
      {view === 'history' && (
        <HistoryView />
      )}
      {view === 'config' && selectedExam && (
        <ExamConfig
          filename={selectedExam}
          onStart={handleStartExam}
          onBack={handleBack}
        />
      )}
      {view === 'runner' && selectedExam && (
        <ExamRunner
          filename={selectedExam}
          config={examConfig}
          initialQuestions={customQuestions}
          onRetry={handleRetry}
          onExit={() => setView('list')} // Exit to home
        />
      )}
    </div>
  );
}

export default App;
