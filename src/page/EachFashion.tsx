import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
type eachItem = {
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
export function EachFashion() {
    const [eachFashionItem, setEachFashionItem] = useState<null | eachItem>()
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/fashion/${params.id}`)
            .then(resp => resp.json())
            .then(eachFashionItemFromServer => setEachFashionItem(eachFashionItemFromServer))
    }, [])
    return (
        <div className="each-travel-whole">
            <div className="eachFashionItem-part1">
                <h1>{eachFashionItem?.title}</h1>
                <img src={eachFashionItem?.image} />
            </div>
            <div className="eachFashionItem-content">
                <div className="eachparagraph-fashion">
                    <h2>{eachFashionItem?.main1}</h2>
                    <img src={eachFashionItem?.image1} />
                    <p>{eachFashionItem?.paragraph2}</p>
                </div>
                <div className="eachparagraph-fashion">
                    <h2>{eachFashionItem?.main2}</h2>
                    <img src={eachFashionItem?.image2} />
                    <p>{eachFashionItem?.paragraph2}</p>

                </div>
                <div className="eachparagraph-fashion">
                    <h2>{eachFashionItem?.main3}</h2>
                    <img src={eachFashionItem?.image3} />
                    <p>{eachFashionItem?.paragraph3}</p>
                </div>
                <div className="eachparagraph-fashion">
                    <h2>{eachFashionItem?.main4}</h2>
                    <img src={eachFashionItem?.image4} />
                    <p>{eachFashionItem?.paragraph4}</p>
                </div>
                <div className="eachparagraph-fashion">
                    <h2>{eachFashionItem?.main5}</h2>
                    <img src={eachFashionItem?.image5} />
                    <p>{eachFashionItem?.paragraph5}</p>

                </div>
                <div className="eachparagraph-fashion">
                    <h2>{eachFashionItem?.main6}</h2>
                    <img src={eachFashionItem?.image6} />
                    <p>{eachFashionItem?.paragraph6}</p>
                </div>
                <div className="eachparagraph-fashion">
                    <h2>{eachFashionItem?.main7}</h2>
                    <img src={eachFashionItem?.image7} />
                    <p>{eachFashionItem?.paragraph7}</p>
                </div>
            </div >
        </div>
    )
}