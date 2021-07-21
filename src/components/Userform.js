import React, { Fragment, useReducer } from  'react';

/*
useReducer es un Hook que maneja el estado de nuestro componente.
Trabaja con una función que esta encaragada de manejar el estado, modificarlo , obtenerlo etc.
Con el Hook vamos a poder decirle con que funcion estanos trabajando o inicializando. 
Luego el estado lo vamos a poder utilizar en cualquier parte de nuestro componente.
*/
    
    
const Userform = (props) => {

    /*
        COMO FUNCIONA USEREDUCER
        Primero obtenemos dos cosas primero el estado (state) en el que se encuentran las variables del componente,
        Segundo una función dispatch en la cual va a poder lanzar accciones que van a repercutir en el useReducer que creemos.
    */

    // 
     const initialState = {

         FirstName : '',
         LastName : '',
         Email : '',
         Password : '',
         ConfirmPassword : '',

         validationErrs: {
            FirstName : '',
            LastName : '',
            Email : '',
            Password : '',
            ConfirmPassword : ''
         },
         isSubmiting: false
     }   

    /*
        Se crea una funcion reducer, esta es una función pura que no debe modificar el
        estado original si no debe retronar un nuevo estado. Para esto tendremos dos parametros;
        state (Estado actual), action ( La acción que estamos enviando ).
    */

    const reducer = (state,action) =>{
        // Este log recibe la data de dispatch({type:'CH_NOMBRE', value:event.target.value}) 
        console.log('Valor de action-->', state);
        /*
        Podemos eveluar el type con un switch o sea evaluamos
         que dato esta llegando (O sea evalua que tipo de dispatch esta llegando)
        */
        switch (action.type) {
                // Si pasa la accion nombre que es el que deseo hacer
                case 'CH_FIRSTNAME' : {
                 // Aqui retornamos un objeto que represente todo el estado que ya tenemos
                 /*
                 Esto es diferente al useState aqui el estado 
                 se machaca entero 
                 */
                 return {
                     // Para asegurarnos que el estado se mantenga inmutable usamos un spred operator que tomo todo 
                     // El estado anterior y lo guarda
                     ...state,
                     // Luego modificamos sólo el campo que nos interesa que es nombre
                     FirstName:action.value,
                     validationErrs: {
                        ...state.validationErrs
                      }
                 }
                }
               

                case 'CH_LASTNAME' : {
                    return{
                        ...state,
                        LastName:action.value
                    }
                }

                case 'CH_EMAIL' : {
                    return{
                        ...state,
                        Email:action.value
                    }
                }

                case 'CH_PASSWORD' : {
                    return{
                        ...state,
                        Password:action.value
                    }
                }

                case 'CH_CONFIRMPASSWORD' : {
                    return{
                        ...state,
                        ConfirmPassword:action.value
                    }
                }

                case 'RESET' : {

                    return initialState
                }

                case "SUBMIT_VALIDATE":
                    return {
                      ...state,
                      validationErrs: {
                        Email : '',
                        Password : '',
                        ...validateOnSubmit(state)
                      },
                      isSubmiting: true
                }

                default:
                    console.log('default desde el switch');

        }
        return state;
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(state);
    }

   const [state, dispatch] = useReducer(reducer, initialState); // El useReducer va a contener una funcíon que contendra el estado inicial del componente y la accion que se ejecute en reducer

    return(
         <Fragment>

            <form className="contentForm" onSubmit={handleSubmit}>
                <div className="contentForm__group">
                    <label>First Name</label>
                    <input 
                     type="text"
                     placeholder="First Name" 
                     className="form-control" 
                     name="FirstName" 
                     value={state.FirstName}

                     /*
                        onChage toma el valor cuando va cambiando, pero en useReducer
                        el cambio de valor ya no pasa por el onChange pasa por el dispatch 
                        y este pase la accion al reducer para esto llamamos a la funcion 
                        dispatch() esta tiene un objeto con dos valores:
                        type:'' (Tipo de accion),
                        value:event.target.value

                        El dispatch mando este objeto y lo manda a reducer en action
                     */
                     onChange={(event) => {
                         dispatch({type:'CH_FIRSTNAME', value:event.target.value}) 
                     }}

                     />
                </div>
                {state.validationErrs.FirstName?
                    <span className="validation-errors" dangerouslySetInnerHTML={{ __html:state.validationErrs.FirstName}}></span>
                :
                null
                }
  
                <div className="contentForm__group">
                    <label>Last Name</label>
                    <input type="text"
                        placeholder="Last Name"
                        className="form-control"
                        name="LastName" 
                        value={state.LastName}
                        onChange={(event) => {
                            dispatch({type:'CH_LASTNAME', value:event.target.value}) 
                        }}
                     />
                </div>

                {state.validationErrs.LastName?
                    <span className="validation-errors" dangerouslySetInnerHTML={{ __html: state.validationErrs.LastName}}></span>
                :
                null
                }
               
    
                <div className="contentForm__group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        name="Email"
                        value={state.Email}
                        onChange={(event) => {
                            dispatch({type:'CH_EMAIL', value:event.target.value}) 
                        }}
                    />
                </div>
                {state.validationErrs.Email?
                    <span className="validation-errors" dangerouslySetInnerHTML={{ __html:state.validationErrs.Email}}></span>
                :
                null
                }
 
                <div className="contentForm__group">
                    <label>Password</label>
                    <input 
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      name="Password" 
                      value={state.Password}
                      onChange={(event) => {
                        dispatch({type:'CH_PASSWORD', value:event.target.value}) 
                      }}
                    />
                </div>

                {state.validationErrs.Password?
                    <span className="validation-errors" dangerouslySetInnerHTML={{ __html:state.validationErrs.Password}}></span>
                :
                null
                }


                <div className="contentForm__group">
                    <label>Confirm Password</label>
                    <input 
                     type="password"
                     placeholder="Confirm Password"
                     className="form-control"
                     name="ConfirmPassword"
                     value={state.ConfirmPassword}
                     onChange={(event) => {
                        dispatch({type:'CH_CONFIRMPASSWORD', value:event.target.value}) 
                     }}
                     />
                </div>
                {state.validationErrs.ConfirmPassword?
                    <span className="validation-errors" dangerouslySetInnerHTML={{ __html:state.validationErrs.ConfirmPassword}}></span>
                :
                null
                }
       
                <button type="submit" onClick={ ()=>dispatch({type:'SUBMIT_VALIDATE'}) }  className="contentForm__btn">Send</button>
            </form>
            <button type="submit" onClick={ ()=>dispatch({type:'RESET'}) } className="contentForm__btn-reset">RESET FORM</button>
        </Fragment>
    );
};
    
export default Userform;

    // Validation functions
    function validateOnSubmit(state) {

        const { FirstName, LastName, Email, Password, ConfirmPassword } = state;

        let validationErrs = {};

        console.log('validationErrs-->',validationErrs)

        // Validacion Primer Nombre
        if (!FirstName) {
            validationErrs.FirstName = "Se requiere el Nombre";
        }else if (FirstName.length < 10){
            validationErrs.FirstName = "El nombre debe tener al menos 10 caracteres";
        }

        // Validacion Primer Nombre
        if (!LastName) {
            validationErrs.LastName = "Se requiere el segundo nombre";
        }else if (FirstName.length < 10){
            validationErrs.LastName = "El nombre debe tener al menos 10 caracteres";
        }

        
        // Validacion de Email
        if (!Email) {
            validationErrs.Email = "Correo electronico es requerido";
            console.log('validationErrs.Email---Correo electronico es requerido')
        }
        else if (!/\S+@\S+\.\S+/.test(Email)){
            validationErrs.Email = "Debería ser un correo electrónico";
            console.log('validationErrs.Email---Debería ser un correo electrónico')
        }
       
        // Validacion de Password
        if (!Password) {
            validationErrs.Password = "Se requiere contraseña";
        }else if (Password.length < 10){
            validationErrs.Password = "La contraseña debe tener al menos 10 caracteres";
        }

        // Validacion de Password
        if (!ConfirmPassword) {
            validationErrs.ConfirmPassword = "Se requiere contraseña";
        }else if (ConfirmPassword.length < 10){
            validationErrs.ConfirmPassword = "La contraseña debe tener al menos 10 caracteres";
        }
       

        return validationErrs;
    }