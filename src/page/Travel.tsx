import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Travel() {
    const [travel, setTravel] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/travel')
            .then(resp => resp.json())
            .then(travelFromServer => setTravel(travelFromServer))
    }, [])
    return (
        <div className="travel">
            <h1>
                Mini travel blog
            </h1>
            <div className="mini-travel-blog">
                <ul>
                    {
                        travel.map(item => (
                            <li>
                                <Link to={`/travel/${item.id}`}>
                                    <img src={item.image} />
                                    <h2>{item.title}</h2>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}