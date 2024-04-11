import './CardStyle.css'

export default function Card({name, pic}) {
    return (
        <div className="card">
            <img src={pic}></img>
            <h3>{name}</h3>
        </div>
    )
}