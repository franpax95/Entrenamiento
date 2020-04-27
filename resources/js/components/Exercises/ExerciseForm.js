import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import * as exercisesActions from '../../actions/exercisesActions';
import * as categoriesActions from '../../actions/categoriesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/ExerciseForm.css';

const {
    changeName,
    changeCategory,
    changeDescription,
    changeImage,
    addExercise
} = exercisesActions;
const { get: categoriesGet } = categoriesActions;




const ExerciseForm = (props) => {
    const selectRef = useRef(null);

    useEffect(() => {
        async function fetchData(){
            //Recoger id de props.match.params en caso de editar para cambiar valores
            //Limpiar form en caso de añadir

            //Nos traemos las categorías (de momento sin await)
            if(!props.categoriesReducer.categories.length) await props.categoriesGet();

            //Para que inicialice con el valor de option. Si no se hace, el estado está en ''
            props.changeCategory(selectRef.current.value);
        }
        fetchData();

    }, []);

    const handleNameChange = (e) => { props.changeName(e.target.value); }
    const handleCategoryChange = (e) => { props.changeCategory(e.target.value); }
    const handleDescriptionChange = (e) => { props.changeDescription(e.target.value); }
    const handleImgChange = (e) => { props.changeImage(e.target.files[0]); }

    const renderCategorySelect = () => {
        if(props.categoriesReducer.loading) return <Spinner class={'small-spinner'}/>
        if(props.categoriesReducer.error) return <Fatal message={props.categoriesReducer.error} />

        return (
            <select name="category_id" onChange={handleCategoryChange} ref={selectRef}>
                {renderCategoryOptions()} 
            </select>
        )
    }

    const renderCategoryOptions = () => props.categoriesReducer.categories.map((cat) => (
        <option value={cat.id} key={cat.id}>{cat.name}</option>
    ));

    const save = () => {
        /* No hace falta validar category desde que siempre hay alguno seleccionado */
        if(!props.exercisesReducer.exName){ 
            alert('¡Ponle nombre a tu ejercicio!'); 
        }

        else{
            const formData = new FormData();
            formData.append('name', props.exercisesReducer.exName);
            formData.append('category_id', props.exercisesReducer.exCategory);
            formData.append('description', props.exercisesReducer.exDescription);
            formData.append('image', props.exercisesReducer.exImg);
            props.addExercise(formData);
        }
        
    }

    const showAction = () => {
        if(props.exercisesReducer.loading) return <Spinner />;
        if(props.exercisesReducer.error) return <Fatal message={props.exercisesReducer.error} />;
    }

    return(
        <div className="body ExerciseForm flex flex-col  alignc">
            { (props.exercisesReducer.goBack) ? <Redirect to='/exercises' /> : '' }
            <div className="form flex flex-col justifyc alignc">
                <h1>{props.title}</h1>

                <div className="content flex flex-col  alignc scrollable">
                    <label>Nombre del ejercicio *</label>
                    <input type="text" name="name" autoComplete="off" onChange={handleNameChange} required />

                    <label>Categoría *</label>
                    {renderCategorySelect()}

                    <label>Descripción del ejercicio</label>
                    <textarea name="description" onChange={handleDescriptionChange}></textarea>

                    <label>Imagen</label>
                    {/* <form encType="multipart/form-data"> */}
                        <input type="file" name="image" onChange={handleImgChange}/>
                    {/* </form> */}
                    

                    <button onClick={save}>
                        {props.title}
                    </button>
                    {showAction()}
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = ({exercisesReducer, categoriesReducer}) => {
    return {exercisesReducer, categoriesReducer};
}

const mapDispatchToProps = {
    categoriesGet,
    changeName,
    changeCategory,
    changeDescription,
    changeImage,
    addExercise
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseForm);