import InputForm from "./components/inputform";
import Banner from "./components/banner";
import "/src/style.css";


function LoginView(props){
    function goHome(){
        window.location.hash="#/home";
    }
    return (
        <div className="">
            <Banner text="Login to Test!"/>
            <div>
                <InputForm text="User Name: " type="text"/>
                <InputForm text="Password: " type="password"/>
                <div className="flextRowParent">
                    <button className="button_1" onClick={goHome}>Login</button>
                </div>
                <div className="columnContainer">
                    <div className="normalText">Don't have an account yet? <a href="#/register">Register Here!</a></div>
                </div>
                
            </div>
        </div>
        
    );
    
}


export default LoginView;
