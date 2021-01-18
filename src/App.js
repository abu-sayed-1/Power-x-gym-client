import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CoursesList from './components/OurClasses/CoursesList/CoursesList';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ClassSchedule from './components/OurClasses/ClassSchedule/ClassSchedule';
import ChooseCourse from './components/PricingPlans/ChooseCourse/ChooseCourse';
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
        <Route path="/specificId:id">
          <ClassSchedule />
        </Route>
        <Route path="/chooseCourse">
          <ChooseCourse />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
