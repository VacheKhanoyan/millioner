import React from "react";
import {Well,  Panel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import db from './../../users.json'
import './index.css'

  const PlayersForm=(users)=>{
    users= db.users.sort((a,b) =>  b.count-a.count );
    return (
    <Well>
        <h6>Top Players</h6>
        <Panel>
            <ol>
            {
                users.map(user=>{
                 return <li key={user.id}> name: {user.firstName},  answers:{user.count} </li>
                })     
            }
            </ol>
        </Panel>
        <Link to="/GamePage">Back to Game</Link>
    </Well>
      )
  }

  export default PlayersForm;