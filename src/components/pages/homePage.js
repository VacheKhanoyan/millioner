import React, { Component } from 'react';
import RegisterForm from './../forms/registerForm';
import {Grid, Row, Col} from 'react-bootstrap';
import './index.css';

class HomePage extends Component{
    render () {
        return (
            <div className= "TextForm">
                <Grid >
                    <Row className="show-grid">
                        <Col xs={14} md={8}>
                            <RegisterForm/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default HomePage