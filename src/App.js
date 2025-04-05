// src/App.js
import React, { useState, useEffect } from 'react';
import { quizData, DONT_KNOW_INDEX } from './quizData';
import './App.css'; // We'll add styles here later

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState(null); // No topic selected initially
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Store answers like: { 'svm-q1': 2, 'logr-q2': 4 } (questionId: selectedOptionIndex)
  const [userAnswers, setUserAnswers] = useState({});
  const [mode, setMode] = useState('quiz'); // 'quiz', 'reveal', 'mistakes'
  const [mistakesTopicFilter, setMistakesTopicFilter] = useState('all'); // 'all' or topic id
  const [includeDontKnow, setIncludeDontKnow] = useState(true); // For mistakes view

  const selectedTopic = quizData.find(topic => topic.id === selectedTopicId);
  const currentQuestion = selectedTopic?.questions[currentQuestionIndex];

  // Reset question index when topic changes
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setMode('quiz'); // Reset mode when topic changes
  }, [selectedTopicId]);

  const handleTopicSelect = (topicId) => {
    setSelectedTopicId(topicId);
  };

  const handleAnswerSelect = (questionId, selectedOptionIndex) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: selectedOptionIndex,
    }));
    // Optional: Automatically move to the next question after answering
    // handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (selectedTopic && currentQuestionIndex < selectedTopic.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleJumpToQuestion = (index) => {
    if (selectedTopic && index >= 0 && index < selectedTopic.questions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const getMistakes = () => {
    let mistakes = [];
    quizData.forEach(topic => {
      if (mistakesTopicFilter === 'all' || mistakesTopicFilter === topic.id) {
        let topicMistakes = [];
        topic.questions.forEach((q, index) => {
          const userAnswerIndex = userAnswers[q.id];
          const isAttempted = userAnswerIndex !== undefined;
          const isDontKnow = userAnswerIndex === DONT_KNOW_INDEX;
          const isCorrect = userAnswerIndex === q.correctOptionIndex;

          if (isAttempted && !isCorrect && (!isDontKnow || includeDontKnow)) {
             topicMistakes.push({
               ...q,
               userAnswerIndex: userAnswerIndex,
             });
          }
        });
        if (topicMistakes.length > 0) {
          mistakes.push({ topic: topic.topic, questions: topicMistakes });
        }
      }
    });
    return mistakes;
  };

  const formatMistakesForCopy = (mistakes) => {
    let text = "Mistakes Summary:\n\n";
    mistakes.forEach(topicMistake => {
      text += `Topic: ${topicMistake.topic}\n`;
      text += "-----------------------------\n";
      topicMistake.questions.forEach(q => {
        text += `Q: ${q.text}\n`;
        q.options.forEach((opt, index) => {
          text += `  ${String.fromCharCode(65 + index)}) ${opt}`;
          if (index === q.userAnswerIndex) {
            text += " (User chose this)";
          }
          text += "\n";
        });
        text += `Correct Answer: ${String.fromCharCode(65 + q.correctOptionIndex)}) ${q.options[q.correctOptionIndex]}\n\n`;
      });
      text += "\n"; // Extra newline between topics
    });
    return text;
  };

  const copyMistakesToClipboard = () => {
      const mistakes = getMistakes();
      const formattedText = formatMistakesForCopy(mistakes);
      navigator.clipboard.writeText(formattedText)
          .then(() => alert('Mistakes copied to clipboard!'))
          .catch(err => console.error('Failed to copy mistakes: ', err));
  };


  return (
    <div className="App">
      <h1>ML_quiz</h1>
      <div className="layout">
        {/* Topic Sidebar/List */}
        <div className="topic-list">
          <h2>Topics</h2>
          <ul>
            {quizData.map(topic => (
              <li
                key={topic.id}
                onClick={() => handleTopicSelect(topic.id)}
                className={selectedTopicId === topic.id ? 'selected' : ''}
              >
                {topic.topic} ({topic.questions.length})
              </li>
            ))}
          </ul>
           {/* Mode Buttons */}
           <div className="mode-controls">
             <button onClick={() => setMode('quiz')} disabled={mode === 'quiz' || !selectedTopicId}>Quiz Mode</button>
             <button onClick={() => setMode('reveal')} disabled={mode === 'reveal' || !selectedTopicId}>Reveal Answers</button>
             <button onClick={() => setMode('mistakes')} disabled={mode === 'mistakes'}>View Mistakes</button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="main-content">
          {!selectedTopicId && mode !== 'mistakes' && (
            <p>Please select a topic to start the quiz.</p>
          )}

          {/* Quiz Mode */}
          {selectedTopic && mode === 'quiz' && currentQuestion && (
            <div className="quiz-area">
              <h3>{selectedTopic.topic} - Question {currentQuestionIndex + 1} of {selectedTopic.questions.length}</h3>
              <p className="question-text">[{currentQuestion.difficulty}] {currentQuestion.text}</p>
              <ul className="options-list">
                {currentQuestion.options.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name={currentQuestion.id}
                        value={index}
                        checked={userAnswers[currentQuestion.id] === index}
                        onChange={() => handleAnswerSelect(currentQuestion.id, index)}
                      />
                      {String.fromCharCode(65 + index)}) {option}
                    </label>
                  </li>
                ))}
              </ul>
              <div className="navigation-controls">
                 <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
                   Previous
                 </button>
                 {/* Question Jump Navigation */}
                 <div className="question-jump">
                   {selectedTopic.questions.map((q, index) => (
                      <button
                         key={q.id}
                         onClick={() => handleJumpToQuestion(index)}
                         className={currentQuestionIndex === index ? 'current-q' : ''}
                         title={`Jump to Question ${index + 1}`}
                       >
                         {index + 1}
                       </button>
                   ))}
                 </div>
                 <button onClick={handleNextQuestion} disabled={currentQuestionIndex === selectedTopic.questions.length - 1}>
                   Next
                 </button>
              </div>
            </div>
          )}

          {/* Reveal Answers Mode */}
          {selectedTopic && mode === 'reveal' && (
             <div className="reveal-area">
                <h3>{selectedTopic.topic} - Answers Revealed</h3>
                {selectedTopic.questions.map((q, index) => {
                   const userAnswerIndex = userAnswers[q.id];
                   const isAttempted = userAnswerIndex !== undefined;
                   const isDontKnow = userAnswerIndex === DONT_KNOW_INDEX;

                   // Only show answers for attempted questions, excluding "I don't know"
                   if (!isAttempted || isDontKnow) {
                       return null; // Skip unattempted or "I don't know" questions
                   }

                   return (
                     <div key={q.id} className="revealed-question">
                       <p><strong>Q{index + 1}: [{q.difficulty}] {q.text}</strong></p>
                       <ul className="options-list revealed">
                         {q.options.map((option, optIndex) => (
                           <li
                             key={optIndex}
                             className={`
                               ${optIndex === q.correctOptionIndex ? 'correct' : ''}
                               ${optIndex === userAnswerIndex && optIndex !== q.correctOptionIndex ? 'incorrect' : ''}
                             `}
                           >
                             {String.fromCharCode(65 + optIndex)}) {option}
                             {optIndex === userAnswerIndex ? ' (Your Answer)' : ''}
                             {optIndex === q.correctOptionIndex ? ' (Correct Answer)' : ''}
                           </li>
                         ))}
                       </ul>
                     </div>
                   );
                 })}
                 {Object.keys(userAnswers).filter(qid => selectedTopic.questions.some(q => q.id === qid && userAnswers[qid] !== DONT_KNOW_INDEX)).length === 0 && (
                    <p>No questions attempted (excluding "I don't know") in this topic yet.</p>
                 )}
             </div>
           )}


          {/* View Mistakes Mode */}
          {mode === 'mistakes' && (
             <div className="mistakes-area">
                <h2>Mistakes Review</h2>
                <div className="mistakes-filters">
                    <label>Filter by Topic: </label>
                    <select value={mistakesTopicFilter} onChange={(e) => setMistakesTopicFilter(e.target.value)}>
                        <option value="all">All Topics</option>
                        {quizData.map(topic => (
                            <option key={topic.id} value={topic.id}>{topic.topic}</option>
                        ))}
                    </select>
                    <label>
                        <input
                            type="checkbox"
                            checked={includeDontKnow}
                            onChange={(e) => setIncludeDontKnow(e.target.checked)}
                        />
                        Include "I don't know" answers
                    </label>
                </div>

                {getMistakes().length > 0 ? (
                    <>
                        <button onClick={copyMistakesToClipboard} className="copy-button">Copy Mistakes Summary</button>
                        {getMistakes().map(topicMistake => (
                            <div key={topicMistake.topic} className="mistake-topic-section">
                                <h3>{topicMistake.topic}</h3>
                                {topicMistake.questions.map(q => (
                                    <div key={q.id} className="mistake-question">
                                        <p><strong>Q: [{q.difficulty}] {q.text}</strong></p>
                                        <ul className="options-list revealed">
                                            {q.options.map((opt, index) => (
                                                <li
                                                    key={index}
                                                    className={`
                                                        ${index === q.correctOptionIndex ? 'correct' : ''}
                                                        ${index === q.userAnswerIndex ? 'incorrect' : ''}
                                                     `}
                                                >
                                                    {String.fromCharCode(65 + index)}) {opt}
                                                    {index === q.userAnswerIndex ? ' (User chose this)' : ''}
                                                </li>
                                            ))}
                                            <li className="correct-answer-info">
                                                Correct Answer: {String.fromCharCode(65 + q.correctOptionIndex)}) {q.options[q.correctOptionIndex]}
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No mistakes found based on the current filter settings, or no questions attempted yet.</p>
                )}
             </div>
           )}

        </div> {/* End main-content */}
      </div> {/* End layout */}
    </div> // End App
  );
}

export default App;