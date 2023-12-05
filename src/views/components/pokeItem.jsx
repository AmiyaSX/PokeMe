function PokeItem(props){
    return (
            <div className="card">
                <img className="card__img" src={props.image} alt=""></img>
                <div >
                    <span className="card__footer">
                        <span>{props.name}</span>
                        <span><button onClick={() => props.goToPokemonInfo(props.name)} href="">Find Out More!</button></span>
                    </span>
                </div>
            </div>
    );
}

export default PokeItem;