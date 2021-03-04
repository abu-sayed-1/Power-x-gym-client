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
import LoginManagement from './components/PricingPlans/LoginManagement/LoginManagement';
import PrivateRoute from './components/PricingPlans/PrivateRoute/PrivateRoute';
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
        <PrivateRoute path="/paymentsGateway">
          <PaymentsGateway />
        </PrivateRoute>
        <Route path="/membershipCreated">
          <MembershipCreated />
        </Route>
        <PrivateRoute path="/registration">
          <Registration />
        </PrivateRoute>
        <Route path="/loginManagement">
          <LoginManagement />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
