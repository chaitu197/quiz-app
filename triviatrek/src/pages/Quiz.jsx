import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { quizData, quizCategories } from '../data/quizData';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';

const Quiz = () => {
    const { category, subtopic } = useParams();
    const navigate = useNavigate();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState([]);

    const categoryInfo = quizCategories.find(c => c.id === category);
    const subtopicInfo = categoryInfo?.subtopics?.find(s => s.id === subtopic);

    // Load and randomize questions
    useEffect(() => {
        if (!category || !subtopic) {
            navigate('/home');
            return;
        }

        // Get questions for this subtopic
        let allQuestions = [];

        if (subtopic === 'all') {
            // Full topic quiz - get questions from all subtopics
            categoryInfo?.subtopics?.forEach(sub => {
                const subQuestions = quizData[category]?.[sub.id] || [];
                allQuestions = [...allQuestions, ...subQuestions];
            });
        } else {
            // Single subtopic quiz
            allQuestions = quizData[category]?.[subtopic] || [];
        }

        if (allQuestions.length === 0) {
            navigate('/home');
            return;
        }

        // Randomly select 20 questions
        const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(20, allQuestions.length));
        setQuizQuestions(selected);
    }, [category, subtopic, navigate, categoryInfo]);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    const handleSelectAnswer = (answerIndex) => {
        setSelectedAnswer(answerIndex);
        setShowResult(true);

        const isCorrect = answerIndex === currentQuestion.correctAnswer;
        if (isCorrect) {
            setScore(score + 1);
        }

        setUserAnswers([...userAnswers, {
            questionId: currentQuestion.id,
            selectedAnswer: answerIndex,
            correctAnswer: currentQuestion.correctAnswer,
            isCorrect
        }]);
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            // Quiz completed
            navigate('/results', {
                state: {
                    category,
                    score,
                    totalQuestions: quizQuestions.length,
                    userAnswers,
                    questions: quizQuestions
                }
            });
        }
    };

    const handleTimeout = () => {
        if (!showResult) {
            setShowResult(true);
            setUserAnswers([...userAnswers, {
                questionId: currentQuestion.id,
                selectedAnswer: null,
                correctAnswer: currentQuestion.correctAnswer,
                isCorrect: false
            }]);
        }
    };

    if (!currentQuestion) {
        return null;
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center space-x-3 mb-4">
                        <span className="text-5xl">{categoryInfo?.icon}</span>
                        <div>
                            <h1 className="text-3xl font-bold">{categoryInfo?.title}</h1>
                            <p className="text-gray-400">{categoryInfo?.description}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Progress and Timer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <ProgressBar
                        current={currentQuestionIndex + 1}
                        total={quizQuestions.length}
                    />
                    <Timer
                        duration={30}
                        onTimeout={handleTimeout}
                        isActive={!showResult}
                        key={currentQuestionIndex}
                    />
                </div>

                {/* Score */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass p-4 rounded-xl mb-8 text-center"
                >
                    <div className="text-sm text-gray-400 mb-1">Current Score</div>
                    <div className="text-3xl font-bold text-gradient">
                        {score} / {currentQuestionIndex + (showResult ? 1 : 0)}
                    </div>
                </motion.div>

                {/* Question */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestionIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <QuestionCard
                            question={currentQuestion}
                            selectedAnswer={selectedAnswer}
                            onSelectAnswer={handleSelectAnswer}
                            showResult={showResult}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Next Button */}
                {showResult && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 flex justify-end"
                    >
                        <button
                            onClick={handleNext}
                            className="btn-primary flex items-center space-x-2"
                        >
                            <span>
                                {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}
                            </span>
                            <ArrowRight size={20} />
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
