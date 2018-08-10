import React, {Component} from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Footer from '../../components/Footer/Footer.jsx';
import PagesHeader from '../../components/Header/PagesHeader.jsx';

// dinamically create pages routes
import authRoutesProceed from '../../routes/authRoutes.jsx';

// import bgImage from '../../assets/img/full-screen-image-3.jpg';
import bgImage from '../../assets/img/login-background.jpg';

class Auth extends Component{
    getPageClass(){
        var pageClass = "";
        switch (this.props.location.pathname) {
            case "/login":
                pageClass = " login-page";
                break;
            case "/register":
                pageClass = " register-page";
                break;
            default:
                pageClass = "";
                break;
        }
        return pageClass;
    }
    componentWillMount(){
        if(document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render(){
        return (
            <div>
                <PagesHeader />
                <div className="wrapper wrapper-full-page">
                    <div className={"full-page"+this.getPageClass()} data-color="black" data-image={bgImage}>
                        <div className="content">
                            <Switch>
                                {
                                    authRoutesProceed.map((prop,key) => {
                                            if(prop.redirect)
                                                return (
                                                    <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                                                );
                                            else
                                                return (
                                                    <Route path={prop.path} component={prop.component} key={key}/>
                                                );
                                    })
                                }
                            </Switch>
                        </div>
                        <Footer transparent/>
                        <div className="full-page-background" style={{backgroundImage: "url("+bgImage+")"}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;
