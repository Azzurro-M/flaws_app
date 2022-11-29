import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "./Form.css";
import { useAuth } from "../context/auth.Context";
import App from "../App";


function Form() {
  const [questions, setQuestions] = useState([]);
  const [userInput, setUserInput] = useState({});
  const {user, logout} = useAuth();

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
    let redFlag = false;
    for (const question in userInput) {
      const answer = userInput[question];
      if (answer[0] > 1) {
        redFlag = true;
        setMessage("Please contact our helpline for immidiate help!");
        break;
      }
    }
    if (redFlag === false) {
      setMessage(`Thank you for submitting your form`);
    }
  };

  //check user input -
  // console.log(questions.length && questions[0].option1);
  if(user)
  {return (
    <>
     <Navbar />
    <form onSubmit={onSubmit}>
      <h2 className="page-name">
        Daily Log
        <span className="dot">.</span>
      </h2>
      {questions.map((question) => (
        <div className="container" key={question.question}>
          <h4>{question.title}</h4>

          <p className="question-title">{question.question}</p>

          <div className="radio">
            <label>
              <input
                type="radio"
                value={question.option1}
                checked={userInput[question.question]?.[1] === question.option1}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: [1, e.target.value],
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
                checked={userInput[question.question]?.[1] === question.option2}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: [2, e.target.value],
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
                checked={userInput[question.question]?.[1] === question.option3}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: [3, e.target.value],
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
                checked={userInput[question.question]?.[1] === question.option4}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: [4, e.target.value],
                  })
                }
              />
              {question.option4}
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value={question.option5}
                checked={userInput[question.question]?.[1] === question.option5}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: [5, e.target.value],
                  })
                }
              />
              {question.option5}
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value={question.option6}
                checked={userInput[question.question]?.[1] === question.option6}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: [6, e.target.value],
                  })
                }
              />
              {question.option6}
            </label>
          </div>

          <div className="radio">
            <label>
              <input
                type="radio"
                value={question.option7}
                checked={userInput[question.question]?.[1] === question.option7}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    [question.question]: [7, e.target.value],
                  })
                }
              />
              {question.option7}
            </label>
          </div>
        </div>
      ))}

      <button className="submit" type="submit">
        Submit
      </button>
      <div className="message">{message}</div>
    </form>
   </> 
  );
  } return (
    <>
      <App />
      </>
  )
  
}

// store all user answers
//create a conditional depending on the answers provided
//return a calendar

export default Form;

