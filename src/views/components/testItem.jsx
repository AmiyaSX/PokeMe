import TestPoint from "../../assets/images/testpoint.png";

function TestItem(props){
    return (
        <div className="columnContainer">
            <p className="normalText-test">{props.text}</p>
            <div className="mainContent">
                <div className="normalText-test">Agree</div>
                <img className="point_img" src={TestPoint} style={{width:'9vw', height:'9vw'}} />
                <img className="point_img" src={TestPoint} style={{width:'7vw', height:'7vw'}} />
                <img className="point_img" src={TestPoint} style={{width:'5vw', height:'5vw'}} />
                <img className="point_img" src={TestPoint} style={{width:'3vw', height:'3vw'}} />
                <img className="point_img" src={TestPoint} style={{width:'5vw', height:'5vw'}} />
                <img className="point_img" src={TestPoint} style={{width:'7vw', height:'7vw'}} />
                <img className="point_img" src={TestPoint} style={{width:'9vw', height:'9vw'}} />
                <div className="normalText-test">Disagree</div>
            </div>
        </div>
    );
}

export default TestItem;