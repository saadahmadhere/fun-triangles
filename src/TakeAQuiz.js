import { useState } from "react";

const TakeAQuiz = () => {
    const correctAnswers = ["80°", "right angled" ]

    let score = 0
    const [userAnswer1, setUserAnswer1] = useState(null)
    const [userAnswer2, setUserAnswer2] = useState(null)

    const submitButtonHandler = (e) =>{
        e.preventDefault();

        if(userAnswer1 === "80°")
            score +=1
        else
    }

    return (
        <div className="quiz blur">
            <form onSubmit={submitButtonHandler} className= "quizForm">
                <div className="questionContainer">

                    <h3>What is the third angle for a triangle if it's first angle is 45° and the second angle is 55°?</h3>
                    <label>
                        <input type="radio" name= "question-1" value="45°" onChange = {e=>{setUserAnswer1(e.target.value)}}/>
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
                <button type="submit" >Check the Answers</button>
            </form>

            <div> ans1: {userAnswer1}</div>
            <div> ans2: {userAnswer2}</div>

        </div>
     );
}
 
export default TakeAQuiz;