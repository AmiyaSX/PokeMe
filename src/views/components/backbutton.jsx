import Arrow from "../../assets/images/left-arrow.png";
function BackButton(props){
    return (
        <button className="back-button">
                <img src={Arrow}  width={58} height={58}/>
                <div>Back</div>
        </button>
    );
}

export default BackButton;