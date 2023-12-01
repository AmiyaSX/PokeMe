import InputForm from "./components/inputform";
import Banner from "./components/banner";
import "/src/style.css";

function RegisterView(props){
    
    return (
        <div className="">
            <Banner text="Join and Try!"/>
            <div>
                <InputForm text="User Name: " type="text"/>
                <InputForm text="Password: " type="password"/>
                <div className="flextRowParent">
                    <button className="button_1" onClick={''}>Register</button>
                </div>
                <div className="normalText">I have an account <a href="#/login">Login Here</a></div>
                
            </div>
        </div>
        
        
    );
    
}


export default RegisterView;
