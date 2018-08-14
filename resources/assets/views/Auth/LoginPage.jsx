import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import Card from '../../components/Card/Card.jsx';

import Button from '../../elements/CustomButton/CustomButton.jsx';
import Checkbox from '../../elements/CustomCheckbox/CustomCheckbox.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../../redux/actions/authActions';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            cardHidden: true,
            user: {
                email: "",
                password: ""
            }
        }
    }

    handleInputChange(propertyKey, event) {
      var user = {...this.state.user}
      user[propertyKey] = event.target.value
      this.setState({user})
    }

    handleFormSubmit() {
      this.props.login(this.state.user)
    }

    componentDidMount(){
        setTimeout(function() { this.setState({cardHidden: false}); }.bind(this), 700);
    }

    render(){
        return (
            <Grid>
                <Row>
                    <Col md={4} sm={6} mdOffset={4} smOffset={3}>
                        <form>
                            <Card
                                hidden={this.state.cardHidden}
                                textCenter
                                title="Login"
                                content={
                                    <div>
                                        <FormGroup>
                                            <ControlLabel>
                                                Email address
                                            </ControlLabel>
                                            <FormControl
                                                placeholder="Enter email"
                                                type="email"
                                                onChange={this.handleInputChange.bind(this, 'email')}
                                                value={this.state.user.email}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>
                                                Password
                                            </ControlLabel>
                                            <FormControl
                                                placeholder="Password"
                                                type="password"
                                                onChange={this.handleInputChange.bind(this, 'password')}
                                                value={this.state.user.password}
                                            />
                                        </FormGroup>
                                    </div>
                                }
                                legend={
                                    <Button bsStyle="info" fill wd onClick={this.handleFormSubmit.bind(this)} disabled={(this.state.user.email === "" || this.state.user.password === "")? true : false}>
                                        Login
                                    </Button>
                                }
                                ftTextCenter
                            />
                        </form>
                        <a href="https://contentlab.labinotjakupi.com/auth/facebook">Login</a>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        message: state.authReducer.message,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
