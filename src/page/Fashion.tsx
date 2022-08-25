import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Fashion() {
    const [fashion, setfashion] = useState([])
    const [searchfashionnnnnn, setsearchfashion] = useState('')

    const filterdFashion = fashion.filter(searchedfashion => searchedfashion.title.toLowerCase().includes(searchfashionnnnnn))

    useEffect(() => {
        fetch('http://localhost:4000/fashion')
            .then(resp => resp.json())
            .then(fashionFromServer => setfashion(fashionFromServer))
    }, [])
    return (
        <div className="fashion">
            <h1>
                Little Glimpse And Tips About Fashion
            </h1>
            <div className="search-fashion">
                <input
                    type="text"
                    className="searching-fashion"
                    placeholder="Search here..."
                    onChange={event => {
                        setsearchfashion(event.target.value)
                    }}
                />
                <button>🔎</button>
            </div>
            <div className="fashion-loop">
                <ul>
                    {
                        filterdFashion.map(item => (
                            <li>
                                <Link to={`/fashion/${item.id}`}>
                                    <img src={item.image} />
                                    <h1>{item.title}</h1>
                                </Link>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}