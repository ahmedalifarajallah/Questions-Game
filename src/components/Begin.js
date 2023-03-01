import React from 'react';
import "./begin.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Begin() {




  return (
    <div className='begin-page'>
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <Link to={'./subjects'}><button className='btn'>Start quiz</button></Link>
    </div>
  )
}
