import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import * as categoriesActions from '../../actions/categoriesActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import './styles/CategoryForm.css';


const CategoryForm = (props) => {
    //componentDidMount
    useEffect(() => {
        const { match: { params: { id } } } = props;
        if(id){
            const category = props.categoriesReducer.categories.filter(cat => cat.id == id)[0];
            props.changeName(category.name);
        }else{
            props.resetForm();
        }
    }, []);


    const handleNameChange = (e) => {
        props.changeName(e.target.value);
    }

    const save = () => {
        if(!props.categoriesReducer.catName){ 
            alert('Inserta un nombre antes de enviar, por favor.'); 
        }
        
        else{
            const { match: { params: { id } } } = props;
            if(id){
                const category = props.categoriesReducer.categories.filter(cat => cat.id == id)[0];
                const new_cat = {
                    id: category.id,
                    name: props.categoriesReducer.catName
                };
                props.editCategory(new_cat);
            }else{
                const category = { name: props.categoriesReducer.catName }
                props.addCategory(category);
            }
        }
    }

    const showAction = () => {
        if(props.categoriesReducer.loading) return <Spinner />;
        if(props.categoriesReducer.error) return <Fatal message={props.categoriesReducer.error} />;
    }



    return(
        <div className="body CategoryForm flex justifyc alignc">
            {
                /* Redirecting */
                (props.categoriesReducer.goBack || (!props.usersReducer.isOn)) ? 
                    <Redirect to='/categories' /> : '' 
            }
            
            <div className="form flex flex-col justifyc alignc">
                <h1>{props.categoriesReducer.title}</h1>{/** Le pasamos el título Añadir o Editar categoría */}

                <div className="content flex flex-col justifyc alignc">
                    <label>Nombre de la categoría</label>
                    <input 
                        type="text"
                        value={props.categoriesReducer.catName}
                        onChange={handleNameChange}
                    />

                    <button onClick={save} >
                        {props.categoriesReducer.title}
                    </button>

                    {showAction()}
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = ({categoriesReducer, usersReducer}) => {
    return {categoriesReducer, usersReducer};
}
export default connect(mapStateToProps, categoriesActions)(CategoryForm);