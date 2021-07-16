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

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
      
    }
    
    // const enviarDatos = (event) => {
    //     event.preventDefault()
    //     let obj = {
    //         firstName : datos.FirstName,
    //         LastName :datos.LastName,
    //         Email : datos.Email,
    //         password : datos.Password,
    //         confirmPasword : datos.ConfirmPassword
    //     }

        // let formAfter = document.querySelector('.resData');

        // formAfter.innerHTML = `
        //     <ul>
        //     <h4>Your Form Data</h4>
        //     <li>First Name : ${obj.firstName}</li>
        //     <li>Last Name : ${obj.LastName}</li>
        //     <li>Email : ${obj.Email}</li>
        //     <li>Password : ${obj.password}</li>
        //     </ul>
        // `;
    // }

    const clearDatos = (event) =>{
        event.preventDefault();
        console.log('CLICK CLEARDATOS')
        setDatos({
            [event.target.name] : ''
        })

        // let resultados = document.querySelector('.resData')
        document.getElementById('FirstName').value = "";
        document.getElementById('LastName').value = "";
        document.getElementById('Email').value = "";
        document.getElementById('Password').value = "";
        document.getElementById('ConfirmPassword').value = "";
        // resultados.style.display = "none";
    }
    
    return(
         <Fragment>
            <h1>Form</h1>
            {/* <form className="contentForm" onSubmit={enviarDatos}> */}
            <form className="contentForm">
                <div className="contentForm__group">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" id="FirstName" className="formControl" onChange={handleInputChange} name="FirstName" required></input>
                </div>
                <div className="contentForm__group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" id="LastName" className="formControl" onChange={handleInputChange} name="LastName" required></input>
                </div>
                <div className="contentForm__group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" id="Email" className="formControl" onChange={handleInputChange} name="Email" required></input>
                </div>
                <div className="contentForm__group">
                    <label>Password</label>
                    <input type="password" placeholder="Password" id="Password" className="formControl" onChange={handleInputChange} name="Password" required></input>
                </div>
                <div className="contentForm__group">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" id="ConfirmPassword" className="formControl" onChange={handleInputChange} name="ConfirmPassword" required></input>
                </div>
                {/* <button type="submit" className="contentForm__btn">Send</button> */}
            </form>
            
            { datos.FirstName !== "" || datos.LastName !== "" || datos.Email !== "" || datos.Password !== "" ?
                <div className="resData" id="mostrar">
                    <ul>
                        <h4>Your Form Data</h4>
                        <li>First Name : {datos.FirstName}</li>
                        <li>Last Name : {datos.LastName}</li>
                        <li>Email :{datos.Email}</li>
                        <li>Password :{datos.Password }</li>
                    </ul>
                    <button href="#" className="contentForm__btn" onClick={clearDatos}>Clear</button>
                </div>
                :
                null
            }
        
        </Fragment>
    );
};
    
export default Userform;