import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './home';
import Artist from './artist';
import NotFound from './not-found';

const Routes = ()=> {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/artist/:id" component={Artist}></Route>
                <Route path="*" component={NotFound}></Route>                    
            </Switch>
        </Router>
    )
}

export default Routes;