import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as exercisesActions from '../../actions/exercisesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/Exercise.css';

const Exercise = (props) => {
    //componentDidMount
    useEffect(() => {
        async function fetchData(){
            const id = props.match.params.id;
            if(!props.exercisesReducer.exercises.length) await props.get();

            if(
                (props.exercisesReducer.exercises.length) && 
                (!props.exercisesReducer.loading) && 
                (
                    (!Object.entries(props.exercisesReducer.exercise).length) || 
                    (props.exercisesReducer.exercise.id != id)
                )
            ){
                const exercise = props.exercisesReducer.exercises.filter(ex => ex.id == id)[0];
                await props.show(exercise);
            }
        }
        fetchData();
    }, [props.exercisesReducer.exercises]);

    const renderImg = () => {
        if(props.exercisesReducer.exercise.image){
            return(
                <img src={`${props.exercisesReducer.exercise.image}`} alt={props.exercisesReducer.exercise.name} />
            )
        }
    }

    const renderExercise = () => {
        if(props.exercisesReducer.loading) return <Spinner />;
        if(props.exercisesReducer.error) return <Fatal message={props.exercisesReducer.error} />

        if(Object.entries(props.exercisesReducer.exercise).length){
            return(
                <div className="content">
                    <h1>{props.exercisesReducer.exercise.name}</h1>
                    <h3>
                        <i className="fa fa-minus"></i>
                        <span className="category">{props.exercisesReducer.exercise.category.name}</span>
                        <i className="fa fa-minus"></i>
                    </h3>
                    <p>{props.exercisesReducer.exercise.description}</p>
                    {renderImg()}
                </div>
            )
        }
    }

    return(
        <div className="body Exercise flex flex-col justifyc alignc">
            {renderExercise()}
        </div>
    )
}

const mapStateToProps = ({exercisesReducer, usersReducer}) => {
    return {exercisesReducer, usersReducer};
}
export default connect(mapStateToProps, exercisesActions)(Exercise);