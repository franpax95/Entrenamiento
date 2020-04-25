import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as categoriesActions from '../../actions/categoriesActions';

import './styles/Table.css';

const Table = (props) => {


    const renderCategories = () => props.categories.map((cat) => (
        <div className="elem flex flex-row justifyc alignc" key={cat.id}>
            <Link to="" className="name">
                {cat.name}
            </Link>
            <div className="edit flex justifyc alignc">
                <button>Editar</button>
            </div>
            <div className="delete flex justifyc alignc">
                <button>Eliminar</button>
            </div>
        </div>
    ));

    const renderExercises = () => (
        <div>Exercises</div>
    )


    if(props.isCategories){
        return(
            <div className="table-cat scrollable">
                {renderCategories()}
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