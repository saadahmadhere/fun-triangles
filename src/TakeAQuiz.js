import { useState } from "react";

const TakeAQuiz = () => {
    const correctAnswers = ["80°", "right angled", "105°" ]
    const userAnswers = [];

    var score = 0
    const [userAnswer1, setUserAnswer1] = useState(null)
    const [userAnswer2, setUserAnswer2] = useState(null)
    const [userAnswer3, setUserAnswer3] = useState(null)
    const [scoreDisplay, setScoreDisplay] = useState(null)

    const submitButtonHandler = (e) =>{
        e.preventDefault();
        
        userAnswers.push(userAnswer1, userAnswer2, userAnswer3);
       
        for(let i=0; i<correctAnswers.length; i++){
            if (correctAnswers[i] === userAnswers[i])
                score = score +1
        }

        setScoreDisplay(score)
        
    }

    

    return (
        <div className="quiz blur">
            <h1>Quiz on triangles</h1>
            <h2>For each correct answer you will get 1 point</h2>
            <form onSubmit={submitButtonHandler} className= "quizForm">
                <div className="questionContainer">

                    <h3>1. What is the third angle for a triangle if it's first angle is 45° and the second angle is 55°?</h3>
                    <label>
                        <input type="radio" name= "question-1" value="45°" onChange = {e=>{ console.log(e)
                        setUserAnswer1(e.target.value)}}/>
                        45°
                    </label>
                    <label>
                        <input type="radio" name= "question-1" value="80°" onChange = {e=>{setUserAnswer1(e.target.value)}}/>
                        80°
                    </label>
                    <label>
                        <input type="radio" name= "question-1" value="55°" onChange = {e=>{setUserAnswer1(e.target.value)}}/>
                        55°
                    </label>

                </div>

                <div className="questionContainer">

                    <h3>2. If a traingle has one of it's angle equal to 90°, then what it is called?</h3>
                    <label>
                        <input type="radio" name= "question-2" value="acute" onChange= {e=>{setUserAnswer2(e.target.value)}}/>
                        Acute angled triangle
                    </label>

                    <label>
                        <input type="radio" name= "question-2" value="obtuse" onChange= {e=>{setUserAnswer2(e.target.value)}}/>
                        Obtuse angled triangle
                    </label>

                    <label>
                        <input type="radio" name= "question-2" value="right angled" onChange= {e=>{setUserAnswer2(e.target.value)}}/>
                        Right angled triangle
                    </label>
                    
                </div>
                <div className="questionContainer">

                    <h3>3. What is the supplement of 75°?</h3>
                    <label>
                        <input type="radio" name= "question-3" value="15°" onChange = {e=>{ console.log(e)
                        setUserAnswer3(e.target.value)}}/>
                        15°
                    </label>
                    <label>
                        <input type="radio" name= "question-3" value="25°" onChange = {e=>{setUserAnswer3(e.target.value)}}/>
                        25°
                    </label>
                    <label>
                        <input type="radio" name= "question-3" value="105°" onChange = {e=>{setUserAnswer3(e.target.value)}}/>
                        105°
                    </label>

                </div>

                {scoreDisplay || scoreDisplay === 0 ? <h2>Your score is {scoreDisplay}</h2> : <button type="submit" >Check the Answers</button>}
                
            </form>

        </div>
     );
}
 
export default TakeAQuiz;