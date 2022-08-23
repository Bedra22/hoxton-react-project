import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Hair() {
    const [hair, setHair] = useState([])
    const [searchHair, setsearchHair] = useState('')

    const filteredHair = hair.filter(searchingFilterdHair => searchingFilterdHair.title.toLowerCase().includes(searchHair))
    useEffect(() => {
        fetch('http://localhost:4000/hair')
            .then(resp => resp.json())
            .then(hairFromServer => setHair(hairFromServer))
    }, [])
    return (
        <div className="hair">
            <div className="hair-part-1">
                <div className="search-hair">
                    <input
                        type="text"
                        className="searching-hair"
                        placeholder="Search here..."
                        onChange={event => {
                            setsearchHair(event.target.value)
                        }}
                    />
                    <button>🔎</button>
                </div>
            </div>
            <div className="hair-loop">
                <ul>
                    {
                        filteredHair.map(item => (
                            <li>
                                <Link to={`/hair/${item.id}`}>
                                    <img src={item.image} />
                                    <div className="text-name">
                                        <h2>{item.title}</h2>
                                        <h4>Tell me more</h4>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}