import { useState } from "react";


let Login = () => {

    let [username,storeUsername] = useState("");
    let [password,storePassword] = useState("");


    let readUsername = (event) => {
        // username = event.target.value;
        storeUsername(event.target.value);
    }

    let readPassword = (event) => {
        // password = event.target.value;
        storePassword(event.target.value);
    }

    let loginClick = (event) => {
        alert("username = " + username + " and password = " + password);

        if(username === password)
        {
            console.log("user logged in successfully. username = " + username + " and password = " + password);
        }
        else
        {
            console.log("invalid username or password");
        }
    }

    return (
        <>
            <div className="card m-4" style={{ width: "300px" , height:"50%" }}>
                <div className="card-header">
                    <h3>Login Page</h3>
                </div>

                <div className="card-body">
                    <input type="text" className="form-control my-3" name="username" placeholder="username" onChange={readUsername}/>
                    <input type="password" className="form-control my-3" name="password" placeholder="password" onChange={readPassword}/>
                </div>

                <div className="card-footer">
                    <button className="btn btn-primary float-end" onClick={loginClick}>login</button>
                </div>
            </div>
        </>
    )
}

export default Login;