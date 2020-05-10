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

import Categories from './Categories';
import Category from './Categories/category';
import CategoryForm from './Categories/CategoryForm';

import Exercises from './Exercises';
import Exercise from './Exercises/exercise';
import ExerciseForm from './Exercises/ExerciseForm';

import Routines from './Routines';
import Routine from './Routines/Routine';
import AddRoutine from './Routines/AddRoutine';


const App = (props) => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Index} />

            <Route exact path='/categories' component={Categories} />
            <Route exact path='/categories/:id' component={Category} />
            <Route exact path='/addcategory' component={ (props) => <CategoryForm {...props} title={'Añadir Categoría'} /> } />
            <Route exact path='/editcategory/:id' component={ (props) => <CategoryForm {...props} title={'Editar Categoría'} /> } />

            <Route exact path='/exercises' component={Exercises} />
            <Route exact path='/addexercise' component={ (props) => <ExerciseForm {...props} title={'Añadir Ejercicio'} /> } />
            <Route exact path='/exercises/:id' component={Exercise} />
            

            <Route exact path='/routines' component={Routines} />
            <Route exact path='/routines/:id' component={Routine} />
            <Route exact path='/addroutine' component={AddRoutine} />


            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App;





if (document.getElementById('app')) {
    const app = document.getElementById('app');
    const props = Object.assign({}, app.dataset);
    //console.log(props);

    const store = createStore(
        reducers,
        {},
        applyMiddleware(reduxThunk)
    );

    ReactDOM.render(
        <Provider store={store}>
            <App {...props}/>
        </Provider>, 
        app
    );
}