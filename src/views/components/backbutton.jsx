import Arrow from "../../assets/images/left-arrow.png";
function BackButton(props){
    const goBack = () => {
        window.location.hash = "#/home";
    };

    return (
        <button className="back-button" onClick={goBack}>
                <img src={Arrow}  style={{ width: '5vw', height: '5vh'}}/>
                <div style={{fontSize: '3vh'}}>Back</div>
        </button>
    );
}

export default BackButton;