import TestPoint from "../../assets/images/testpoint.png";

function TestItem(props){
    return (
        <div className="columnContainer">
            <p className="normalText-test">{props.text}</p>
            <div className="mainContent">
                <div className="normalText-test">Agree</div>
                <img className="point_img" src={TestPoint} width={140} height={140} />
                <img className="point_img" src={TestPoint} width={120} height={120} />
                <img className="point_img" src={TestPoint} width={100} height={100} />
                <img className="point_img" src={TestPoint} width={76} height={76} />
                <img className="point_img" src={TestPoint} width={100} height={100} />
                <img className="point_img" src={TestPoint} width={120} height={120} />
                <img className="point_img" src={TestPoint} width={140} height={140} />
                <div className="normalText-test">Disagree</div>
            </div>
        </div>
    );
}

export default TestItem;