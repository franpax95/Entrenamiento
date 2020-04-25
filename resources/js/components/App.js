import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import reduxThunk from 'redux-thunk';

import './App.css';

import Navbar from './General/Navbar';
import Index from './General/Index';
import NotFound from './General/NotFound';

// import Categories from './Categories/Categories';
// import Category from './Categories/Category';
// import AddCategory from './Categories/AddCategory';
// import EditCategory from './Categories/EditCategory';

// import Exercises from './Exercises/Exercises';
// import Exercise from './Exercises/Exercise';
// import AddExercise from './Exercises/AddExercise';

// import Routines from './Routines/Routines';
// import AddRoutine from './Routines/AddRoutine';


const App = (props) => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Index} />

            {/* <Route exact path='/categories' component={Categories} />
            <Route exact path='/category/:id' component={Category} />
            <Route exact path='/addcategory' component={AddCategory} />
            <Route exact path='/editcategory/:id' component={EditCategory} />

            <Route exact path='/exercises' component={Exercises} />
            <Route exact path='/exercise/:id' component={Exercise} />
            <Route exact path='/addexercise' component={AddExercise} />

            <Route exact path='/routines' component={Routines} />
            <Route exact path='/addroutine' component={AddRoutine} />

            <Route exact path='/prueba' component={Prueba} /> */}

            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App;

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
);

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('app')
    );
}