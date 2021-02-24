import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import Header from './Header';

import Home from './Home';
import FilterBrands from './filters/FilterBrands';
import FilterClass from './filters/FilterClass';
import FilterDecades from './filters/FilterDecades';
import FilterShifters from './filters/FilterShifters';
import ShowList from './ShowList';
import history from '../history';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div className="nav-placeholder" style={{ width: '100%', height: '60px' }}></div>
                <Router history={history}>
                <Header />
                <div>
                    <Switch>
                        <Route path="/filters/brands" exact component={FilterBrands} />           
                        <Route path="/filters/class" exact component={FilterClass} />           
                        <Route path="/filters/decades" exact component={FilterDecades} />           
                        <Route path="/filters/shifters" exact component={FilterShifters} />           
                        <Route path="/list" exact component={ShowList} />           
                        <Route path="/" exact component={Home} />           
                    </Switch>
                </div>
                </Router>
            </div>
        );
    }
}

export default App;