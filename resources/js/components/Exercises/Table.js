import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as exercisesActions from '../../actions/exercisesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/Table.css';

const Table = (props) => {
    useEffect(() => {
        function fetchData(){
            /* en caso de eliminar una categoría, las busco de nuevo */
            if(!props.exercises.length) props.get();
        }
        
        fetchData();
    }, [props.exercises]);

    const renderExercises = () => props.exercises.map((ex) => {
        return(
            <div className="elem flex flex-row justifyc alignc" key={ex.id}>
                <Link to="" className="content flex flex-row justifyc alignc">
                    <div className="img">
                        {(ex.image) ? (<img src={`storage/${ex.image}`} alt={ex.name} />) : ''}
                    </div>
                    <div className="name">
                        {ex.name}
                    </div>
                    <div className="category flex flex-col justifyc alignc">
                        <i>{ex.category.name}</i>
                    </div>
                </Link>
                <div className="edit flex justifyc alignc">
                    <button className="edit-btn">
                        <Link to="" >
                            Editar
                        </Link>
                    </button>
                </div>
                <div className="delete flex justifyc alignc">
                    <button className="delete-btn" /*onClick={() => props.erase(cat.id)}*/ >
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

    return(
        <div className="table scrollable">
            {renderExercisesTable()}
        </div>
    )
}

const mapStateToProps = ({exercisesReducer}) => exercisesReducer;
export default connect(mapStateToProps, exercisesActions)(Table);