import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Travel() {
    const [travel, setTravel] = useState([])
    const [searchTravel, setSearchTravel] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/travel')
            .then(resp => resp.json())
            .then(travelFromServer => setTravel(travelFromServer))
    }, [])

    const filteredTravel = travel.filter(searchingTravel => searchingTravel.title.toLowerCase().includes(searchTravel))
    return (
        <div className="travel">
            <h1>
                Mini travel blog
            </h1>
            <div className="search-travel">
                <input
                    type="text"
                    className="searching-travel"
                    placeholder="Search here..."
                    onChange={event => {
                        setSearchTravel(event.target.value)
                    }}
                />
                <button>🔎</button>
            </div>
            <div className="mini-travel-blog">
                <ul>
                    {
                        filteredTravel.map(item => (
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