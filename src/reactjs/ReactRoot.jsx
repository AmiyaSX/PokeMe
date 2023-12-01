import { createHashRouter,  RouterProvider} from "react-router-dom";
import { observer } from "mobx-react-lite";
import Login from "../reactjs/loginPresenter";
import Register from "./registerPresenter";
import Home from "./homePresenter";
import Test from "./testPresenter";
import Result from "./testResultPresenter";
import History from "./historyPresenter";
import TopBar from "../views/components/topbar";
export default


observer( 
function ReactRoot(props){
    function makeRouter(model){
        return createHashRouter([
            {path: "/", element: <Login model={model} />,},
            {path: "/login", element: <Login model={model} />,},
            {path: "/register", element: <Register model={model} />,},
            {path: "/home", element: <Home model={model} />,},
            {path: "/test", element: <Test model={model} />,},
            {path: "/results", element: <Result model={model} />,},
            {path: "/history", element: <History model={model} />,},
        ])
    }
    function App(props){
        return (  
                <div>
                    <TopBar />
                    <RouterProvider router={makeRouter(props.model)}/>

                </div>
        );
    }
    return (
            <App model={props.model}></App>
           );
    }
)