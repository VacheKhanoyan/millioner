import React, { Component } from 'react';
import GameForm from './../forms/gameForm'
import {Grid, Row, Col} from 'react-bootstrap'
import './index.css';

class GamePage extends Component{
    render () {
        return (    
            <div className="TextForm">
                <Grid >
                    <Row className="show-grid">
                        <Col xs={14} md={8}>
                            <GameForm />
                        </Col>
                    </Row>
                </Grid>
          </div>
        )
    }
}

export default GamePage