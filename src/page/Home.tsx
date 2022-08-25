import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
    const [challenges, setChallenges] = useState([])
    const [reviews, setreviews] = useState([])
    const [email, setEmail] = useState([])
    const [name, setName] = useState([])
    const [lastName, setLastName] = useState([])
    const [textArea, setTextArea] = useState([])


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
                    <Link to='/hair'  >
                        <button className="button-down">HAIR</button>
                    </Link>
                    <Link to='/makeup'  >
                        <button className="button-up">MAKEUP</button>
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
            <div className="review">
                <div className="post-review">
                    <h1>
                        Hey Hey Clients please leave a review :)
                    </h1>
                    <form
                        className="review-form"
                        onSubmit={event => {
                            event.preventDefault()

                            let oneReview = {
                                email,
                                name,
                                lastName,
                                textArea
                            }
                            setEmail('')
                            setName('')
                            setLastName('')
                            setTextArea('')

                            setreviews([...reviews, oneReview])

                        }}
                    >
                        <div className="review-inputs">
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                onChange={event => {
                                    setEmail(event.target.value)
                                }}
                                value={email}
                                autoComplete='off'
                            />
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                onChange={event => {
                                    setName(event.target.value)
                                }}
                                value={name}
                                autoComplete='off'
                            />
                            <input
                                type="text"
                                placeholder="Enter your LastNAme"
                                onChange={event => {
                                    setLastName(event.target.value)
                                }}
                                value={lastName}
                                autoComplete='off'
                            />
                            <textarea
                                name="review"
                                id=""
                                cols="30"
                                rows="10"
                                onChange={event => {
                                    setTextArea(event.target.value)
                                }}
                                value={textArea}
                                autoComplete='off'
                            >
                            </textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
                <div className="review-answers">
                    <ul>
                        {
                            reviews.map(item => (
                                <li>
                                    <h2>{item.email}</h2>
                                    <p>{item.textArea}</p>
                                    <h3>- {item.name} {item.lastName}</h3>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}