import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type eachmakeup = {
    id: number,
    title: string,
    image: string,
    main1: string,
    image1: string,
    paragraph1: string,
    main2: string,
    image2: string,
    image21: string,
    image22: string,
    paragraph2: string,
    main3: string,
    image3: string,
    image31: string,
    image32: string,
    paragraph3: string,
    main4: string,
    image4: string,
    image41: string,
    image42: string,
    paragraph4: string,
    main5: string,
    image5: string,
    image51: string,
    image52: string,
    paragraph5: string,
    main6: string,
    image6: string,
    image61: string,
    image62: string,
    paragraph6: string,
    main7: string,
    image7: string,
    image71: string,
    image72: string,
    paragraph7: string
}
export function EachMakeUp() {
    const [eachMakeUp, setEachMakeUp] = useState<null | eachmakeup>()
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/makeup/${params.id}`)
            .then(resp => resp.json())
            .then(eachMakeUpFromserver => setEachMakeUp(eachMakeUpFromserver))

    }, [])
    return (
        <div className="makeup-whole-content">
            <div className="main-content-makeup">
                <h1>{eachMakeUp?.title}</h1>
                <img src={eachMakeUp?.image} />
            </div>

            <div className="each-content-whole">
                <div className="each-content">
                    <h2>{eachMakeUp?.main1}</h2>
                    <img src={eachMakeUp?.image1} />
                    <p>{eachMakeUp?.paragraph1}</p>
                </div>
                <div className="each-content">
                    <h2>{eachMakeUp?.main2}</h2>
                    <img src={eachMakeUp?.image2} />
                    <div className="each-content-2-images">
                        <img src={eachMakeUp?.image21} />
                        <img src={eachMakeUp?.image22} />
                    </div>
                    <p>{eachMakeUp?.paragraph2}</p>
                </div>
                <div className="each-content">
                    <h2>{eachMakeUp?.main3}</h2>
                    <img src={eachMakeUp?.image3} />
                    <div className="each-content-3-images">
                        <img src={eachMakeUp?.image31} />
                        <img src={eachMakeUp?.image32} />
                    </div>
                    <p>{eachMakeUp?.paragraph3}</p>
                </div>
                <div className="each-content">
                    <h2>{eachMakeUp?.main4}</h2>
                    <img src={eachMakeUp?.image4} />
                    <div className="each-content-2-images">
                        <img src={eachMakeUp?.image41} />
                        <img src={eachMakeUp?.image42} />
                    </div>
                    <p>{eachMakeUp?.paragraph4}</p>
                </div>
                <div className="each-content">
                    <h2>{eachMakeUp?.main5}</h2>
                    <img src={eachMakeUp?.image5} />
                    <div className="each-content-2-images">
                        <img src={eachMakeUp?.image51} />
                        <img src={eachMakeUp?.image52} />
                    </div>
                    <p>{eachMakeUp?.paragraph5}</p>
                </div>
                <div className="each-content">
                    <h2>{eachMakeUp?.main6}</h2>
                    <img src={eachMakeUp?.image6} />
                    <div className="each-content-2-images">
                        <img src={eachMakeUp?.image61} />
                        <img src={eachMakeUp?.image62} />
                    </div>
                    <p>{eachMakeUp?.paragraph6}</p>
                </div>
                <div className="each-content">
                    <h2>{eachMakeUp?.main7}</h2>
                    <img src={eachMakeUp?.image7} />
                    <div className="each-content-2-images">
                        <img src={eachMakeUp?.image71} />
                        <img src={eachMakeUp?.image72} />
                    </div>
                    <p>{eachMakeUp?.paragraph7}</p>
                </div>
            </div>
        </div>
    )
}