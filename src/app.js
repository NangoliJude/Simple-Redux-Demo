import React, { Component } from 'react';
import Display from './container/display'
import Details from './container/details';
class App extends Component{
    render(){
        return(
            <div>
               <Display/>
               <Details/>
            </div>
        )
    }
};

export default App;