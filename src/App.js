
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AnglesOfTriangle from './AnglesOfTriangle';
import CheckHypotenuse from './CheckHypotenuse'
import CalculateArea from './CalculateArea'
import TakeAQuiz from './TakeAQuiz'
// import {Footer} from './Footer'
import Home from './Home'


export const Footer = () => {
  return ( 
      <footer>
      <ul>
      <li className="footerLink">
          <a href="mailto:saadahmad728@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
        <li className="footerLink">
          <a href="https://github.com/saadahmadhere/">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li className="footerLink">
          <a href="https://twitter.com/imsaadahmad">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="footerLink">
          <a href="https://www.linkedin.com/in/saadahmadhere/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="footerLink">
          <a href="https://saadahmad.netlify.app/">
            <i className="fas fa-briefcase"></i>
          </a>
        </li>

      </ul>
    </footer>
   );
}



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


