import React, { Component } from "react";
import { Button, Form, Checkbox } from 'semantic-ui-react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isAdmin: false
        };
    }

    getItemName(event) {
        this.setState({ email: event.target.value });
    }
    /**
     * get item price from user input 
     * @param {*} event 
     */
    getItemPrice(event) {
        this.setState({ password: event.target.value });
    }
    getIsAdmin(event) {
        this.setState({ isAdmin: event.target.value });
    }


    handleSubmit = event => {
        event.preventDefault();
        localStorage.setItem('user-email', this.state.email);
        localStorage.setItem('isAdmin', this.state.isAdmin);
        this.props.history.push('/index');
    }



    toggleCheckbox = () => {
        this.setState(prevState => ({
            isAdmin: !prevState.isAdmin,
        }));
    }
    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Email</label>
                            <input autoFocus
                                type="email"
                                onChange={this.getItemName.bind(this)}
                                value={this.state.email} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Password</label>
                            <input
                                onChange={this.getItemPrice.bind(this)}
                                value={this.state.password}
                                type="password" />
                        </Form.Field>

                    </Form.Group>
                    <Form.Field>
                        <Checkbox label='login as Admin'
                            checked={this.state.isAdmin}
                            onChange={this.toggleCheckbox} />
                    </Form.Field>
                    <Button type="submit"> Login </Button>
                </Form>
            </div>
        );
    }
}