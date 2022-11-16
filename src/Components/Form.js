import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";

function Form() {
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
        <h2 className="page-name">
          Daily Log<span className="dot">.</span>
        </h2>
        <form>
          {questions.map((question) => (
            <div>
              <h4 className="question-title">{question.title}</h4>
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
        <input
          className="submit"
          type="submit"
          name="submit"
          value="Submit"
        ></input>
      </div>
    </div>
  );
}

export default Form;
