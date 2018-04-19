import React from "react";
import { Link } from 'react-router-dom';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';



class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                email: "",
                firstName: "",
                lastName: "",
            },
            errorsEmail: "",
        }
        this._onClick = this._onClick.bind(this)
        this._onChange = this._onChange.bind(this)
        this._onSubmit = this._onSubmit.bind(this)
    }
com
    _onClick = () => {

        const player = {
            firstName: this.state.data.firstName,
            lastName: this.state.data.lastName,
            email: this.state.data.email,
            count: 0,
        }
        const errors = this.validate(player);
        this.setState({ errors });

        const authOptions = {
            method: 'post',
            url: 'http://localhost:3000/users',
            data: player,
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        };
        axios(authOptions)
            .then((response) => {
                localStorage.setItem("Id", response.data.id)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    _onChange = e => {
        this.setState({
            ...this.state,

            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }

    validate = data => {
        let errorsEmail = ""
        !/\S+@\S+\.\S+/.test(data.email) ? errorsEmail = "Invalid email" : errorsEmail = ""
        this.setState({ errorsEmail })
    };

    _onSubmit = () => {
        this.validate(this.state.data)
    }

    render() {
        return (
            <Well>
                <Panel>
                    <form onChange={this._onSubmit} >
                        <FormGroup >
                            <ControlLabel htmlFor="firstName" >FirstName</ControlLabel>
                            <FormControl
                                type="text"
                                name="firstName"
                                placeholder="Enter your First Name"
                                autoComplete="name"
                                value={this.state.data.firstName}
                                onChange={this._onChange}

                            />
                        </FormGroup>
                        <FormGroup >
                            <ControlLabel htmlFor="lastName"> LastName </ControlLabel>
                            <FormControl
                                type="text"
                                name="lastName"
                                placeholder="Enter your Last Name"
                                autoComplete="name"
                                value={this.state.data.lastName}
                                onChange={this._onChange}
                            />
                        </FormGroup>
                        <FormGroup >

                            <ControlLabel htmlFor="email"> Email </ControlLabel>
                            {(this.state.errorsEmail && this.state.data.email.length > 0) &&
                                <p style={{ color: "red" }}>Plese enter correct Email</p>
                            }
                            <FormControl
                                type="text"
                                name="email"
                                autoComplete="off"
                                placeholder="Enter your Email"
                                value={this.state.dataEmail}
                                onChange={this._onChange}
                            />
                        </FormGroup>
                    </form>
                    <Link to="/GamePage">
                        <Button
                            onClick={this._onClick}
                            disabled={this.state.errorsEmail.length > 0}
                            bsStyle="primary">  Start Game
            </Button>
                    </Link>
                </Panel>
            </Well>
        );
    }
}

export default RegisterForm;