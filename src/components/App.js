import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

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
            <>
                <Router history={history}>
                    <Header />
                    <div className='ui container'>
                        <Switch>
                            <Route path='/filters/brands' component={FilterBrands} />
                            <Route path='/filters/class' component={FilterClass} />
                            <Route path='/filters/decades' component={FilterDecades} />
                            <Route path='/filters/shifters' component={FilterShifters} />
                            <Route path='/list' component={ShowList} />
                            <Route path='/' exact component={Home} />
                        </Switch>
                    </div>
                    <Footer />
                </Router>
            </>
        );
    }
}

export default App;
