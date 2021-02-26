import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'

import Header from './Header';
import Footer from './Footer';
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
            <div>
                <div className="ui container">
                    <Router history={history}>
                    <Header />
                    <div className="header-placeholder"></div>
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
                <Router history={history}>
                    <Footer />
                </Router>

            </div>
        );
    }
}

export default App;