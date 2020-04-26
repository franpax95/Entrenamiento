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
        if(!props.categories.length) props.get();
    }, []);

    const renderTable = () => {
        if(props.loading) return <Spinner />;
        if(props.error) return <Fatal message={props.error} />
        return(<Table isCategories={true} />)
    }

    return(
        <div className="body Categories flex justifyc alignc">
            <div className="title">
                <h1>Category</h1>
            </div>
        </div>
    )
}


const mapStateToProps = ({categoriesReducer}) => categoriesReducer;
export default connect(mapStateToProps, categoriesActions)(Category);