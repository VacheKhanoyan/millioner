import React, { Component } from 'react';
import ResultForm from './../forms/resultForm';
import {Grid, Row, Col} from 'react-bootstrap';
import './index.css';

class ResultPage extends Component{
    render () {
        return (
            <div className= "TextForm">
                <Grid >
                    <Row className="show-grid">
                        <Col xs={14} md={8}>
                            <ResultForm/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default ResultPage