import TestPoint from "../../assets/images/testpoint.png";

function TestItem(props){
    const { text, onSelect, selectedValue } = props;

    const options = [1, 2, 3, 4, 5, 6, 7]; 
    return (
        <div className="columnContainer">
            <p className="normalText-test">{text}</p>
            <div className="mainContent">
                <div className="normalText-test2">Agree</div>
                {options.map((value) => (
                    <img 
                      key={value}
                      className={`point_img ${selectedValue === value ? "selected" : ""}`} 
                      src={TestPoint} 
                      style={{ width: `${9 - 2 * Math.abs(4 - value)}vw`, height: `${9 - 2 * Math.abs(4 - value)}vw` }} 
                      onClick={() => onSelect(value)}
                      alt="Test Point"
                    />
                ))}
                <div className="normalText-test2">Disagree</div>
            </div>
        </div>
    );
}

// function TestItem(props){
//     return (
//         <div className="columnContainer">
//             <p className="normalText-test">{props.text}</p>
//             <div className="mainContent">
//                 <div className="normalText-test2">Agree</div>
//                 <img className="point_img" src={TestPoint} style={{width:'9vw', height:'9vw'}} />
//                 <img className="point_img" src={TestPoint} style={{width:'7vw', height:'7vw'}} />
//                 <img className="point_img" src={TestPoint} style={{width:'5vw', height:'5vw'}} />
//                 <img className="point_img" src={TestPoint} style={{width:'3vw', height:'3vw'}} />
//                 <img className="point_img" src={TestPoint} style={{width:'5vw', height:'5vw'}} />
//                 <img className="point_img" src={TestPoint} style={{width:'7vw', height:'7vw'}} />
//                 <img className="point_img" src={TestPoint} style={{width:'9vw', height:'9vw'}} />
//                 <div className="normalText-test2">Disagree</div>
//             </div>
//         </div>
//     );
// }

export default TestItem;



