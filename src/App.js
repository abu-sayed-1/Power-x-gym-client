import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CoursesList from './components/OurClasses/CoursesList/CoursesList';
import TrainingDetail from './components/OurClasses/TrainingDetail/TrainingDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/coursesList">
            <CoursesList />
          </Route>
          <Route path="/trainingDetail">
            <TrainingDetail />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
