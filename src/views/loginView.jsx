import InputForm from "./components/inputform";
import Banner from "./components/banner";
import "/src/style.css";


function LoginView(props){
    return (
        <div className="">
            <Banner text="Login to Test!"/>
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
                <div className="flextRowParent">
                    <button className="button_1" onClick={props.handleLogin}>Login</button>
                </div>
                <div className="columnContainer">
                    <div className="normalText">Don't have an account yet? <a href="#/register">Register Here!</a></div>
                </div>
                
            </div>
        </div>
        
    );
    
}


export default LoginView;
