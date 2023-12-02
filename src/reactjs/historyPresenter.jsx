import HistoryView from "../views/historyView";
import { observer } from "mobx-react-lite";
export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function History(props){
        return <HistoryView />;
    }
);