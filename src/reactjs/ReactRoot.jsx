import Home from "./homePresenter";

import { createHashRouter,  RouterProvider} from "react-router-dom";
import { observer } from "mobx-react-lite";
export default


observer( 
function ReactRoot(props){
    function makeRouter(model){
        return createHashRouter([
            {path: "/", element: <Home model={model} />,},
        ])
    }
    function App(props){
        return (  
                <div>
                    <RouterProvider router={makeRouter(props.model)}/>
                </div>
        );
    }
    return (
            <App model={props.model}></App>
           );
    }
)