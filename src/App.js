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
import Registration from './components/PricingPlans/Registration/Registration';
import PaymentsGateway from './components/PricingPlans/PaymentsGateway/PaymentsGateway';
import MembershipCreated from './components/PricingPlans/MembershipCreated/MembershipCreated';
function App() {
  // pk_test_51HaKX2FWzFyXdW5KjdYVQtPEcdPZOSLq0nvfi4MfePscvZAop5VwXrGvH9Z0XjenRtpUwNFsX07um8rLzI8yrrB600opOV9Hw9
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
        <Route path="/Registration">
          <Registration />
        </Route>
        <Route path="/paymentsGateway">
          <PaymentsGateway />
        </Route>
        <Route path="/membershipCreated">
          <MembershipCreated />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}
 
export default App;
