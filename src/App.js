import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/homePage';
import GamePage from './components/pages/gamePage';
import TopPlayersPage from './components/pages/topPlayersPage';
import ResultPage from './components/pages/resultPage'
import './App.css'


const App =({location}) => (
  <div >
    <Route location ={location} path='/' exact component={HomePage} />
    <Route location ={location} path='/GamePage' exact component={GamePage} />
    <Route location ={location} path='/Result' exact component={ResultPage} /> 
    <Route location ={location} path='/TopPlayersPage' exact component={TopPlayersPage} />    
  </div>
);

export default App;
