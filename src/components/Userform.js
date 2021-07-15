import React, { Fragment, useState, useEffect } from  'react';
    
    
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
 
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    
    const enviarDatos = (event) => {
        event.preventDefault()
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
    
    return(
         <Fragment>
            <h1>Form</h1>
            <form className="contentForm" onSubmit={enviarDatos}>
                <div className="contentForm__group">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" className="form-control" onChange={handleInputChange} name="FirstName" required></input>
                </div>
                <div className="contentForm__group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" className="form-control" onChange={handleInputChange} name="LastName" required></input>
                </div>
                <div className="contentForm__group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" className="form-control" onChange={handleInputChange} name="Email" required></input>
                </div>
                <div className="contentForm__group">
                    <label>Password</label>
                    <input type="password" placeholder="Password" className="form-control" onChange={handleInputChange} name="Password" required></input>
                </div>
                <div className="contentForm__group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" className="form-control" onChange={handleInputChange} name="ConfirmPassword" required></input>
                </div>
                <button type="submit" className="contentForm__btn">Send</button>
            </form>
            <div className="resData"></div>
        </Fragment>
    );
};
    
export default Userform;