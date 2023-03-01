import React from 'react';
import './Question.css';
import {nanoid} from 'nanoid';


export default function Question(props) {
    let answers = props.q.answers;

    function handleClick(answer) {
        if(props.q.checked) {
            return 
        }
        props.handleClickAnswer(props.id, answer)
    }

    const answersElement = answers.map(answer => {
        let id = null;
        if(props.q.checked) {
            if(props.q.correct === answer) {
                id = 'correct';
            }
            else if(props.q.selected === answer) {
                id = 'incorrect';
            }
            else {
                id = 'not-selected'
            }
        }
        return (
            <li key={nanoid()} id={id} className={answer === props.q.selected ? 'answer selected' : 'answer'} onClick={() => handleClick(answer)}>{answer}</li>
        )
    });



    return (
        <div className='q-box'>
            <h3 className={'que'} >{props.q.question}</h3>
            <ul className='ans'>
                {answersElement}
            </ul>
            <hr/>
        </div>
    )
}
