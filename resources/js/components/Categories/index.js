import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as categoriesActions from '../../actions/categoriesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Table from './Table';

import './styles/index.css';



const Categories = (props) => {
    //componentDidMount
    useEffect(() => {
        async function fetchData(){
            if(
                (!props.categoriesReducer.categories.length)
                && (!props.categoriesReducer.loading)
                && (!props.categoriesReducer.error)
            ) await props.get();
            //console.log(props.categoriesReducer.categories)
        }
        fetchData();
    }, []);
    

    const renderTable = () => {
        if(props.categoriesReducer.loading) return <Spinner />;
        if(props.categoriesReducer.error) return <Fatal message={props.categoriesReducer.error} />
        return(<Table isCategories={true} />)
    }

    return(
        <div className="body Categories flex justifyc alignc">
            <div className="title flex flex-row jutifyc alignc">
                <h1>Categorías</h1>
                { (props.usersReducer.isOn) ? <Link to="/addcategory" className="add-btn">Crear Categoría</Link> : '' }
            </div>

            {renderTable()}
        </div>
    )
}


const mapStateToProps = ({categoriesReducer, usersReducer}) => {
    return {categoriesReducer, usersReducer};
}

export default connect(mapStateToProps, categoriesActions)(Categories);