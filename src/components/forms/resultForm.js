
import React from "react";
import {Well,  Panel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import db from './../../users.json'
import './index.css'

const correctAnswers=()=>{
    let id=localStorage.getItem("Id");
    let correct=0
    db.users.map( (user)=>{
        if(user.id != id){
            return null
        }
        return correct=user.count
    })
    
    return correct
}
  const ResultForm=(props)=>{
   const count=correctAnswers()
    return (
    <Well>
        <h6>Your Result</h6>
        <Panel>
        <p>your correct answers is {count} 
        </p>
        </Panel>
        <Link to="/GamePage">Back to Game</Link>
    </Well>
      )
  }

  export default ResultForm;
