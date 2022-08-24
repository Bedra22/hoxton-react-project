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
        <div>
            <h1>
                travel {eachTravel?.id}
            </h1>
        </div>
    )
}