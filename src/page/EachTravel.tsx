import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type eachtravel = {
    id: number,
    title: string,
    image: string,
    main1: string,
    image1: string,
    paragraph1: string,
    main2: string,
    image2: string,
    paragraph2: string,
    main3: string,
    image3: string,
    paragraph3: string,
    main4: string,
    image4: string,
    paragraph4: string,
    main5: string,
    image5: string,
    paragraph5: string,
    main6: string,
    image6: string,
    paragraph6: string,
    main7: string,
    image7: string,
    paragraph7: string
}

export function EachTravel() {
    const [eachTravel, setEachTravel] = useState<null | eachtravel>()
    const params = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/travel/${params.id}`)
            .then(resp => resp.json())
            .then(travelContentFromServer => setEachTravel(travelContentFromServer))
    }, [])

    return (
        <div className="content-travel">
            <div className="travel-main">
                <h1>{eachTravel?.title}</h1>
                <img src={eachTravel?.image} />
            </div>
            <div className="whole-paragraphs">
                <div className="each-travel-content">
                    <h2>{eachTravel?.main1}</h2>
                    <img src={eachTravel?.image1} />
                    <p>{eachTravel?.paragraph1}</p>
                </div>
                <div className="each-travel-content">
                    <h2>{eachTravel?.main2}</h2>
                    <img src={eachTravel?.image2} />
                    <p>{eachTravel?.paragraph2}</p>
                </div>
                <div className="each-travel-content">
                    <h2>{eachTravel?.main3}</h2>
                    <img src={eachTravel?.image3} />
                    <p>{eachTravel?.paragraph3}</p>
                </div>
                <div className="each-travel-content">
                    <h2>{eachTravel?.main4}</h2>
                    <img src={eachTravel?.image4} />
                    <p>{eachTravel?.paragraph4}</p>
                </div>
                <div className="each-travel-content">
                    <h2>{eachTravel?.main5}</h2>
                    <img src={eachTravel?.image5} />
                    <p>{eachTravel?.paragraph5}</p>
                </div>
                <div className="each-travel-content">
                    <h2>{eachTravel?.main6}</h2>
                    <img src={eachTravel?.image6} />
                    <p>{eachTravel?.paragraph6}</p>
                </div>
                <div className="each-travel-content">
                    <h2>{eachTravel?.main7}</h2>
                    <img src={eachTravel?.image7} />
                    <p>{eachTravel?.paragraph7}</p>
                </div>
            </div>
        </div>
    )
}