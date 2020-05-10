import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as routinesActions from '../../actions/routinesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/index.css';

const Routines = (props) => {
    const references = useRef([]);

    useEffect(() => {
        async function fetchData(){
            if(!props.routines.length) await props.get();
            
        }
        fetchData();
    }, []);

    const renderContent = () => {
        if(props.loading) return <Spinner />;
        if(props.error) return <Fatal message={props.error} />
        if(props.routines.length){
            return(
                <div className="routines scrollable">
                    {renderTable()}
                </div>
                
            )
        }
        return;
    };

    const renderTable = () => props.routines.map((rout) => {
        return(
            <div className="routine flex flex-col justifyc alignc" key={rout.id}>
                <button className="display-btn" onClick={() => showRoutine(rout.id)}>
                    {rout.name}
                </button>

                <div className="display-box none flex flex-col justifyc alignc" ref={el => references.current[rout.id] = el}>
                    <div className="description">
                        {rout.description}
                    </div>
                    <div className="flex flex-row justifyc alignc">
                        <Link to={`/routines/${rout.id}`} className="btn play">
                            <i className="fa fa-play-circle-o"></i>Realizar
                        </Link>
                        <Link to={`/editroutines/${rout.id}`} className="btn edit">
                            <i className="fa fa-edit"></i>Editar
                        </Link>
                        <button /*onClick={}*/ className="btn delete" id={rout.id}>
                            <i className="fa fa-remove"></i>Eliminar
                        </button>
                    </div>
                </div>
            </div>
        )
    });

    const showRoutine = (id) => {
        references.current[id].parentNode.children[1].classList.toggle("none");
        references.current[id].parentNode.children[1].classList.toggle("visible");
    }

    return(
        <div className="body Routines flex flex-col justifyc alignc">
            <div className="title flex flex-row jutifyc alignc">
                <h1>Rutinas</h1>
                <Link to="/addroutine" className="add-btn">Crear Rutina</Link>
            </div>
            {renderContent()}
        </div>
    )
}

const mapStateToProps = ({routinesReducer}) => routinesReducer;
export default connect(mapStateToProps, routinesActions)(Routines);