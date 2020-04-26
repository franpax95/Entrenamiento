import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as categoriesActions from '../../actions/categoriesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/Table.css';

const Table = (props) => {
    //componentDidMount
    useEffect(() => {
        if((!props.categories.length)) props.get();
        //console.log(props.categories);
    }, [props]);
    

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
        if(props.cargando) return <Spinner />;
        if(props.error) return <Fatal message={error} />;

        if(props.categories.length){ 
            //console.log('rerender!');
            return renderCategories();
        }
        
    }

    const renderExercises = () => (
        <div>Exercises</div>
    )


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
                {renderExercises()}
            </div>
        )
    }
    
}

const mapStateToProps = ({categoriesReducer}) => categoriesReducer;
export default connect(mapStateToProps, categoriesActions)(Table);