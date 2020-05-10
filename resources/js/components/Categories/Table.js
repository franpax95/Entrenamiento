import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as categoriesActions from '../../actions/categoriesActions';
import * as exercisesActions from '../../actions/exercisesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/Table.css';

const { clean: cleanExercises } = exercisesActions;
const {
    get,
    erase,
} = categoriesActions;

const Table = (props) => {
    /* componentDidMount & componentDidUpdate */
    useEffect(() => {
        function fetchData(){
            /* en caso de eliminar una categoría, las busco de nuevo */
            if(!props.categoriesReducer.categories.length) props.get();

            /* en caso de eliminar algún ejercicio... se buscaría de nuevo */
            // if((props.catId) && (!props.exercises.length)){
            //     const category = props.categories.filter(cat => cat.id == props.catId)[0];
            //     props.getExercises(category);
            //     console.log('aqui entra');
            //     console.log(props.exercises);
            // }
        }
        
        fetchData();
    }, [props.categoriesReducer.categories, props.categoriesReducer.exercises]);

    const handleDeleteCategoryClick = (catId) => {
        props.erase(catId);
        props.cleanExercises();
    }
    

    const renderCategories = () => props.categoriesReducer.categories.map((cat) => (
        <div className="elem flex flex-row justifyc alignc" key={cat.id}>
            <Link to={`/categories/${cat.id}`} className="name">
                {cat.name}
            </Link>
            <div className="edit flex justifyc alignc">
                {
                    (props.usersReducer.isOn) ? 
                        <button className="edit-btn">
                            <Link to={`/editcategory/${cat.id}`} >
                                Editar
                            </Link>
                        </button> : ''
                }
            </div>
            <div className="delete flex justifyc alignc">
                {
                    (props.usersReducer.isOn) ? 
                        <button className="delete-btn" onClick={() => handleDeleteCategoryClick(cat.id)}>
                            Eliminar
                        </button> : ''
                }
            </div>
        </div>
    ));

    const renderCategoriesTable = () => {
        if(props.categoriesReducer.loading) return <Spinner />;
        if(props.categoriesReducer.error) return <Fatal message={error} />;
        if(props.categoriesReducer.categories.length) return renderCategories();
        
    }


    /**Exercises */
    const renderExercises = () => props.categoriesReducer.exercises.map((ex) => {
        return(
            <div className="elem flex flex-row justifyc alignc" key={ex.id}>
                <div className="img">
                    {(ex.image) ? <img src={`${ex.image}`} alt={ex.name} /> : ''}
                </div>
                <Link to={`/exercises/${ex.id}`} className="name">
                    {ex.name}
                </Link>
                <div className="edit flex justifyc alignc">
                    {
                        (props.usersReducer.isOn) ? 
                            <button className="edit-btn"><Link to="" >Editar</Link></button> : ''
                    }
                    
                </div>
                <div className="delete flex justifyc alignc">
                    {
                        (props.usersReducer.isOn) ? 
                            <button 
                                className="delete-btn" 
                                /*onClick={() => props.erase(ex.id) CUIDADO! AHORA MISMO BORRARÍA LA CATEGORÍA id=ex.id, es decir, cualquiera} */
                                onClick={() => {alert('Deshabilitado, de momento.')}}
                            >
                                Eliminar
                            </button> : ''
                    }
                    
                </div>
            </div>
        )
    });

    const renderExercisesTable = () => {
        if(props.categoriesReducer.loading) return <Spinner />;
        if(props.categoriesReducer.error) return <Fatal message={error} />;
        if(props.categoriesReducer.exercises.length) return renderExercises();
    }



    //Main Render
    if(props.isCategories){
        return(
            <div className="table-cat scrollable">
                {renderCategoriesTable()}
            </div>
        )
    }

    if(props.isExercises){
        return(
            <div className="table-ex scrollable">
                {renderExercisesTable()}
            </div>
        )
    }
    
}

const mapStateToProps = ({exercisesReducer, categoriesReducer, usersReducer}) => {
    return {exercisesReducer, categoriesReducer, usersReducer};
}

const mapDispatchToProps = {
    erase,
    get,
    cleanExercises
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);