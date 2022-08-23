import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
type eachContent = {
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
    paragraph6: string,
    paragraph7: string
}
export function EachHairCare() {
    const [eachHair, setEachHair] = useState<null | eachContent>()
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/hair/${params.id}`)
            .then(resp => resp.json())
            .then(eachHairContent => setEachHair(eachHairContent))
    }, [])


    return (
        <div>
            <div className="eachHair-part1">
                <h1>{eachHair?.title}</h1>
                <img src={eachHair?.image} />
            </div>
            <div className="eachHiar-content">
                <div className="eachparagraph">
                    <h1>{eachHair?.main1}</h1>
                    <img src={eachHair?.image1} />
                    <p>{eachHair?.paragraph1}</p>
                </div>
                <div className="eachparagraph">
                    <h1>{eachHair?.main2}</h1>
                    <img src={eachHair?.image2} />
                    <p>{eachHair?.paragraph2}</p>

                </div>
                <div className="eachparagraph">
                    <h1>{eachHair?.main3}</h1>
                    <img src={eachHair?.image3} />
                    <p>{eachHair?.paragraph3}</p>
                </div>
                <div className="eachparagraph">
                    <h1>{eachHair?.main4}</h1>
                    <img src={eachHair?.image4} />
                    <p>{eachHair?.paragraph4}</p>
                </div>
                <div className="eachparagraph">
                    <h1>{eachHair?.main5}</h1>
                    <img src={eachHair?.image5} />
                    <p>{eachHair?.paragraph5}</p>

                </div>
                <div className="eachparagraph">
                    <p>{eachHair?.paragraph6}</p>
                </div>
                <div className="eachparagraph">
                    <p>{eachHair?.paragraph7}</p>
                </div>
            </div >
        </div>
    )
}