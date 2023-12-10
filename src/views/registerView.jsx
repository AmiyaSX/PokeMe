import React from 'react';
import InputForm from "./components/inputform";
import Banner from "./components/banner";
import LoadingIcon from "../assets/images/LoadingIcon.png"; 
import "/src/style.css";

function RegisterView(props){
    return (
        <div className="">
            <Banner text="Join and Try!"/>
            <div>
                <InputForm 
                    text="Email: " 
                    type="text" 
                    onChange={(e) => props.setEmail(e.target.value)} 
                />
                <InputForm 
                    text="Password: " 
                    type="password" 
                    onChange={(e) => props.setPassword(e.target.value)} 
                />
                <InputForm 
                    text="Confirm password: " 
                    type="password" 
                    onChange={(e) => props.setConfirmPassword(e.target.value)} 
                />
                {props.isLoading && (
                    <div className="loading-message">
                        {props.isRegistered ? "Register successful! Loading the Login page..." : "Processing..."}
                        <img src={LoadingIcon} alt="Loading" />
                    </div>
                )}
                {props.error && (
                    <div className="error-message">
                        <img 
                            className="error-message-icon" 
                            src="https://cdn-icons-png.flaticon.com/128/9647/9647409.png" 
                            alt="Error" 
                        />
                        {props.error}
                    </div>
                )}
                <div className='gap'/>
                <div className="flextRowParent">
                    <button className="button_1" onClick={props.handleRegister}>Register</button>
                </div>
                <div className="columnContainer">
                    <div className="normalText">I have an account. <a href="#/login">Login Here</a></div>
                </div>
                
            </div>
        </div>
        
        
    );
    
}


export default RegisterView;
