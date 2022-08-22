import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type ONeChallg = {
    id: number,
    image: string,
    title: string,
    content: string,
    purpose: string,
    length: string,
    Commitment: string,
    icon: string
}

export function EachChallenge() {
    const [eachChallenge, setEachChallenge] = useState<null | ONeChallg>()
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/challenges/${params.id}`)
            .then(resp => resp.json())
            .then(eachChallengeFromServer => setEachChallenge(eachChallengeFromServer))
    }, [])
    return (
        <div className="each-challenge">
            <div className="part-1">
                <h1>{eachChallenge?.title}</h1>
                <img src={eachChallenge?.image} />
            </div>
            <div className="part-2">
                <p>{eachChallenge?.content}</p>
                <h3>Purpose: {eachChallenge?.purpose}</h3>
                <p>Length: {eachChallenge?.length}</p>
                <p>Duration: {eachChallenge?.Commitment}</p>
                <img src={eachChallenge?.icon} />
            </div>
        </div>
    )
}