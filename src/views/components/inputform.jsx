function InputForm(props) {
    return (
        <div className="flextRowParent">
            <div className="normalText">{props.text} </div>
            <input className="inputForm" type={props.type} />
        </div>
    );
}

export default InputForm;
