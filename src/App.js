import React from 'react';
import './App.css';
import {nanoid} from 'nanoid';
import Begin from './components/Begin';
import Questions from './components/Question';
import { Route, Routes} from "react-router-dom";



function App() {
  const [count, setCount] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [checked, setChecked] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  const shuffleArray = (arr)=> arr.sort(()=> Math.random() - 0.5);
  
  React.useEffect(()=> {
    async function getQuestions() {
      const res = await fetch('https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple');
      const data = await res.json();
      let q =[];
      data.results.forEach(question => {
        q.push({id:nanoid(), question:question.question, correct:question.correct_answer, selected:null, checked:false, answers:shuffleArray([...question.incorrect_answers, question.correct_answer])})
      });
      setQuestions(q);
    }
    getQuestions()
  }, [count]);

  function handleChecked() {
    let selected = true;
    questions.forEach(question => {
      if(question.selected === null) {
        selected = false;
        return
      }
    });

    if(!selected) {
      return
    }
    
    setQuestions(questions => questions.map(question => {
      return {...question, checked: true}
    }));
    setChecked(true)

    let correct = 0;
    questions.forEach(question => {
      if(question.correct === question.selected) {
        correct += 1;
      }
    });
    setCorrect(correct);
  }

  function handleClickAnswer(id, answer) {
    setQuestions(questions => questions.map(question => {
      return question.id === id ? {...question, selected:answer} : question;
    }));
  }

  function handlePlayAgain() {
    setCount(count => count + 1);
    setChecked(false);
  }


 const questionElement = questions ? questions.map(question => {
    return(
      <Questions 
      key={question.id}
      handleClickAnswer={handleClickAnswer}
      q={question}
      id={question.id}
      />
    )
 }) : [];


 let questionComponent = (
  <div>
    {questionElement}
    {checked && <span className='score'>You Scored {correct} / 5</span>}
    <button className='btn check-btn check' onClick={checked ? handlePlayAgain : handleChecked }>{checked ? 'Play Again' : 'Check Answers'}</button>
  </div>
 );

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Begin />}></Route>
        <Route path='/subjects' element={questionComponent}></Route>
      </Routes>
    </div>
  );
}

export default App;
