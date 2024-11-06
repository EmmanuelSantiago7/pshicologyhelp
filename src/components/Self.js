// src/components/SelfAssessment.js
import React, { useState } from 'react';

const questions = [
  { question: '¿Te sientes estresado frecuentemente?', options: ['Sí', 'No', 'A veces'] },
  { question: '¿Encuentras difícil relajarte?', options: ['Sí', 'No', 'A veces'] },
  { question: '¿Tienes problemas para dormir?', options: ['Sí', 'No', 'A veces'] },
  // Agrega más preguntas aquí
];

function SelfAssessment() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="p-8 bg-gradient-to-b from-green-500 to-green-300 min-h-screen">
      <h1 className="text-3xl font-extrabold text-white text-center mb-8">Autoevaluación de Bienestar</h1>
      {!showResults ? (
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-gray-800 mb-4">{q.question}</p>
              <div className="space-x-4">
                {q.options.map((option) => (
                  <button
                    key={option}
                    className={`px-4 py-2 rounded-full font-medium ${
                      answers[index] === option ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
                    } hover:bg-green-400 hover:text-white transition duration-200`}
                    onClick={() => handleAnswerChange(index, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="w-full py-3 mt-6 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
          >
            Enviar Respuestas
          </button>
        </div>
      ) : (
        <div className="text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">¡Gracias por completar la autoevaluación!</h2>
          <p className="mb-6">Basado en tus respuestas, te sugerimos explorar nuestros recursos de manejo del estrés y técnicas de relajación.</p>
          <a
            href="/resources"
            className="inline-block px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition duration-200"
          >
            Ver Recursos
          </a>
        </div>
      )}
    </div>
  );
}

export default SelfAssessment;
