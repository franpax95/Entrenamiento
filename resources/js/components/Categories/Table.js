import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as categoriesActions from '../../actions/categoriesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/Table.css';

const Table = (props) => {
    //componentDidMount
    // useEffect(() => {
    //     if((!props.categories.length)) props.get();
    //     //console.log(props.categories);
    // }, [props]);

    useEffect(() => {
        function fetchData(){
            /* en caso de eliminar una categoría, las busco de nuevo */
            if(!props.categories.length)  props.get();

            /* en caso de eliminar algún ejercicio... se buscaría de nuevo */
            // if((props.catId) && (!props.exercises.length)){
            //     const category = props.categories.filter(cat => cat.id == props.catId)[0];
            //     props.getExercises(category);
            //     console.log('aqui entra');
            //     console.log(props.exercises);
            // }
        }
        
        fetchData();
    }, [props.categories, props.exercises]);
    

    const renderCategories = () => props.categories.map((cat) => (
        <div className="elem flex flex-row justifyc alignc" key={cat.id}>
            <Link to={`/categories/${cat.id}`} className="name">
                {cat.name}
            </Link>
            <div className="edit flex justifyc alignc">
                <button className="edit-btn">
                    <Link to={`/editcategory/${cat.id}`} >
                        Editar
                    </Link>
                </button>
            </div>
            <div className="delete flex justifyc alignc">
                <button className="delete-btn" onClick={() => props.erase(cat.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    ));

    const renderCategoriesTable = () => {
        if(props.loading) return <Spinner />;
        if(props.error) return <Fatal message={error} />;
        if(props.categories.length) return renderCategories();
        
    }

    const renderExercises = () => props.exercises.map((ex) => {
        return(
            <div className="elem flex flex-row justifyc alignc" key={ex.id}>
                <div className="img">
                    {(ex.img) ? <img src={ex.img} alt={ex.name} /> : ''}
                </div>
                <Link to="" className="name">
                    {ex.name}
                </Link>
                <div className="edit flex justifyc alignc">
                    <button className="edit-btn">
                        <Link to="" >
                            Editar
                        </Link>
                    </button>
                </div>
                <div className="delete flex justifyc alignc">
                    <button className="delete-btn" onClick={() => props.erase(cat.id)}>
                        Eliminar
                    </button>
                </div>
            </div>
        )
    });

    const renderExercisesTable = () => {
        if(props.loading) return <Spinner />;
        if(props.error) return <Fatal message={error} />;
        if(props.exercises.length) return renderExercises();
    }


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

const mapStateToProps = ({categoriesReducer}) => categoriesReducer;
export default connect(mapStateToProps, categoriesActions)(Table);