
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AnglesOfTriangle from './AnglesOfTriangle';
import CheckHypotenuse from './CheckHypotenuse'
import CalculateArea from './CalculateArea'
import TakeAQuiz from './TakeAQuiz'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path ="/anglesOfTringles">
            <AnglesOfTriangle/>
          </Route>
          <Route path ="/checkHypotenuse">
            <CheckHypotenuse/>
          </Route>
          <Route path ="/calculateArea">
            <CalculateArea/>
          </Route>
          <Route path ="/takeAQuiz">
            <TakeAQuiz/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


