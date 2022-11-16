import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const head = styled.h3`
  font-size: 10em;
  text-align: center;
  color: pink;
`;

function Form() {
  const head = styled.h3`
    font-size: 10em;
    text-align: center;
    color: pink;
  `;

  const [questions, setQuestions] = useState([]);

  const url = "http://localhost:8000/questions";

  const Questionnaire = async () => {
    const response = await fetch(url);

    const data = await response.json();

    setQuestions(data);
  };

  useEffect(() => {
    Questionnaire();
  }, []);

  return (
    <div>
      <div className="form_container">
        <head>Daily Log.</head>
        <form>
          {questions.map((question) => (
            <div>
              <h3>{question.title}</h3>
              <p>{question.question}</p>
              <input
                type="radio"
                name={question.question}
                value={question.option1}
              />
              {question.option1}
              <br />
              <input
                type="radio"
                name={question.question}
                value={question.option2}
              />
              {question.option2}
              <br />
              <input
                type="radio"
                name={question.question}
                value={question.option3}
              />
              {question.option3}
              <br />
              <input
                type="radio"
                name={question.question}
                value={question.option4}
              />
              {question.option4}
              <br />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Form;
