import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch,
    BrowserRouter,
    Redirect
} from 'react-router-dom';

import indexRoutes from './routes/index.jsx';

// import registerServiceWorker from './registerServiceWorker';

import './assets/css/bootstrap.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

import { Provider } from 'react-redux'
import store from "./redux/store/store"

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {
                    indexRoutes.map((prop,key) => {
                        return (
                            <Route path={prop.path} component={prop.component} key={key}/>
                        );
                    })
                }
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
// registerServiceWorker();
