import React from 'react';
import {Switch,Route} from 'react-router-dom';

import {Galeria,Home} from "./pages"

function Routes() {
    return(

            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/galeria" exact component={Galeria}/>
            </Switch>

    );
}

export default Routes;