import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"

export function MakeUp() {
    const [makeUp, setMakeUp] = useState([])
    const [searchMakeUp, setSearchmakeUp] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/makeup')
            .then(resp => resp.json())
            .then(makeUpFromServer => setMakeUp(makeUpFromServer))
    }, [])

    const filteredMakeUp = makeUp.filter(searchingMakeUp => searchingMakeUp.title.toLowerCase().includes(searchMakeUp))

    if (makeUp === null) return (
        <h1>
            Loading...
        </h1>
    )


    return (
        <div>
            <div className="makeup-part-1">
                <h1>
                    Makeup
                </h1>
            </div>
            <div className="search-makeup">
                <input
                    type="text"
                    className="searching-makeup"
                    placeholder="Search here..."
                    onChange={event => {
                        setSearchmakeUp(event.target.value)
                    }}
                />
                <button>🔎</button>
            </div>
            <div className="makeup-loop">
                <ul>
                    {
                        filteredMakeUp.map(item => (
                            <li>
                                <Link to={`/makeup/${item.id}`}>
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