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
import Membership from './components/PricingPlans/Membership/Membership';
import PaymentsGateway from './components/PricingPlans/PaymentsGateway/PaymentsGateway';
//https://www.sandbox.paypal.com/myaccount/summary?intl=0
//https://developer.paypal.com/developer/applications
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
        <Route path="/membership">
          <Membership />
        </Route>
        <Route path="/paymentsGateway">
          <PaymentsGateway />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
