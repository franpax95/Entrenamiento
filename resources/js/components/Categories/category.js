import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as categoriesActions from '../../actions/categoriesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Table from './Table';

import './styles/index.css';



const Category = (props) => {
    //const id = props.match.params.id;
    //const category = props.categories.filter(cat => cat.id == id)[0];

    //componentDidMount
    useEffect(() => {
        async function fetchData(){
            const id = props.match.params.id;
            if(!props.categories.length) await props.get();

            if((!props.exercises.length) || (props.exercises[0].category_id != props.match.params.id)){
                const category = props.categories.filter(cat => cat.id == id)[0];
                await props.getExercises(category);
            }
        }
        fetchData();
    }, []);

    const renderTable = () => {
        if(props.loading) return <Spinner />;
        if(props.error) return <Fatal message={props.error} />
        if(props.exercises.length) return <Table isExercises={true} catId={props.match.params.id} />
        return;
    }

    return(
        <div className="body Categories flex justifyc alignc">
            <div className="title">
                <h1>Categoría <i>{props.categories.filter(cat => cat.id == props.match.params.id)[0].name}</i></h1>
            </div>

            {renderTable()}
        </div>
    )
}


const mapStateToProps = ({categoriesReducer}) => categoriesReducer;
export default connect(mapStateToProps, categoriesActions)(Category);