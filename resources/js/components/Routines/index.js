import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as routinesActions from '../../actions/routinesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/index.css';

const { 
    get
} = routinesActions;

const Routines = (props) => {
    const references = useRef([]);

    useEffect(() => {
        async function fetchData(){
            if(!props.routinesReducer.routines.length) await props.get();
        }
        fetchData();
    }, []);

    const renderContent = () => {
        if(props.routinesReducer.loading) return <Spinner />;
        if(props.routinesReducer.error) return <Fatal message={props.routinesReducer.error} />
        if(props.routinesReducer.routines.length){
            return(
                <div className="routines scrollable">
                    {renderTable()}
                </div>
            )
        }
        return;
    };

    const renderTable = () => props.routinesReducer.routines.map((rout) => {
        let descClass = "";
        if(rout.description)
            descClass = (rout.description.length > 200)
                ? 'big'
                : 'small';
        return(
            <div className="routine flex flex-col justifyc alignc" key={rout.id}>
                <button className="display-btn" onClick={() => showRoutine(rout.id)}>
                    {rout.name}
                </button>

                <div className="display-box none flex flex-col alignc" ref={el => references.current[rout.id] = el}>
                    <div className={`description ${descClass}`}>
                        {rout.description}
                    </div>
                    <div className="flex flex-row justifyc alignc">
                        <Link to={`/routines/${rout.id}`} className="btn play">
                            <i className="fa fa-play-circle-o"></i>Realizar
                        </Link>
                        {
                            (props.usersReducer.isOn) ?
                                <React.Fragment>
                                    <Link to={`/editroutines/${rout.id}`} className="btn edit">
                                        <i className="fa fa-edit"></i>Editar
                                    </Link>
                                    <button /*onClick={}*/ className="btn delete" id={rout.id}>
                                        <i className="fa fa-remove"></i>Eliminar
                                    </button>
                                </React.Fragment> : ''
                        }
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
            <div className="title flex flex-row justifyc alignc">
                <h1>Rutinas</h1>
                {
                    (props.usersReducer.isOn) ?
                        <Link to="/addroutine" className="add-btn">Crear Rutina</Link> : ''
                }
            </div>
            {renderContent()}
        </div>
    )
}

const mapStateToProps = ({routinesReducer, usersReducer}) => {
    return {routinesReducer, usersReducer};
}

const mapDispatchToProps = { get }

export default connect(mapStateToProps, mapDispatchToProps)(Routines);