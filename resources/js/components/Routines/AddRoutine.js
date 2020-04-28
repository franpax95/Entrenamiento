import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import * as routinesActions from '../../actions/routinesActions';
import * as categoriesActions from '../../actions/categoriesActions';
import * as exercisesActions from '../../actions/exercisesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/AddRoutine.css';


const { 
    get: getRoutines,
    addRoutine
} = routinesActions;

const { 
    get: getExercises 
} = exercisesActions;

const { 
    get: getCategories 
} = categoriesActions;



const AddRoutine = (props) => {
    const references = useRef([]);
    const [parameters, setParameters] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        async function fetchData(){
            if(!props.routinesReducer.routines.length) await props.getRoutines();
            if(!props.exercisesReducer.exercises.length) await props.getExercises();
            if(!props.categoriesReducer.categories.length) await props.getCategories();
            
        }
        fetchData();
    }, []);

    const save = () => {
        if(!name || !parameters.length){
            alert('¡Recuerda poner nombre a tu rutina y añadir al menos un ejercicio!');
        }else{
            const exercises=[], tOn=[], tOff=[], nRep=[];
            
            parameters.map((p) => {
                exercises.push(p.currentExercise);
                tOn.push(p.tOn);
                tOff.push(p.tOff);
                nRep.push(p.nRep);
            });

            const routine = {
                name,
                description,
                exercises,
                nRep,
                tOn,
                tOff
            }
            props.addRoutine(routine);
        }
    }

    const handleNameChange = (e) => {
        setName(e.currentTarget.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.currentTarget.value);
    }

    const handleToffChange = (e, opt_id) => {
        const new_parameters = parameters;
        const tOff = e.currentTarget.value;
        new_parameters[opt_id].tOff = tOff;
        setParameters([...new_parameters]);
    }

    const handleTonChange = (e, opt_id) => {
        const new_parameters = parameters;
        const tOn = e.currentTarget.value;
        new_parameters[opt_id].tOn = tOn;
        setParameters([...new_parameters]);
    }

    const handleNrepChange = (e, opt_id) => {
        const new_parameters = parameters;
        const nRep = e.currentTarget.value;
        new_parameters[opt_id].nRep = nRep;
        setParameters([...new_parameters]);
    }

    const handleExerciseChange = (e, opt_id) => {
        const new_parameters = parameters;
        const currentExercise = e.currentTarget.value;
        new_parameters[opt_id].currentExercise = currentExercise;
        setParameters([...new_parameters]);
    }

    const handleCategoryChange = (e, opt_id) => {
        const new_parameters = parameters;
        const currentCategory = e.currentTarget.value;
        const exercises = props.exercisesReducer.exercises.filter(f => f.category.id == currentCategory)

        new_parameters[opt_id].currentCategory = `${currentCategory}`;
        new_parameters[opt_id].exercises = exercises;
        new_parameters[opt_id].currentExercise = `${exercises[0].id}`;

        setParameters([...new_parameters]);
    }

    const renderExercises = () => parameters.map((opt) => (
        <div className="exercise flex flex-row alignc" ref={el => references.current[opt.id] = el} key={opt.id}>
            <div className="form-group cat">
                <label>Category</label>
                <select className="" name="category_id" onChange={(e) => handleCategoryChange(e, opt.id)} defaultValue={opt.currentCategory}>
                    {props.categoriesReducer.categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group ex">
                <label>Exercise</label>
                <select className="" name="exercise_id" onChange={(e) => handleExerciseChange(e, opt.id)} defaultValue={opt.currentExercise}>
                    {opt.exercises.map((ex) => (
                        <option key={ex.id} value={ex.id}>
                            {ex.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group nrep">
                <label>Nrep</label>
                <input type="number" name="nRep" min="0" defaultValue="0" onChange={(e) => handleNrepChange(e, opt.id)} />
            </div>

            <div className="form-group ton">
                <label>Ton</label>
                <input type="number" name="tOn" min="0" defaultValue="0" onChange={(e) => handleTonChange(e, opt.id)} />
            </div>

            <div className="form-group toff">
                <label>Toff</label>
                <input type="number" name="tOff" min="0" defaultValue="0" onChange={(e) => handleToffChange(e, opt.id)} />
            </div>

            <button className="delete-btn" onClick={() => alert('De momento inhabilitado')}>
                <i className="fa fa-remove"></i>
            </button>
        </div>
    ));

    const addExerciseInput = () => {
        const index = parameters.length;
        const categories = props.categoriesReducer.categories;
        const currentCategory = categories[0].id;
        const exercises = props.exercisesReducer.exercises.filter(f => f.category.id == currentCategory);
        
        const option = {
            id: index,
            currentCategory: `${currentCategory}`,
            exercises,
            currentExercise: `${exercises[0].id}`,
            nRep: "0",
            tOn: "0",
            tOff: "0"
        }
        setParameters([...parameters, option]);
    }

    const renderContent = () => {
        if(props.loading) return <Spinner />;
        if(props.error) return <Fatal message={props.error} />

        return(
            <div className="form flex flex-col alignc scrollable">
                <label>Nombre de la Rutina *</label>
                <input type="text" name="name" autoComplete="off" className="name" onChange={handleNameChange} required />

                <label>Descripción</label>
                <textarea name="description" className="description" onChange={handleDescriptionChange}></textarea>
                {((props.categoriesReducer.loading) || (props.exercisesReducer.loading) || (props.routinesReducer.loading)) ? <Spinner class={'small-spinner'}/> : <button onClick={() => addExerciseInput()} className="add" type="button">Añadir ejercicio</button>}
                <div className="exercises">
                    {renderExercises()}
                </div>
                            
                <button className="save" onClick={save}>
                    Añadir rutina
                </button>
            </div>
            
        )
    };




    return(
        <div className="body AddRoutine flex flex-col alignc">
            { (props.routinesReducer.goBack) ? <Redirect to='/routines' /> : '' }
            <h1>Añadir rutina</h1>
            {renderContent()}
        </div>
    )
}



const mapStateToProps = ({routinesReducer, exercisesReducer, categoriesReducer}) => {
    return {routinesReducer, exercisesReducer, categoriesReducer};
}

const mapDispatchToProps = {
    getRoutines,
    addRoutine,
    getExercises,
    getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRoutine);