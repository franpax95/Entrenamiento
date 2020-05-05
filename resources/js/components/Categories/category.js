import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as categoriesActions from '../../actions/categoriesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Table from './Table';

import './styles/index.css';



const Category = (props) => {
    //componentDidMount
    useEffect(() => {
        async function fetchData(){
            const id = props.match.params.id;
            if(!props.categories.length) await props.get();

            if((props.categories.length) && ((!props.exercises.length) || (props.exercises[0].category_id != props.match.params.id))){
                const category = props.categories.filter(cat => cat.id == id)[0];
                await props.getExercises(category);
            }
        }
        fetchData();
    }, [props]);

    const renderTable = () => {
        if(props.loading) return <Spinner />;
        if(props.error) return <Fatal message={props.error} />
        if(props.exercises.length) return <Table isExercises={true} catId={props.match.params.id} />
        return;
    }

    const renderSubTitle = () => {
        if(props.categories.length)
            return props.categories.filter(cat => cat.id == props.match.params.id)[0].name;
    }

    return(
        <div className="body Categories flex justifyc alignc">
            <div className="title flex flex-col justifyc alignc">
                <h1>Categoría</h1>
                <h2><i>{renderSubTitle()}</i></h2>
            </div>

            {renderTable()}
        </div>
    )
}


const mapStateToProps = ({categoriesReducer}) => categoriesReducer;
export default connect(mapStateToProps, categoriesActions)(Category);