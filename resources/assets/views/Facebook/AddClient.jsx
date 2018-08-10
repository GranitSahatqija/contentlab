import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Form, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';

import { withRouter } from "react-router-dom";

import Card from '../../components/Card/Card.jsx';

import Checkbox from '../../elements/CustomCheckbox/CustomCheckbox.jsx';
import Button from '../../elements/CustomButton/CustomButton.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { submitSearch } from '../../redux/actions/facebookActions';

class AddClient extends Component{
    constructor(props){
        super(props);

        this.vForm = this.refs.vForm;
        this.state = {
            // Store client fields
            first_name: "33",
            first_name_error: null,
            last_name: "",
            last_name_error: null,
            company_name: "",
            company_name_error: null,
            email: "est.com",
            email_error: null,
            phone: "",
            phone_error: null,
            street_address: "",
            street_address_error: null,
            postal_code: "",
            postal_code_error: null,
            city: "",
            city_error: null,
            canton: "",
            canton_error: null,
            type: "",
            type_error: null,
        }
    }

    handleFormSubmit(e) {
        e.preventDefault()

        let client = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            company_name: this.state.company_name,
            email: this.state.email,
            phone: this.state.phone,
            street_address: this.state.street_address,
            postal_code: this.state.postal_code,
            city: this.state.city,
            canton: this.state.canton,
            type: this.state.type
        }

        this.props.submitSearch(client)

        this.props.history.push("/admin/clients/list");
    }

    render(){
        const noErrorsPresent = (this.state.email_error === null && this.state.street_address_error === null && this.state.postal_code_error === null && this.state.city_error === null && this.state.type_error === null)
        const emptyFields = (this.state.email != "" && this.state.street_address != "" && this.state.postal_code != "" && this.state.city != "" && this.state.type != "")

        return (
            <div className="main-content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Form horizontal>
                                <Card
                                    title={
                                        <legend>Shto new klient</legend>
                                    }
                                    content={
                                        <div>
                                            <FormGroup controlId="formHorizontalFirstName">
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    Emri
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" name="first_name" onChange={(event) => {
                                                        this.setState({first_name: event.target.value});
                                                    }}/>
                                                {this.state.first_name_error}
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalLastName">
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    Mbiemri
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" name="last_name" onChange={(event) => {
                                                        this.setState({last_name: event.target.value});
                                                    }}/>
                                                {this.state.last_name_error}
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalCompanyName">
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    Emri i kompanise
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" name="company_name" onChange={(event) => {
                                                        this.setState({company_name: event.target.value});
                                                    }}/>
                                                {this.state.company_name_error}
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalEmail">
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    E-mail*
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="email" name="email" onChange={(event) => {
                                                        this.setState({email: event.target.value});
                                                        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                        emailRex.test(event.target.value) === false ? this.setState({ email_error: (<small className="text-danger">E-mail duhet te shkruhet ne formen: <i>john@doe.com</i>.</small>) }):this.setState({ email_error: null });
                                                    }}/>
                                                {this.state.email_error}
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalPhone">
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    Telefoni
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" name="phone" onChange={(event) => {
                                                        this.setState({phone: event.target.value});
                                                    }}/>
                                                {this.state.phone_error}
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalRequiredStreetAddress">
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    Adresa (rruga dhe nr.)*
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" name="street_address" onChange={(event) => {
                                                        this.setState({street_address: event.target.value});
                                                        event.target.value === "" ? this.setState({ street_address_error: (<small className="text-danger">Adresa duhet te shkruhet patjeter.</small>) }):this.setState({ street_address_error: null });
                                                    }}/>
                                                {this.state.street_address_error}
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalRequiredPostalCode">
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    ZIP kodi*
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" name="postal_code" onChange={(event) => {
                                                        this.setState({postal_code: event.target.value});
                                                        var digitRex = /^\d+$/;
                                                        digitRex.test(event.target.value) === false ? this.setState({ postal_code_error: (<small className="text-danger">ZIP Kodi duhet te shkruhet patjeter dhe duhet te jete numer.</small>) }):this.setState({ postal_code_error: null });
                                                    }}/>
                                                {this.state.postal_code_error}
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalRequiredCity">
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    Qyteti*
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" name="city" onChange={(event) => {
                                                        this.setState({city: event.target.value});
                                                        event.target.value === "" ? this.setState({ city_error: (<small className="text-danger">Qyteti duhet te shkruhet patjeter.</small>) }):this.setState({ city_error: null });
                                                    }}/>
                                                {this.state.city_error}
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalCanton">
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    Kantoni
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" name="canton" onChange={(event) => {
                                                        this.setState({canton: event.target.value});
                                                    }}/>
                                                {this.state.canton_error}
                                                </Col>
                                            </FormGroup>
                                            <FormGroup controlId="formHorizontalType">
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    Lloji i klientit (Privat/Firm)*
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" name="type" onChange={(event) => {
                                                        this.setState({type: event.target.value});
                                                    }}/>
                                                {this.state.type_error}
                                                </Col>
                                            </FormGroup>
                                        </div>
                                    }
                                    ftTextCenter
                                    legend={
                                        <Button fill bsStyle="info" type="submit" disabled={(noErrorsPresent && emptyFields) ? false : true} onClick={this.handleFormSubmit.bind(this)}>Ruaj</Button>
                                    }
                                />
                            </Form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        message: state.clientReducer.message,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitSearch }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddClient));
