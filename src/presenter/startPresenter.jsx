import StartView from "../views/startView";
import { observer } from "mobx-react-lite";
import promiseNoDataView from "../views/promiseNoData.jsx";

export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function Start(props){

        return <StartView/>;
    }
);