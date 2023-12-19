function HistoryItem(props){
    return (
            <div className="history">
                <img className="img_3" src={props.image} alt=""></img>
                <div className="textBox-history">
                    <div className="introText-history">
                        {props.intro}
                    </div>
                </div>
                <div className="date">
                    {props.date}
                </div>
            </div>
        
    );
}

export default HistoryItem;