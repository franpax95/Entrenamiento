import React from 'react';

import { connect } from 'react-redux';
import * as exercisesActions from '../../actions/exercisesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/index.css';

const Exercise = (props) => {

    return(
        <div className="body Exercise flex flex-col justifyc alignc">
            <h1>{props.exercise.name}</h1>
            <h3>
                <i className="fa fa-minus"></i>
                <span className="category">{props.exercise.category.name}</span>
                <i className="fa fa-minus"></i>
            </h3>
            <p>{props.exercise.description}</p>
        </div>
    )
}

const mapStateToProps = ({exercisesActions}) => exercisesActions;
export default connect(mapStateToProps, exercisesActions)(Exercise);