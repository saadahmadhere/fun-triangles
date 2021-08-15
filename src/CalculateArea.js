import { useState } from "react"

const CalculateArea = () => {

    const [base, setBase] = useState("")
    const [height, setHeight] = useState("")
    const [buttonClicked, setButtonClicked] = useState(false)

    const calculateButtonHandler = (e) =>{
        e.preventDefault()
        setButtonClicked(true)
    }

    let area = 1/2*(Number(base)*Number(height));
    
    return ( 
        <div className="calculateArea">
            <div className="blur">
                <h2>Enter the value of base and height to calculate the area of triangle</h2>
                <form onSubmit={calculateButtonHandler}>
                    <label htmlFor="base">base= </label>
                    <input type="number" id="base" min="0" onChange={e => setBase(e.target.value)}/>
                    <label htmlFor="height"> height= </label>
                    <input type="number" id="height" min="0" onChange={e => setHeight(e.target.value)}/>
                    <button type="submit">calculate</button>
                    </form>
                <h2>Area of the triangle is: </h2>
                {buttonClicked ? <h2>{area}</h2> : null}
            </div>
        </div>
     );
}
 
export default CalculateArea;