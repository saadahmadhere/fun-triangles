import {Link} from 'react-router-dom'

const Home = () => {
    return ( 
        <div>
            <h2>Welcome to fun with triangles.</h2>
            <div className="main-container">
                <div className="container">
                    <div className="box">
                      <Link to="anglesOfTringles">
                          <h3>Angles of triangle</h3>
                      </Link>
                    </div>
                    <div className="box">
                      <Link to="checkHypotenuse">
                        <h3>Check Hypotenuse</h3>
                      </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="box">
                      <Link to="calculateArea">
                        <h3>Calculate Area</h3>
                      </Link>
                    </div>
                    <div className="box">
                      <Link to="takeAQuiz">
                        <h3>Take a Quiz</h3>
                      </Link>
                    </div>
                </div>
            </div> 
        </div>
     );
}
 
export default Home;