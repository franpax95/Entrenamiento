import React from 'react';
import './styles/Spinner.css';

const Spinner = (props) => (
    <div className={`lds-ring ${props.class}`}><div></div><div></div><div></div><div></div></div>
)

export default Spinner;