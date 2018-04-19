import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import PlayersForm from '../forms/playersForm';
import './index.css';



class TopPlayersPage extends Component{
    render () {
        return (
            <div className= "TextForm">
                <Grid >
                    <Row className="show-grid">
                        <Col xs={14} md={8}>
                            <PlayersForm/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default TopPlayersPage