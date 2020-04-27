import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as exercisesActions from '../../actions/exercisesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Table from './Table';

import './styles/index.css';


const Exercises = (props) => {
    //componentDidMount
    useEffect(() => {
        if(!props.exercises.length) props.get();
    }, []);

    const renderTable = () => {
        if(props.loading) return <Spinner />;
        if(props.error) return <Fatal message={props.error} />;
        return(<Table />);
    }

    return(
        <div className="body Exercises flex flex-col justifyc alignc">
            <div className="title flex flex-row jutifyc alignc">
                <h1>Ejercicios</h1>
                <Link to="/addexercise" className="add-btn">Crear Ejercicio</Link>
            </div>

            {renderTable()}
        </div>
    )
}


const mapStateToProps = ({exercisesReducer}) => exercisesReducer;
export default connect(mapStateToProps, exercisesActions)(Exercises);