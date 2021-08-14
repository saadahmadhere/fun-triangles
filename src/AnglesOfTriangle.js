import { useState } from "react";

const AnglesOfTriangle = () => {

    const[firstValue, setFirstValue] = useState("");
    const[secondValue, setSecondValue] = useState("");
    const[thirdValue, setThirdValue] = useState("");
    const [isTriangle, setIsTriangle] = useState("Your output will go here.");

    let sum = 0;

    const firstValueHandler = (e) =>{
        setFirstValue(e.target.value);
    }

    const secondValueHandler = (e) =>{
        setSecondValue(e.target.value);
    }

    const thirdValueHandler = (e) =>{
        setThirdValue(e.target.value);
    }

    const submitButtonHandler = (e) =>{
        e.preventDefault();
        sum = Number(firstValue) + Number(secondValue) + Number(thirdValue);
        if(sum===180)
            setIsTriangle("These angles can make a triangle.")
        else 
            setIsTriangle("Sorry, they don't make a triangle.")
    }
    
    function Triangle(){
        return <h2>{isTriangle}</h2> 
    }

    return ( 
        <div className="anglesOfTriangle">
            <div className="blur">
               <h2>Enter the angles in below input boxes and we will tell you if those angles make a Triangle</h2>
            </div>
            <form onSubmit={submitButtonHandler}>
                <input onChange = {firstValueHandler} min = "1" max = "180" className = "angleInput" type="number" autoFocus required/>
                <input onChange = {secondValueHandler} min = "1" max = "180" className = "angleInput" type="number" required/>
                <input onChange = {thirdValueHandler} min = "1" max = "180" className = "angleInput" type="number" required/>
                <button type="submit">submit</button>
            </form>
            <Triangle/>
        </div>
     );
}
 
export default AnglesOfTriangle;