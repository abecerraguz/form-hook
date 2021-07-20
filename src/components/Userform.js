import React, { Fragment, useState } from  'react';

    
    
const Userform = (props) => {

// Similar a componentDidMount y componentDidUpdate:
//    useEffect(() => {
//       
//         let find = document.querySelector('.contentForm')
//         find.innerHTML.replace(/\&nbsp;/g, '')
//         console.log('find-->', find.innerHTML);   
//    });

    const [datos, setDatos] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
    })

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mail, setMail] = useState("");
    const [passworduno, setPassworduno] = useState("");
    const [passworddos, setPassworddos] = useState("");


 


    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log('Holaaaaaaaa',event.target.value.length)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })

        // console.log('events-->', event.target.name);
        if(event.target.name === 'FirstName'){
            if(event.target.value.length >= 2){
                setFirstname(null);
            }else{
                setFirstname('El primer nombre debe tener al menos 2 caracteres')
            }
        }

        if(event.target.name === 'LastName'){
            if(datos.LastName.length >= 2){
                setLastname(null);
            }else{
                setLastname('El Segundo nombre debe tener al menos 2 caracteres')
            }
        }

        if(event.target.name === 'Email'){
            if(datos.Email.length > 5){
                setMail(null);
            }else{
                setMail('El Email debe tener al menos 5 caracteres')
            }
        }

        if(event.target.name === 'Password'){

            if(datos.Password.length >= 8){
                setPassworduno(null);
            }else{
                setPassworduno('Las contraseñas deben coincidir y tener al menos 8 caracteres')
            }

            
        }

        if(event.target.name === 'ConfirmPassword'){
            console.log('datos.ConfirmPassword === datos.Password-->', event.target.value)
            if(datos.ConfirmPassword.length > 8 && datos.ConfirmPassword.value === datos.Password.value){
                setPassworddos(null);
            }else{
                setPassworddos('Las contraseñas deben coincidir y tener al menos 8 caracteres')
            }
        }


    }
    



    const enviarDatos = (event) => {
        event.preventDefault()
        // if(datos.FirstName == "" || datos.LastName == "" || datos.Email == "" || datos.Password == ""){
        //     setTitleError("Debe ingresar los datos!");
        //     console.log('Debe ingresar los datos');
        // }
       
        if(datos.FirstName !== "" || datos.LastName !== "" || datos.Email !== "" || datos.Password !== ""){
            setHasBeenSubmitted(true);
            let obj = {
                firstName : datos.FirstName,
                LastName :datos.LastName,
                Email : datos.Email,
                password : datos.Password,
                confirmPasword : datos.ConfirmPassword
            }
    
            let formAfter = document.querySelector('.resData');
    
            formAfter.innerHTML = `
                <ul>
                <h4>Your Form Data</h4>
                <li>First Name : ${obj.firstName}</li>
                <li>Last Name : ${obj.LastName}</li>
                <li>Email : ${obj.Email}</li>
                <li>Password : ${obj.password}</li>
                </ul>
            `;
        } 
    }


    
    return(
         <Fragment>
            {hasBeenSubmitted ? 
                <h1>¡Gracias por enviar el formulario!</h1>
                :
                <h1>Bienvenido, envíe el formulario</h1> 
            }
            <form className="contentForm" onSubmit={enviarDatos}>
                <div className="contentForm__group">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" className="form-control" onChange={handleInputChange} onBlur={outValidateInputs} name="FirstName"></input>
                </div>

                {firstname?
                    <small className="inputError">{firstname}</small> :
                  ''
                }
                <div className="contentForm__group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" className="form-control" onChange={handleInputChange} name="LastName"></input>
                </div>
                {lastname?
                    <small className="inputError">{lastname}</small> :
                    ''
                }
                <div className="contentForm__group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" className="form-control" onChange={handleInputChange} name="Email"></input>
                </div>
                {
                    mail?
                    <small className="inputError">{mail}</small> :
                    ''
                }
                <div className="contentForm__group">
                    <label>Password</label>
                    <input type="password" placeholder="Password" className="form-control" onChange={handleInputChange} name="Password"></input>
                </div>
                {
                    passworduno ?
                    <small className="inputError">{ passworduno }</small> :
                    ''
                }
                <div className="contentForm__group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" className="form-control" onChange={handleInputChange} name="ConfirmPassword"></input>
                </div>
                {
                    passworddos ?
                    <small className="inputError">{passworddos}</small> :
                    ''
                }
                <button type="submit" className="contentForm__btn">Send</button>
            </form>
            <div className="resData"></div>
        </Fragment>
    );
};
    
export default Userform;