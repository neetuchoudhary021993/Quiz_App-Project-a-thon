import React from "react";
import './ReviewSubmission.css';
function ReviewSubmission({ questions, userAnswers }) {
    return (
      <div className="review-section">
        <h2>Review Answers</h2>
        {questions.map((question, index) => (
          <div key={index} className="review-question">
            <p class="question_class">{question.question}</p>
            <p class="userAnswer">Your Answer: {userAnswers[index]}</p>
            <p class="correcrAnswer">Correct Answer: {question.correctAnswer}</p>
          </div>
        ))}
      </div>
    );
  }
  export default ReviewSubmission;