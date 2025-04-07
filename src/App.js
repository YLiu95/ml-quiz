// src/App.js
import React, { useState, useEffect, useMemo, useRef } from 'react';
// Import the helper function and updated data structure
import { quizData, DONT_KNOW_INDEX, arraysHaveSameElements, persistQuizData } from './quizData';
import './App.css';

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

const LOCAL_STORAGE_KEY = 'mlQuizUserAnswers_v2'; // Use a new key if format changed significantly
const LOCAL_STORAGE_COLLAPSED_KEY = 'mlQuizCollapsedTopics_v1';
const LOCAL_STORAGE_SELECTION_KEY = 'mlQuizLastSelection_v1';

function App() {
  // --- State Initialization ---
  const [selectedTopicId, setSelectedTopicId] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_SELECTION_KEY);
    try {
      const parsed = saved ? JSON.parse(saved) : {};
      return parsed.selectedTopicId || null;
    } catch (e) {
      return null;
    }
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_SELECTION_KEY);
    try {
      const parsed = saved ? JSON.parse(saved) : {};
      return parsed.currentQuestionIndex || 0;
    } catch (e) {
      return 0;
    }
  });
  // userAnswers will store: { questionId: [selectedIndex1, selectedIndex2, ...] }
  const [userAnswers, setUserAnswers] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    // Add basic validation in case stored data is not an object
    try {
        const parsed = saved ? JSON.parse(saved) : {};
        return typeof parsed === 'object' && parsed !== null ? parsed : {};
    } catch (e) {
        console.error("Failed to parse saved answers:", e);
        return {};
    }
  });
  const [mode, setMode] = useState('quiz');
  const [mistakesTopicFilter, setMistakesTopicFilter] = useState('all');
  const [includeDontKnow, setIncludeDontKnow] = useState(true);
  const [timeSpentOnQuestion, setTimeSpentOnQuestion] = useState(0);
  const timerIntervalRef = useRef(null);
  // NEW: State to track collapsed topics (false: expanded, true: collapsed)
  const [collapsedTopics, setCollapsedTopics] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_COLLAPSED_KEY);
    try {
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        return {};
    }
  });
  // NEW: state to handle current quiz data
  const [quizDataState, setQuizDataState] = useState(quizData);

  const selectedTopic = quizDataState.find(topic => topic.id === selectedTopicId);
  const currentQuestion = selectedTopic?.questions[currentQuestionIndex];

  // --- Effects ---

  // Save userAnswers (now containing arrays) to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userAnswers));
  }, [userAnswers]);

  // NEW: Persist collapsedTopics state to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_COLLAPSED_KEY, JSON.stringify(collapsedTopics));
  }, [collapsedTopics]);

  // NEW: Persist last selection to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_SELECTION_KEY, JSON.stringify({ selectedTopicId, currentQuestionIndex }));
  }, [selectedTopicId, currentQuestionIndex]);

  // Timer Logic (no changes needed)
  useEffect(() => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = null;
    if (mode === 'quiz' && currentQuestion) {
      setTimeSpentOnQuestion(0);
      timerIntervalRef.current = setInterval(() => {
        setTimeSpentOnQuestion(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => { if (timerIntervalRef.current) clearInterval(timerIntervalRef.current); };
  }, [mode, currentQuestionIndex, selectedTopicId, currentQuestion]);

  // --- Calculations ---
  const progressStats = useMemo(() => {
    const totalOverall = quizDataState.reduce((sum, topic) => sum + topic.questions.length, 0);
    // Finished if the answer array exists and is not empty
    const finishedOverall = Object.keys(userAnswers).filter(qid => Array.isArray(userAnswers[qid]) && userAnswers[qid].length > 0).length;

    let finishedInTopic = 0;
    let totalInTopic = 0;
    if (selectedTopic) {
      totalInTopic = selectedTopic.questions.length;
      selectedTopic.questions.forEach(q => {
        if (Array.isArray(userAnswers[q.id]) && userAnswers[q.id].length > 0) {
          finishedInTopic++;
        }
      });
    }
    const percentageOverall = totalOverall > 0 ? Math.round((finishedOverall / totalOverall) * 100) : 0;
    const percentageInTopic = totalInTopic > 0 ? Math.round((finishedInTopic / totalInTopic) * 100) : 0;
    return { finishedOverall, totalOverall, percentageOverall, finishedInTopic, totalInTopic, percentageInTopic };
  }, [userAnswers, selectedTopic, quizDataState]);

  // --- Event Handlers ---

  const handleClearSavedAnswers = () => {
    if (window.confirm("Are you sure you want to clear all your answers and restart?")) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        setUserAnswers({});
        setSelectedTopicId(null);
        setCurrentQuestionIndex(0);
        setMode('quiz');
    }
  };

  const handleTopicSelect = (topicId) => {
    if (topicId !== selectedTopicId) {
      setSelectedTopicId(topicId);
      setCurrentQuestionIndex(0);
      setMode('quiz');
    }
  };

  // *** Handler for Checkboxes (Multiple Answers) ***
  const handleToggleAnswer = (questionId, optionIndex) => {
    setUserAnswers(prevAnswers => {
      const currentSelection = prevAnswers[questionId] || []; // Get current array or empty
      let newSelection;

      if (optionIndex === DONT_KNOW_INDEX) {
        // If "I don't know" is selected, it's the only selection
        newSelection = currentSelection.includes(DONT_KNOW_INDEX) ? [] : [DONT_KNOW_INDEX];
      } else {
        // If another option is selected
        if (currentSelection.includes(optionIndex)) {
          // Deselect: remove the option, ensure "I don't know" is also removed
          newSelection = currentSelection.filter(idx => idx !== optionIndex && idx !== DONT_KNOW_INDEX);
        } else {
          // Select: add the option, ensure "I don't know" is removed
          newSelection = [...currentSelection.filter(idx => idx !== DONT_KNOW_INDEX), optionIndex];
        }
      }

      // Sort selection for consistent comparison later (optional but good practice)
      newSelection.sort((a, b) => a - b);

      return {
        ...prevAnswers,
        [questionId]: newSelection,
      };
    });
  };

  // NEW: Handler to collapse all topics
  const handleCollapseAll = () => {
    const newCollapsed = {};
    quizDataState.forEach(topic => {
        newCollapsed[topic.id] = true;
    });
    setCollapsedTopics(newCollapsed);
  };

  // NEW: Handler to expand all topics
  const handleExpandAll = () => {
    const newCollapsed = {};
    quizDataState.forEach(topic => {
        newCollapsed[topic.id] = false;
    });
    setCollapsedTopics(newCollapsed);
  };

  // NEW: Handler to toggle collapsed state of a topic
  const handleToggleTopicCollapse = (topicId) => {
    setCollapsedTopics(prev => ({ ...prev, [topicId]: !prev[topicId] }));
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

  const handleJumpToQuestion = (topicId, questionIndex) => {
    if (topicId !== selectedTopicId) {
      setSelectedTopicId(topicId);
      setCurrentQuestionIndex(questionIndex);
      setMode('quiz');
    } else if (questionIndex !== currentQuestionIndex) {
      setCurrentQuestionIndex(questionIndex);
    }
  };

  // NEW: Handler to add quizzes from pasted JSON
  const handleAddQuizzes = () => {
    const input = window.prompt("Paste JSON for new quiz questions:");
    if (!input) return;
    try {
      const newQuiz = JSON.parse(input);
      // Minimal format check: must have id, topic, and questions array
      if (!newQuiz.id || !newQuiz.topic || !Array.isArray(newQuiz.questions)) {
        throw new Error("Invalid quiz format. Must include id, topic and a questions array.");
      }
      // Validate each question for required fields
      for (const question of newQuiz.questions) {
        if (!question.id ||
            !question.difficulty ||
            !question.text ||
            !Array.isArray(question.options) ||
            !Array.isArray(question.correctOptionIndices) ||
            !question.explanation
        ) {
          throw new Error("One or more questions are missing required fields.");
        }
      }
      // Merge newQuiz into quizDataState:
      setQuizDataState(prev => {
        const topicIndex = prev.findIndex(topic => topic.id === newQuiz.id);
        if (topicIndex >= 0) {
          // Existing topic: append the new questions
          const updatedTopic = {
            ...prev[topicIndex],
            questions: [...prev[topicIndex].questions, ...newQuiz.questions],
          };
          const updated = [...prev];
          updated[topicIndex] = updatedTopic;
          return updated;
        } else {
          // New topic: add new quiz at the top
          return [newQuiz, ...prev];
        }
      });
      // Persist the new quiz permanently by updating quizData.js.
      persistQuizData(newQuiz);
    } catch (e) {
      window.alert("Error adding quiz questions: " + e.message);
    }
  };

  // --- Mistakes Logic (Using array comparison) ---
   const getMistakes = () => {
    let mistakes = [];
    quizDataState.forEach(topic => {
      if (mistakesTopicFilter === 'all' || mistakesTopicFilter === topic.id) {
        let topicMistakes = [];
        topic.questions.forEach((q) => {
          const userAnswerIndices = userAnswers[q.id] || []; // User selection array
          const isAttempted = userAnswerIndices.length > 0;
          // Remove extra filter so that if answered (even with "I don't know"), we check correctness
          if (!isAttempted) {
              return; // Skip if not attempted
          }
          // Filter out "I don't know" for correctness comparison
          const userAnswerToCheck = userAnswerIndices.filter(idx => idx !== DONT_KNOW_INDEX);
          const isCorrect = arraysHaveSameElements(userAnswerToCheck, q.correctOptionIndices);
          if (isAttempted && !isCorrect) {
             topicMistakes.push({
               ...q,
               userAnswerIndices: userAnswerIndices,
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

  // Format mistakes for copy (handles arrays and explanation)
  const formatMistakesForCopy = (mistakes) => {
    let text = "Mistakes Summary:\n\n";
    mistakes.forEach(topicMistake => {
      text += `Topic: ${topicMistake.topic}\n`;
      text += "-----------------------------\n";
      topicMistake.questions.forEach(q => {
        text += `Q: ${q.text}\n`;
        q.options.forEach((opt, index) => {
          text += `  ${String.fromCharCode(65 + index)}) ${opt}`;
          // Check if user selected this option
          if (q.userAnswerIndices.includes(index)) {
            text += " (User chose this)";
          }
          text += "\n";
        });
        // Format correct answers
        const correctAnsText = q.correctOptionIndices
            .map(idx => `${String.fromCharCode(65 + idx)}) ${q.options[idx]}`)
            .join(', ');
        text += `Correct Answer(s): ${correctAnsText}\n`;
        // Add explanation if available
        if (q.explanation) {
            text += `Explanation: ${q.explanation}\n`;
        }
        text += "\n";
      });
      text += "\n";
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


  // --- Rendering ---
  return (
    <div className="App">
      {/* Header (Add Clear button style) */}
       <header className="app-header">
         <h1>ML_quiz</h1>
         <div className="mode-controls-header">
           {/* NEW: Add Quizzes button to the left */}
           <button onClick={handleAddQuizzes}>Add Quizzes</button>
             <button onClick={() => setMode('quiz')} disabled={mode === 'quiz' || !selectedTopicId}>Quiz Mode</button>
             <button onClick={() => setMode('reveal')} disabled={mode === 'reveal' || !selectedTopicId}>Reveal Answers</button>
             <button onClick={() => setMode('mistakes')} disabled={mode === 'mistakes'}>View Mistakes</button>
             <button onClick={handleClearSavedAnswers} className="clear-button">Clear & Restart</button>
         </div>
      </header>

      <div className="layout">
        {/* Sidebar (Mark answered based on array length) */}
        <nav className="topic-list-sidebar">
          <h2>Topics & Questions</h2>
          <div>
            {/* NEW: Collapse All and Expand All buttons */}
            <button 
              onClick={handleCollapseAll} 
              style={{ marginBottom: '10px', cursor: 'pointer' }}
            >
              Collapse All
            </button>
            <button 
              onClick={handleExpandAll} 
              style={{ marginBottom: '10px', marginLeft: '8px', cursor: 'pointer' }}
            >
              Expand All
            </button>
          </div>
          <ul>
            {quizDataState.map(topic => (
              <li key={topic.id} className="topic-item">
                <div className="topic-header">
                  <strong 
                    onClick={() => handleTopicSelect(topic.id)} 
                    className={selectedTopicId === topic.id ? 'selected-topic-header' : ''}
                  >
                    {topic.topic}
                  </strong>
                  {/* NEW: Button to toggle collapse */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleToggleTopicCollapse(topic.id); }}
                    style={{ marginLeft: '8px', cursor: 'pointer' }}
                  >
                    {collapsedTopics[topic.id] ? '+' : '-'}
                  </button>
                </div>
                {/* Only show question links if topic is not collapsed */}
                {!collapsedTopics[topic.id] && (
                  <ul className="question-links-list">
                    {topic.questions.map((q, index) => (
                      <li
                        key={q.id}
                        onClick={() => handleJumpToQuestion(topic.id, index)}
                        className={`
                          question-link
                          ${selectedTopicId === topic.id && currentQuestionIndex === index ? 'active-question-link' : ''}
                          ${(userAnswers[q.id] || []).length > 0 ? 'answered-question-link' : ''}
                        `}
                        title={q.text.substring(0, 50) + '...'}
                      >
                        {`Q${index + 1}: ${q.text.length > 30 ? q.text.substring(0, 30) + '...' : q.text}`}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="main-content-area">
          {!selectedTopicId && mode !== 'mistakes' && (
            <p className="placeholder-text">Please select a topic or question from the sidebar to begin.</p>
          )}

          {/* Quiz Mode (Uses Checkboxes) */}
          {selectedTopic && mode === 'quiz' && currentQuestion && (
            <div className="quiz-area scrollable-content">
              <div className="quiz-header">
                <h3>{selectedTopic.topic} - Question {currentQuestionIndex + 1} of {selectedTopic.questions.length}</h3>
                <div className="timer-display">Time on question: {formatTime(timeSpentOnQuestion)}</div>
              </div>
              <p className="question-text">[{currentQuestion.difficulty}] {currentQuestion.text}</p>
              <ul className="options-list">
                {currentQuestion.options.map((option, index) => {
                  const isChecked = (userAnswers[currentQuestion.id] || []).includes(index);
                  return (
                    <li key={index}>
                      <label className={isChecked ? 'selected-option' : ''}>
                        <input
                          type="checkbox" // *** Use checkbox ***
                          name={currentQuestion.id + '-' + index} // Unique name per checkbox (optional but good practice)
                          value={index}
                          checked={isChecked}
                          onChange={() => handleToggleAnswer(currentQuestion.id, index)} // Use toggle handler
                        />
                        {String.fromCharCode(65 + index)}) {option}
                      </label>
                    </li>
                  );
                })}
              </ul>
              <div className="navigation-controls">
                 <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
                 <button onClick={handleNextQuestion} disabled={currentQuestionIndex === selectedTopic.questions.length - 1}>Next</button>
              </div>
            </div>
          )}

          {/* Reveal Answers Mode */}
          {selectedTopic && mode === 'reveal' && (
             <div className="reveal-area scrollable-content">
                <h3>{selectedTopic.topic} - Answers Revealed</h3>
                {selectedTopic.questions.map((q, index) => {
                   const userSelectedIndices = userAnswers[q.id] || [];
                   const isAttempted = userSelectedIndices.length > 0;
                   // Removed filtering based on "I don't know" so that all attempted questions appear
                   if (!isAttempted) {
                       return null;
                   }
                   const correctIndices = q.correctOptionIndices;
                   const userAnswerToCheck = userSelectedIndices.filter(idx => idx !== DONT_KNOW_INDEX);
                   const isAnswerCorrect = arraysHaveSameElements(userAnswerToCheck, correctIndices);

                   return (
                     <div key={q.id} className="revealed-question">
                       <p><strong>Q{index + 1}: [{q.difficulty}] {q.text}</strong></p>
                       {/* Show feedback indicating correctness */}
                       <div className="answer-feedback">
                         {isAnswerCorrect ? (
                           <span style={{color: 'var(--success-color)'}}>Correct</span>
                         ) : (
                           <span style={{color: 'var(--danger-color)'}}>Incorrect</span>
                         )}
                       </div>
                       <ul className="options-list revealed">
                         {q.options.map((option, optIndex) => {
                           const isUserChoice = userSelectedIndices.includes(optIndex);
                           const isCorrect = correctIndices.includes(optIndex);
                           let itemClass = '';
                           if (isUserChoice && isCorrect) itemClass = 'correct user-choice';
                           else if (isUserChoice && !isCorrect) itemClass = 'incorrect user-choice';
                           else if (!isUserChoice && isCorrect) itemClass = 'correct';

                           return (
                             <li key={optIndex} className={itemClass}>
                               {String.fromCharCode(65 + optIndex)}) {option}
                               {isUserChoice ? ' (Your Answer)' : ''}
                               {isCorrect ? ' (Correct Answer)' : ''}
                             </li>
                           );
                         })}
                       </ul>
                       {/* If answer is incorrect display correct answer summary */}
                       {!isAnswerCorrect && (
                         <p className="correct-answer-info">
                           Correct Answer(s): {correctIndices.map(idx => String.fromCharCode(65 + idx) + ') ' + q.options[idx]).join(', ')}
                         </p>
                       )}
                       {/* Display Explanation if available */}
                       {q.explanation && (
                           <div className="explanation">
                               <strong>Explanation:</strong> {q.explanation}
                           </div>
                       )}
                     </div>
                   );
                 })}
                 {selectedTopic.questions.filter(q => (userAnswers[q.id] || []).length > 0).length === 0 && (
                    <p>No questions attempted in this topic yet.</p>
                 )}
             </div>
           )}

          {/* View Mistakes Mode (Handles arrays and explanation) */}
          {mode === 'mistakes' && (
             <div className="mistakes-area scrollable-content">
                <h2>Mistakes Review</h2>
                <div className="mistakes-filters">
                     <label>Filter by Topic: </label>
                    <select value={mistakesTopicFilter} onChange={(e) => setMistakesTopicFilter(e.target.value)}>
                        <option value="all">All Topics</option>
                        {quizDataState.map(topic => (<option key={topic.id} value={topic.id}>{topic.topic}</option>))}
                    </select>
                    <label>
                        <input type="checkbox" checked={includeDontKnow} onChange={(e) => setIncludeDontKnow(e.target.checked)} />
                        Include "I don't know" answers
                    </label>
                </div>

                {getMistakes().length > 0 ? (
                    <>
                        <button onClick={copyMistakesToClipboard} className="copy-button">Copy Mistakes Summary</button>
                        {getMistakes().map(topicMistake => (
                           <div key={topicMistake.topic} className="mistake-topic-section">
                                <h3>{topicMistake.topic}</h3>
                                {topicMistake.questions.map(q => { // q includes userAnswerIndices
                                    const correctIndices = q.correctOptionIndices;
                                    return (
                                        <div key={q.id} className="mistake-question">
                                            <p><strong>Q: [{q.difficulty}] {q.text}</strong></p>
                                            <ul className="options-list revealed">
                                                {q.options.map((opt, index) => {
                                                    const isUserChoice = q.userAnswerIndices.includes(index);
                                                    const isCorrect = correctIndices.includes(index);
                                                    let itemClass = '';
                                                    if (isUserChoice && isCorrect) itemClass = 'correct user-choice';
                                                    else if (isUserChoice && !isCorrect) itemClass = 'incorrect user-choice';
                                                    else if (!isUserChoice && isCorrect) itemClass = 'correct';

                                                    return (
                                                        <li key={index} className={itemClass}>
                                                            {String.fromCharCode(65 + index)}) {opt}
                                                            {isUserChoice ? ' (User chose this)' : ''}
                                                        </li>
                                                    );
                                                })}
                                                <li className="correct-answer-info">
                                                    Correct Answer(s): {correctIndices.map(idx => String.fromCharCode(65 + idx)).join(', ')}
                                                    {/* Optionally show full text: correctIndices.map(idx => q.options[idx]).join('; ') */}
                                                </li>
                                            </ul>
                                             {/* Display Explanation if available */}
                                            {q.explanation && (
                                                <div className="explanation">
                                                    <strong>Explanation:</strong> {q.explanation}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No mistakes found based on the current filter settings, or no questions attempted yet.</p>
                )}
             </div>
           )}

        </main> {/* End main-content-area */}
      </div> {/* End layout */}

       {/* Footer (No changes needed) */}
       <footer className="progress-indicators">
         <div className="progress-item"><span>Topic Progress:</span><strong>{progressStats.finishedInTopic} / {progressStats.totalInTopic}</strong><span>({progressStats.percentageInTopic}%)</span></div>
         <div className="progress-item"><span>Overall Progress:</span><strong>{progressStats.finishedOverall} / {progressStats.totalOverall}</strong><span>({progressStats.percentageOverall}%)</span></div>
       </footer>

    </div> // End App
  );
}

export default App;