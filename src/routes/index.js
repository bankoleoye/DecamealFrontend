import { Route, Routes } from "react-router-dom";

import AboutPage from "../pages/about/about";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import SubscriberDashboardProfile from "../components/SubscriberDashboard/SubscriberDashboardProfile";

import Home from "../pages/home/LandingPage";
import KitchenProfile from "../pages/Kitchen_profile_dashboad/kitchen_profile";
import Login from "../pages/login/login";
import Reset from "../pages/resetPassword/ResetPassword";
import SubscriberNotification from "../pages/subscriberNotification";
import Meal from "../pages/mealPage/meal"
import ProtectedRoute from "./ProtectedRoute";
import UsersProfile from "../pages/userProfile/index";
import EditProfile from "../pages/editProfile/editProfile";


const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/dashboard/" element={<ProtectedRoute />}>
      <Route path="" element={<SubscriberDashboardProfile />} />
      <Route path="notification" element={<SubscriberNotification />} />
      <Route path="profile" element={<UsersProfile />} />
      <Route path="edit-profile" element={<EditProfile />} />
    </Route>
    <Route path="/reset-password" element={<Reset />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/meals" element={<Meal />} />

    <Route exact path="/kitchen-profile" element={<KitchenProfile />} />
  </Routes>
);

export default App;
