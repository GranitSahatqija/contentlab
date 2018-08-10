import React, {Component} from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import NotificationSystem from 'react-notification-system';
import { style } from "../../variables/Variables.jsx";

// dinamically create app routes
import appRoutes from '../../routes/app.jsx';
import authRoutes from '../../routes/auth.jsx';

import { connect } from 'react-redux';

class App extends Component{

    constructor(props) {
        super(props)

        this.state = {
            notificationSystem: null
        }
    }

    handleNotification(alertType, message, icon) {
        const response = this.state.notificationSystem.addNotification({
            title: (<span data-notify="icon" className={icon}></span>),
            message: message,
            level: alertType,
            position: 'tr',
            autoDismiss: 7,
        });
    }

    componentDidUpdate(e) {
        if(window.innerWidth < 993 && e.history.action === "PUSH" && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }

        if(this.props.authMessage.success)
        {
            this.handleNotification('success', this.props.authMessage.success, 'pe-7s-back-2')
        }
    }

    componentWillReceiveProps(nextProps, prevState) {

        if(nextProps.authMessage.error)
        {
            this.handleNotification('error', nextProps.authMessage.error, 'pe-7s-close')
        }

        if(nextProps.clientMessage.success)
        {
            this.handleNotification('success', nextProps.clientMessage.success, 'pe-7s-add-user')
        }

        if(nextProps.clientMessage.error)
        {
            this.handleNotification('error', nextProps.clientMessage.error, 'pe-7s-close')
        }
    }

    componentDidMount() {
        this.state.notificationSystem = this.refs.notificationSystem;
    }

    render(){
        return (
            <div>
                <NotificationSystem ref="notificationSystem" style={style}/>
                <Switch>
                    {
                        this.props.isAuthenticated ?
                            appRoutes.map((prop,key) => {
                                return (
                                    <Route path={prop.path} component={prop.component} key={key} />
                                );
                            })
                        :
                            authRoutes.map((prop,key) => {
                                return (
                                    <Route path={prop.path} component={prop.component} key={key} />
                                );
                            })
                    }

                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        authMessage: state.authReducer.message,
        clientMessage: state.facebookReducer.clientMessage
    }
}

export default connect(mapStateToProps)(App);
