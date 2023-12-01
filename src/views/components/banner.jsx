function Banner(props){
    return (
        <div className="banner">
            <div className="container">
                <div className="titleText"> {props.text}</div>
            </div>
        </div>
    );
}

export default Banner;