import { useState } from "react"

const CheckHypotenuse = () => {

    const[buttonClicked, setButtonClicked] = useState(false)
    const[firstAngle, setFirstAngle] = useState("")
    const[secondAngle, setSecondAngle] = useState("")

    const firstValueHandler = (e) =>{
        setFirstAngle(e.target.value)
    }

    const secondValueHandler = (e) =>{
        setSecondAngle(e.target.value)
    }

    const submitButtonHandler = (e) =>{
        e.preventDefault();
        setButtonClicked(true)
    }

    let hypotenuse = Math.sqrt(Number(firstAngle)*Number(firstAngle) + Number(secondAngle)*Number(secondAngle));

    return ( 
        <div className="checkHypotenuse">

            <div className="blur">
                <h1>Length of hypotenuse c = sqrt(a² + b²)</h1>
            </div>    

            <form onSubmit={submitButtonHandler}>

                <label htmlFor="firstAngle">a:</label>
                <input type="number" id="firstAngle" className="angleInput" onChange={firstValueHandler}/>

                <label htmlFor="secondAngle">b:</label>
                <input type="number" id="secondAngle" className="angleInput" onChange={secondValueHandler}/>
                
                <button type= "submit">Check</button>
            </form>

            <div className="output">
                <div className="blur">
                    <h2>Hypotenuse will be calculated here: </h2>
                    {buttonClicked ? <h2>c= {hypotenuse}</h2> : null}
                </div>
            </div>

        </div>
    );
}
 
export default CheckHypotenuse;