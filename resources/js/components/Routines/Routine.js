import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as routinesActions from '../../actions/routinesActions';
import * as exercisesActions from '../../actions/exercisesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Timer from './Timer2';
import Counter from './Counter';

import './styles/Routine.css';

const { 
    get: getRoutines, 
    setRoutine,
    setCurrentKey
} = routinesActions;
const { get: getExercises } = exercisesActions;

const Routine = (props) => {
    const existsRoutine = () => {
        if(Object.entries(props.routinesReducer.routine).length) return true;
        return false;
    }

    const existsExercise = () => {
        if(Object.entries(props.routinesReducer.exercise).length) return true;
        return false;
    }

    useEffect(() => {
        async function fetchData(){
            const id = props.match.params.id;
            if(!props.routinesReducer.routines.length) await props.getRoutines();
            if(!props.exercisesReducer.exercises.length) await props.getExercises();

            if(
                props.routinesReducer.routines.length && 
                props.exercisesReducer.exercises.length
            ){
                let routine = props.routinesReducer.routines.filter(rout => rout.id == id)[0];
                let exercise = props.exercisesReducer.exercises.filter(ex => ex.id == routine.exercises[0].id)[0];
                if(routine && exercise){
                    props.setRoutine(routine, exercise);
                    props.setCurrentKey(0);
                }
            }
        }

        fetchData();
    }, [props.routinesReducer.routines, props.exercisesReducer.exercises]);

    const handleSidebarClick = (key) => {
        props.setCurrentKey(key);
        let newExercise = props.exercisesReducer.exercises.filter( (ex) => (ex.id == props.routinesReducer.routine.exercises[key].id) )[0];
        props.setRoutine(props.routinesReducer.routine, newExercise);
    }

    const renderSidebar = () => props.routinesReducer.routine.exercises.map((ex, key) => {
        let exercise = props.exercisesReducer.exercises.filter(exercise => exercise.id == ex.id)[0];
        //let divClass = (ex.id == props.routinesReducer.exercise.id) ? "active" : "";
        let divClass = (key == props.routinesReducer.currentKey) ? "active" : "";

        return(
            <div className={`ex ${divClass}`} key={key} onClick={() => handleSidebarClick(key)}>
                {key} - {exercise.name}
            </div>
        );
    });

    const renderExerciseHelper = () => {
        let ex = props.routinesReducer.routine.exercises[props.routinesReducer.currentKey];

        if(Number(ex.tOn) === 0){
            return <Counter 
                currentKey={props.routinesReducer.currentKey} 
                nRep={Number(ex.nRep)}
            />;
        }
        
        else{
            return <Timer 
                currentKey={props.routinesReducer.currentKey}
                nRep={Number(ex.nRep)}
                tOn={Number(ex.tOn)}
                tOff={Number(ex.tOff)}
            />;
        }
    }

    const renderExercise = () => (
        <React.Fragment>
            <h1 className="title">{props.routinesReducer.exercise.name}</h1>
            <h3 className="subtitle">Categoría <i>{props.routinesReducer.exercise.category.name}</i></h3>
            <div className="description">{props.routinesReducer.exercise.description}</div>
            <div className="img">
                {(props.routinesReducer.exercise.image) ? <img src={`/storage/${props.routinesReducer.exercise.image}`} alt={props.routinesReducer.exercise.name} /> : ''}
            </div>
            {renderExerciseHelper()}
        </React.Fragment>
    );

    const renderRoutine = () => {
        if(props.routinesReducer.loading || props.exercisesReducer.loading) return <Spinner />;
        if(props.routinesReducer.error) return <Fatal message={props.routinesReducer.error} />;
        if(props.exercisesReducer.error) return <Fatal message={props.exercisesReducer.error} />;

        return(
            <React.Fragment>
                <div className="sidebar scrollable">
                    {(existsRoutine()) ? renderSidebar() : ''}
                </div>
                <div className="exercise scrollable">
                    {(existsExercise()) ? renderExercise() : ''}
                </div>
            </React.Fragment>
        );
    }

    return(
        <div className="Routine">
            {renderRoutine()}
        </div>
    )
}

const mapStateToProps = ({routinesReducer, exercisesReducer}) => {
    return {routinesReducer, exercisesReducer};
}

const mapDispatchToProps = {
    getRoutines,
    getExercises,
    setRoutine,
    setCurrentKey
}

export default connect(mapStateToProps, mapDispatchToProps)(Routine);