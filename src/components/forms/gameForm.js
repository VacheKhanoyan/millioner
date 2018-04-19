import React from "react";
import { Well, Radio, Panel, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import db from './../../users.json'
import axios from 'axios';
import './index.css'


const num = Math.floor(Math.random() * 5)
const qArr = db.questions.map(elem => {
    return elem
}).slice(num, num + 5)


class GameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            count: 0,
            answer: false,
            questions: 0,
            endGame: false
        }
        this._onChange = this._onChange.bind(this)
        this._onClick = this._onClick.bind(this)
        this._onSubmit = this._onSubmit.bind(this)
    }

    _onChange = (e) => {
        let newAnswer = this.state.answer
        if (e.target.value == "true") {
            newAnswer = e.target.value
        }
        console.log(e.target.value)
        this.setState({
            checked: e.target.checked,
            answer: newAnswer,
        });
    }

    _onClick = () => {
        let a = this.state.questions
        let b = this.state.count
        if (this.state.answer == "true") {
            this.setState({ questions: ++a, count: ++b })
        } else {
            this.setState({ questions: ++a })
        }
    }

    _onSubmit = () => {
        let b = this.state.count
        if (this.state.answer == "true") {
            ++b
            this.setState({count: b})
        } 
        let id = localStorage.getItem("Id");
        const payload = {
            count: b
        }
        const authOptions = {
            method: 'patch',
            url: `http://localhost:3000/users/${id}`,
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        };

        axios(authOptions)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                alert(error)
            })
    }
    render() {
        console.log("q:",this.state.questions)
        console.log("c:",this.state.count)
        const a = this.state.questions
        return (
            <Well>
                <h3>The Game</h3>
                <Panel>
                    <FormGroup>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>{qArr[a].title}</ControlLabel>
                        </FormGroup >
                        <FormGroup className="checkBox">
                            <Radio name="radioGroup"
                                onChange={this._onChange}
                                value={qArr[a].answer[0].correct}
                            >1. {qArr[a].answer[0].title}
                            </Radio>
                            <Radio name="radioGroup"
                                onChange={this._onChange}
                                value={qArr[a].answer[1].correct}>
                                2. {qArr[a].answer[1].title}
                            </Radio>
                            <Radio name="radioGroup"
                                onChange={this._onChange}
                                value={qArr[a].answer[2].correct}>
                                3. {qArr[a].answer[2].title}
                            </Radio>
                            <Radio name="radioGroup"
                                onChange={this._onChange}
                                value={qArr[a].answer[3].correct}>
                                4. {qArr[a].answer[3].title}
                            </Radio>
                        </FormGroup>
                    </FormGroup>
                    <Button
                        onClick={this._onClick}
                        disabled={!this.state.checked || this.state.questions > 3}
                        bsStyle="link"> Next ->
            </Button>
                    {this.state.questions ===4 &&
                        <div>
                            <p>press Submit to save your result </p>
                            <Link to="/Result" >
                                <Button
                                    onClick={this._onSubmit}
                                    bsStyle="link"> Submit
            </Button>
                            </Link>
                        </div>
                    }
                </Panel>
                <Link to="/TopPlayersPage">
                    Top Players
            </Link>

            </Well>
        );
    }
}

export default GameForm;