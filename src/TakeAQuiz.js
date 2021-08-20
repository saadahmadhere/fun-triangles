import { useState } from "react";

const TakeAQuiz = () => {
    const correctAnswers = ["80°", "right angled" ]
    const userAnswers = [];

    var score = 0
    const [userAnswer1, setUserAnswer1] = useState(null)
    const [userAnswer2, setUserAnswer2] = useState(null)
    const [scoreDisplay, setScoreDisplay] = useState(null)

    const submitButtonHandler = (e) =>{
        e.preventDefault();
        
        userAnswers.push(userAnswer1, userAnswer2);
       
        for(let i=0; i<correctAnswers.length; i++){
            if (correctAnswers[i] === userAnswers[i])
                score = score +1
        }

        setScoreDisplay(score)
        console.log("ans1", userAnswer1);
        console.log("correct answers: ", correctAnswers);
        console.log("user answers: ", userAnswers);
        console.log("score: ", score);
    }

    

    return (
        <div className="quiz blur">
            <h1>Quiz on triangles</h1>
            <h2>For each correct answer you will get 1 point</h2>
            <form onSubmit={submitButtonHandler} className= "quizForm">
                <div className="questionContainer">

                    <h3>What is the third angle for a triangle if it's first angle is 45° and the second angle is 55°?</h3>
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

                    <h3>If a traingle has one of it's angle equal to 90°, then what it is called?</h3>
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
                {scoreDisplay || scoreDisplay === 0 ? <h2>Your score is {scoreDisplay}</h2> : <button type="submit" >Check the Answers</button>}
                
            </form>

        </div>
     );
}
 
export default TakeAQuiz;