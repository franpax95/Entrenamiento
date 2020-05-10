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
            if(!props.exercises.length) await props.get();

            if(
                (props.exercises.length) && 
                (!props.loading) && 
                (
                    (!Object.entries(props.exercise).length) || 
                    (props.exercise.id != id)
                )
            ){
                const exercise = props.exercises.filter(ex => ex.id == id)[0];
                await props.show(exercise);
            }
        }
        fetchData();
    }, [props.exercises]);

    const renderImg = () => {
        if(props.exercise.image){
            return(
                <img src={`/storage/${props.exercise.image}`} alt={props.exercise.name} />
            )
        }
    }

    const renderExercise = () => {
        if(props.loading) return <Spinner />;
        if(props.error) return <Fatal message={props.error} />

        if(Object.entries(props.exercise).length){
            return(
                <div className="content flex flex-col justifyc alignc">
                    <h1>{props.exercise.name}</h1>
                    <h3>
                        <i className="fa fa-minus"></i>
                        <span className="category">{props.exercise.category.name}</span>
                        <i className="fa fa-minus"></i>
                    </h3>
                    <p>{props.exercise.description}</p>
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

const mapStateToProps = ({exercisesReducer}) => exercisesReducer;
export default connect(mapStateToProps, exercisesActions)(Exercise);