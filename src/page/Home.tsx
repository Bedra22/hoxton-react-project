import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
    const [challenges, setChallenges] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/challenges')
            .then(resp => resp.json())
            .then(challengesFromServer => setChallenges(challengesFromServer))
    }, [])
    return (
        <div className="home">
            <div className="first-h1">
                <h1>“No one is perfect - that’s why pencils have erasers.”
                    <h2>-Wolfgang Riebe</h2>
                </h1>
            </div>
            <div className="introduction">
                <div className="text-part">
                    <p>
                        Welcome to <span>Daily Life</span> — a new wellness platform that helps you create an aligned and balanced body.
                        Inside Daily Life you will find a range of classes,
                        programs and everyday steps a girl goes through that will help you care for your body, support your mental health and restore your energy.
                        We can’t wait to start moving and growing with you.
                    </p>
                </div>
                <div className="options-in-daily-life">
                    <Link to='/college'  >
                        <button className="button-up">COLLEGE</button>
                    </Link>
                    <Link to='/hair'  >
                        <button className="button-down">HAIR</button>
                    </Link>
                    <Link to='/beauty'  >
                        <button className="button-up">BEAUTY</button>
                    </Link>
                    <Link to='/travel'  >
                        <button className="button-down">TRAVEL</button>
                    </Link>
                    <Link to='/fashion'  >
                        <button className="button-up">FASHION</button>
                    </Link>

                </div>
            </div>
            <div className="loop-challenges">
                <h2>Challenges</h2>
                <ul>
                    {challenges.map(item => (
                        <li>
                            <Link to={`/home/${item.id}`}>
                                <img src={item.image} />
                                <h1>{item.title}</h1>
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}