import './CardStyle.css'

export default function Card({name, pic, pickCard}) {

    const handleClick = () => {
        pickCard(name);
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={pic}></img>
            <h3>{name}</h3>
        </div>
    )
}