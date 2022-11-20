import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";

function Form() {
  const [questions, setQuestions] = useState([]);
  const [userInput, setUserInput] = useState({});

  const url = "http://localhost:8000/questions";

  const questionnaire = async () => {
    const response = await fetch(url);

    const data = await response.json();

    setQuestions(data);
  };

  useEffect(() => {
    questionnaire();
  }, []);

  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(userInput);
    setMessage(`Thank you for submitting your form`);
  };

  //check user input -
  console.log(questions.length && questions[0].option1);

  return (
    <form onSubmit={onSubmit}>
      <h2 className="page-name">
        Daily Log
        <span className="dot">.</span>
      </h2>
      {questions.map((question) => (
        <div className="container">
          <h4>{question.title}</h4>

          <p className="question-title">{question.question}</p>

          <div className="radio">
            <label>
              <input
                type="radio"
                value={question.option1}
                checked={userInput[question.question] === question.option1}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: e.target.value,
                  })
                }
              />
              {question.option1}
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value={question.option2}
                checked={userInput[question.question] === question.option2}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: e.target.value,
                  })
                }
              />
              {question.option2}
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value={question.option3}
                checked={userInput[question.question] === question.option3}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: e.target.value,
                  })
                }
              />
              {question.option3}
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value={question.option4}
                checked={userInput[question.question] === question.option4}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: e.target.value,
                  })
                }
              />
              {question.option4}
            </label>
          </div>
        </div>
      ))}

      <button className="submit" type="submit">
        Submit
      </button>
      <div className="message">{message}</div>
    </form>
  );
}

// store all user answers
//create a conditional depending on the answers provided
//return a calendar

export default Form;
