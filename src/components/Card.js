export default function Card(props)
{
    return(
        <div className="card">
            <img className="card-img" src={`images/${props.image}`} alt=""></img>
            <div className="card-body">
                <h1 className="card__body-head">{props.name}</h1>
                <p className="card__body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p><span>{props.price}</span><span className="discount">120</span></p>
                <button className="btn">Book</button>
            </div>
        </div>
    )
}